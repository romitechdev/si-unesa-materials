import Link from "next/link";
import { getCourses } from "@/lib/content";
import { BookOpen, Clock, FileText, ArrowRight, User } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="border-b border-border bg-gradient-to-b from-brand/[0.06] to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            <FileText className="size-3.5" /> Information Systems
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            SI UNESA Course Materials
          </h1>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/15">
                <BookOpen className="size-4 text-brand" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{courses.length}</p>
                <p className="text-muted-foreground">Courses</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/15">
                <FileText className="size-4 text-brand" />
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  {courses.reduce((n, c) => n + c.sessions.length, 0)}
                </p>
                <p className="text-muted-foreground">Sessions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/15">
                <Clock className="size-4 text-brand" />
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
      <main className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <h2 className="mb-5 text-xl font-semibold text-foreground">All Courses</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/${course.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/40 hover:bg-accent"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15">
                  <BookOpen className="size-5 text-brand" />
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
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
  );
}
