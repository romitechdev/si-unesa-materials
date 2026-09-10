import Link from "next/link";
import type { Course, Session } from "@/lib/content";
import {
  FileText,
  File as FileIcon,
  FileVideo,
  Code2,
  Link2,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Clock,
  CalendarDays,
  User,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { TableOfContents } from "./table-of-contents";
import { cn } from "@/lib/utils";

const RESOURCE_META: Record<
  Session["resources"][number]["type"],
  { icon: typeof FileText; label: string; ring: string; text: string }
> = {
  ppt: { icon: FileText, label: "Slides (PPT)", ring: "bg-orange-500/15 text-orange-600 dark:text-orange-400", text: "text-orange-600 dark:text-orange-400" },
  pdf: { icon: FileIcon, label: "PDF", ring: "bg-red-500/15 text-red-600 dark:text-red-400", text: "text-red-600 dark:text-red-400" },
  video: { icon: FileVideo, label: "Video", ring: "bg-violet-500/15 text-violet-600 dark:text-violet-400", text: "text-violet-600 dark:text-violet-400" },
  repo: { icon: Code2, label: "Repository", ring: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400", text: "text-emerald-600 dark:text-emerald-400" },
  link: { icon: Link2, label: "Resource", ring: "bg-sky-500/15 text-sky-600 dark:text-sky-400", text: "text-sky-600 dark:text-sky-400" },
};

function ResourceCard({
  title,
  url,
  type,
}: Session["resources"][number]) {
  const meta = RESOURCE_META[type] ?? RESOURCE_META.link;
  const Icon = meta.icon;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-border-hover hover:bg-accent"
    >
      <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg", meta.ring)}>
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-foreground line-clamp-2 break-words">
          {title}
        </span>
        <span className="block text-xs text-muted-foreground">
          {meta.label}
        </span>
      </span>
      <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
    </a>
  );
}

export function ReaderView({
  course,
  session,
  prev,
  next,
}: {
  course: Course;
  session: Session;
  prev?: Session;
  next?: Session;
}) {
  const toc = session.headings;

  return (
    <div className="flex min-h-screen min-w-0">
      <main className="mx-auto flex w-full max-w-3xl min-w-0 flex-col px-4 py-6 sm:px-8 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="shrink-0 transition-colors hover:text-foreground">
            Courses
          </Link>
          <span className="shrink-0 text-border">/</span>
          <Link
            href={`/${course.slug}`}
            className="max-w-[140px] shrink-0 truncate transition-colors hover:text-foreground sm:max-w-[240px] md:max-w-none"
            title={course.title}
          >
            {course.title}
          </Link>
          <span className="shrink-0 text-border">/</span>
          <span className="min-w-0 max-w-[150px] shrink-0 truncate text-foreground sm:max-w-none" title={session.title}>
            {session.title || session.fileSlug.replace(/^\d+[-_]/, "")}
          </span>
        </nav>

        {/* Title */}
        <header className="mb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="muted">
              <FileText className="size-3" />
              Session {session.order}
            </Badge>
            {course.lecturer && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <User className="size-3.5" /> {course.lecturer}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3.5" /> {session.minutes} min read
            </span>
            {session.updated && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <CalendarDays className="size-3.5" /> Updated {session.updated}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {session.title}
          </h1>
          {session.description && (
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              {session.description}
            </p>
          )}
        </header>

        {/* Resources */}
        {session.resources.length > 0 && (
          <section className="mb-8" aria-label="Resources">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="flex size-5 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <Link2 className="size-3" />
              </span>
              Resources &amp; Materials
            </h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {session.resources.map((r, i) => (
                <ResourceCard key={i} {...r} />
              ))}
            </div>
          </section>
        )}

        {/* Content */}
        <article className="prose-lecture" dangerouslySetInnerHTML={{ __html: session.content }} />

        {/* Prev / Next */}
        <nav className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between" aria-label="Pagination">
          {prev ? (
            <Link
              href={`/${prev.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-border-hover hover:bg-accent"
            >
              <ArrowLeft className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Previous</span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/${next.slug}`}
              className="group flex items-center justify-end gap-3 rounded-xl border border-border p-3 text-right transition-colors hover:border-border-hover hover:bg-accent"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Next</span>
                <span className="block truncate text-sm font-medium text-foreground">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>

      {/* Table of contents */}
      <TableOfContents toc={toc} />
    </div>
  );
}
