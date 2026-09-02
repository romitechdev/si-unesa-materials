import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export type Resource = {
  title: string;
  url: string;
  type: "ppt" | "pdf" | "video" | "repo" | "link";
};

export type Heading = { id: string; text: string; depth: number };

export type Session = {
  slug: string;
  fileSlug: string;
  title: string;
  description?: string;
  order: number;
  minutes: number;
  updated?: string;
  resources: Resource[];
  content: string;
  headings: Heading[];
};

export type Course = {
  slug: string;
  title: string;
  description?: string;
  code?: string;
  category?: string;
  lecturer?: string;
  sessions: Session[];
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function parseHtml(markdown: string) {
  const processor = remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeHighlight, { ignoreMissing: true, detect: false })
    .use(rehypeStringify, { allowDangerousHtml: false });
  let html = String(processor.processSync(markdown));
  html = html.replace(/<table>/g, '<div class="table-wrapper"><table>');
  html = html.replace(/<\/table>/g, '</table></div>');
  return html;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const re = /<h([2-4])[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    headings.push({
      depth: Number(m[1]),
      id: m[2],
      text: decodeEntities(m[3].replace(/<[^>]+>/g, "")).trim(),
    });
  }
  return headings;
}

function normalizeOrder(fileSlug: string, frontOrder?: number): number {
  if (typeof frontOrder === "number") return frontOrder;
  const match = fileSlug.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

async function readSession(
  dir: string,
  file: string,
  courseSlug: string
): Promise<Session> {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(raw);
  const fileSlug = file.replace(/\.(md|mdx)$/, "");
  const html = parseHtml(content);
  return {
    slug: `${courseSlug}/${fileSlug}`,
    fileSlug,
    title: (data.title as string) ?? fileSlug,
    description: data.description as string | undefined,
    order: normalizeOrder(fileSlug, data.order as number | undefined),
    minutes: (data.minutes as number) ?? 1,
    updated: data.updated as string | undefined,
    resources: (data.resources as Resource[] | undefined) ?? [],
    content: html,
    headings: extractHeadings(html),
  };
}

export async function getCourses(): Promise<Course[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const courseDirs = fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const courses: Course[] = [];
  for (const courseSlug of courseDirs) {
    const dir = path.join(CONTENT_DIR, courseSlug);
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(md|mdx)$/.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const sessions = (await Promise.all(
      files.map((f) => readSession(dir, f, courseSlug))
    )).sort((a, b) => a.order - b.order || a.fileSlug.localeCompare(b.fileSlug));

    let courseLecturer: string | undefined;
    const metaPath = path.join(dir, "_course.json");
    if (fs.existsSync(metaPath)) {
      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
        courseLecturer = meta.lecturer || undefined;
      } catch {}
    }

    courses.push({
      slug: courseSlug,
      title: courseSlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      lecturer: courseLecturer,
      sessions,
    });
  }

  return courses;
}

export async function findSession(courseSlug: string, fileSlug: string) {
  const courses = await getCourses();
  const course = courses.find((c) => c.slug === courseSlug);
  const session = course?.sessions.find((s) => s.fileSlug === fileSlug);
  return { course, session };
}

export type SearchItem = {
  course: string;
  courseSlug: string;
  session: string;
  fileSlug: string;
  slug: string;
  text: string;
};

export async function getSearchIndex(): Promise<SearchItem[]> {
  const courses = await getCourses();
  const items: SearchItem[] = [];
  for (const course of courses) {
    for (const session of course.sessions) {
      items.push({
        course: course.title,
        courseSlug: course.slug,
        session: session.title,
        fileSlug: session.fileSlug,
        slug: session.slug,
        text: session.description || "",
      });
    }
  }
  return items;
}
