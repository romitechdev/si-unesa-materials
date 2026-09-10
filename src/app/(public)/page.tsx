import Link from "next/link";
import { getCourses, getSearchIndex } from "@/lib/content";
import { SiteChrome } from "@/components/site-chrome";
import { BookOpen, Clock, FileText, ArrowRight, User } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const [courses, searchIndex] = await Promise.all([getCourses(), getSearchIndex()]);

  return (
    <SiteChrome
      courses={courses}
      searchIndex={searchIndex}
      pageTitle="Home"
    >
      <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-10 sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <FileText className="size-3.5" /> Information Systems
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            SI UNESA Course Materials
          </h1>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:flex sm:flex-wrap sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                <BookOpen className="size-4 text-muted-foreground" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{courses.length}</p>
                <p className="text-muted-foreground">Courses</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                <FileText className="size-4 text-muted-foreground" />
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  {courses.reduce((n, c) => n + c.sessions.length, 0)}
                </p>
                <p className="text-muted-foreground">Sessions</p>
              </div>
            </div>
            <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                <Clock className="size-4 text-muted-foreground" />
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  {courses.reduce((n, c) => n + c.sessions.reduce((m, s) => m + s.minutes, 0), 0)}
                  <span className="text-muted-foreground"> min</span>
                </p>
                <p className="text-muted-foreground">Total reading</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Courses */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-10">
        <h2 className="mb-5 text-xl font-semibold text-foreground">All Courses</h2>
        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/${course.slug}`}
              className="group flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-border-hover hover:bg-accent"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-muted">
                  <BookOpen className="size-5 text-muted-foreground" />
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h3 className="min-w-0 break-words text-lg font-semibold text-foreground">
                {course.title}
              </h3>
              {course.lecturer && (
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <User className="size-3" /> {course.lecturer}
                </p>
              )}
              <p className="mt-1 text-sm text-muted-foreground">
                {course.sessions.length} session{course.sessions.length === 1 ? "" : "s"} ·{" "}
                {course.sessions.reduce((n, s) => n + s.minutes, 0)} min
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-4">
                {course.sessions.slice(0, 3).map((s) => (
                  <li key={s.slug} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="size-3.5 shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </li>
                ))}
                {course.sessions.length > 3 && (
                  <li className="pl-5 text-xs text-muted-foreground">
                    +{course.sessions.length - 3} more
                  </li>
                )}
              </ul>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          Developed by Muhromin · Sistem Informasi, Universitas Negeri Surabaya
        </p>
      </footer>
    </div>
    </SiteChrome>
  );
}
