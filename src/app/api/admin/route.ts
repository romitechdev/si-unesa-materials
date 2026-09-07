import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "romitech2025";
const CONTENT_DIR = path.join(process.cwd(), "content");

function auth(req: NextRequest) {
  const pass = req.headers.get("x-admin-pass");
  return pass === ADMIN_PASSWORD;
}

interface Resource {
  title: string;
  url: string;
  type?: string;
}

function buildFile(title: string, description: string, minutes: number, resources: Resource[], content: string) {
  const resourceLines = (resources || [])
    .filter((r: Resource) => r.title && r.url)
    .map(
      (r: Resource) =>
        `  - title: "${r.title.replace(/"/g, '\\"')}"\n    url: "${r.url}"\n    type: ${r.type || "link"}`
    )
    .join("\n");

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    description ? `description: "${description.replace(/"/g, '\\"')}"` : "",
    `minutes: ${minutes || 1}`,
    `updated: "${new Date().toISOString().split("T")[0]}"`,
    resourceLines ? `resources:\n${resourceLines}` : "",
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return `${frontmatter}\n\n${content}\n`;
}

export async function GET(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const courseSlug = searchParams.get("course");
  const fileSlug = searchParams.get("file");

  if (courseSlug && fileSlug) {
    const filePath = path.join(CONTENT_DIR, courseSlug, `${fileSlug}.md`);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return NextResponse.json({
      title: data.title || fileSlug,
      description: data.description || "",
      minutes: data.minutes || 1,
      lecturer: data.lecturer || "",
      resources: data.resources || [],
      content,
    });
  }

  const courses: { slug: string; lecturer: string; sessions: { fileSlug: string; title: string; description: string }[] }[] = [];
  if (fs.existsSync(CONTENT_DIR)) {
    const dirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());
    for (const d of dirs) {
      const files = fs
        .readdirSync(path.join(CONTENT_DIR, d.name))
        .filter((f) => /\.(md|mdx)$/.test(f))
        .sort();
      let courseLecturer = "";
      const metaPath = path.join(CONTENT_DIR, d.name, "_course.json");
      if (fs.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
          courseLecturer = meta.lecturer || "";
        } catch {}
      }
      const sessions = files.map((f) => {
        const raw = fs.readFileSync(path.join(CONTENT_DIR, d.name, f), "utf8");
        const { data } = matter(raw);
        return {
          fileSlug: f.replace(/\.(md|mdx)$/, ""),
          title: (data.title as string) || f,
          description: (data.description as string) || "",
        };
      });
      courses.push({ slug: d.name, lecturer: courseLecturer, sessions });
    }
  }

  return NextResponse.json({ courses });
}

export async function POST(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { createCourse, courseSlug, title, description, minutes, resources, content, fileSlug } = body;

  // Create course (folder only, no dummy file)
  if (createCourse) {
    if (!courseSlug) {
      return NextResponse.json({ error: "courseSlug required" }, { status: 400 });
    }
    const safeSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const dir = path.join(CONTENT_DIR, safeSlug(courseSlug));

    if (fs.existsSync(dir)) {
      return NextResponse.json({ error: "Course already exists" }, { status: 400 });
    }

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "_course.json"), JSON.stringify({ lecturer: "" }, null, 2), "utf8");
    return NextResponse.json({ success: true, slug: safeSlug(courseSlug) });
  }

  if (!courseSlug || !title || !content) {
    return NextResponse.json({ error: "courseSlug, title, and content are required" }, { status: 400 });
  }

  const safeSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const dir = path.join(CONTENT_DIR, safeSlug(courseSlug));

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const finalFileSlug = fileSlug ? safeSlug(fileSlug) : `session-${Date.now()}`;
  const filePath = path.join(dir, `${finalFileSlug}.md`);

  fs.writeFileSync(filePath, buildFile(title, description || "", minutes || 1, resources, content), "utf8");

  return NextResponse.json({ success: true, slug: `${safeSlug(courseSlug)}/${finalFileSlug}` });
}

export async function PUT(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { renameCourse, oldSlug, newSlug, courseSlug, fileSlug, title, description, minutes, resources, content, courseMeta } = body;

  const safeSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  // Update course metadata (lecturer, etc.)
  if (courseMeta && courseSlug) {
    const dirPath = path.join(CONTENT_DIR, safeSlug(courseSlug));
    if (!fs.existsSync(dirPath)) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
    const metaPath = path.join(dirPath, "_course.json");
    let existing: Record<string, string> = {};
    if (fs.existsSync(metaPath)) {
      try { existing = JSON.parse(fs.readFileSync(metaPath, "utf8")); } catch {}
    }
    existing.lecturer = courseMeta.lecturer || "";
    fs.writeFileSync(metaPath, JSON.stringify(existing, null, 2), "utf8");
    return NextResponse.json({ success: true });
  }

  // Fitur Rename Mata Kuliah
  if (renameCourse) {
    if (!oldSlug || !newSlug) {
      return NextResponse.json({ error: "oldSlug dan newSlug wajib diisi" }, { status: 400 });
    }
    const oldPath = path.join(CONTENT_DIR, safeSlug(oldSlug));
    const newPath = path.join(CONTENT_DIR, safeSlug(newSlug));

    if (!fs.existsSync(oldPath)) {
      return NextResponse.json({ error: "Mata kuliah lama tidak ditemukan" }, { status: 404 });
    }
    if (fs.existsSync(newPath) && oldPath !== newPath) {
      return NextResponse.json({ error: "Mata kuliah dengan nama tersebut sudah ada" }, { status: 400 });
    }

    fs.renameSync(oldPath, newPath);
    return NextResponse.json({ success: true, newSlug: safeSlug(newSlug) });
  }

  // Edit Materi Biasa
  if (!courseSlug || !fileSlug || !title || !content) {
    return NextResponse.json({ error: "courseSlug, fileSlug, title, and content are required" }, { status: 400 });
  }

  const filePath = path.join(CONTENT_DIR, courseSlug, `${fileSlug}.md`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  fs.writeFileSync(filePath, buildFile(title, description || "", minutes || 1, resources, content), "utf8");

  return NextResponse.json({ success: true, slug: `${courseSlug}/${fileSlug}` });
}

export async function DELETE(req: NextRequest) {
  if (!auth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { courseSlug, fileSlug, deleteCourse } = await req.json();
  if (!courseSlug) {
    return NextResponse.json({ error: "courseSlug required" }, { status: 400 });
  }

  const dirPath = path.join(CONTENT_DIR, courseSlug);

  // Jika minta hapus seluruh mata kuliah
  if (deleteCourse) {
    if (!fs.existsSync(dirPath)) {
      return NextResponse.json({ error: "Mata kuliah tidak ditemukan" }, { status: 404 });
    }
    fs.rmSync(dirPath, { recursive: true, force: true });
    return NextResponse.json({ success: true });
  }

  // Jika minta hapus 1 materi
  if (!fileSlug) {
    return NextResponse.json({ error: "fileSlug required" }, { status: 400 });
  }

  const filePath = path.join(dirPath, `${fileSlug}.md`);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  fs.unlinkSync(filePath);
  return NextResponse.json({ success: true });
}
