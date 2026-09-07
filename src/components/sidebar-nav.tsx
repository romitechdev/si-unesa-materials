"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, FileText, Clock, User } from "lucide-react";
import type { Course } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SidebarNav({
  courses,
  activeSlug,
  query,
}: {
  courses: Course[];
  activeSlug?: string;
  query?: string;
}) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    courses.forEach((c) => (init[c.slug] = true));
    return init;
  });
  const q = (query ?? "").trim().toLowerCase();

  const toggle = (slug: string) =>
    setCollapsed((prev) => ({ ...prev, [slug]: !prev[slug] }));

  return (
    <nav className="flex flex-col gap-1" aria-label="Course navigation">
      {courses.map((course) => {
        const matched = course.sessions.filter((s) =>
          q
            ? s.title.toLowerCase().includes(q) ||
              s.description?.toLowerCase().includes(q)
            : true
        );
        if (q && matched.length === 0) return null;

        const isCollapsed = q ? false : collapsed[course.slug] ?? false;
        const courseActive =
          !q && course.sessions.some((s) => s.slug === activeSlug);

        return (
          <div key={course.slug} className="flex flex-col gap-0.5">
            <button
              className={cn(
                "group flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold text-foreground/90 transition-colors hover:bg-sidebar-accent hover:text-foreground",
                courseActive && "bg-sidebar-accent text-foreground"
              )}
              onClick={() => toggle(course.slug)}
              aria-expanded={!isCollapsed}
            >
              <BookOpen className="size-4 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate text-left">{course.title}</span>
              <ChevronRight
                className={cn(
                  "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200",
                  !isCollapsed && "rotate-90"
                )}
              />
            </button>
            {course.lecturer && (
              <p className="flex items-center gap-1 px-2.5 pb-0.5 text-[0.65rem] text-muted-foreground/70">
                <User className="size-3" />
                <span className="truncate">{course.lecturer}</span>
              </p>
            )}

            {!isCollapsed && (
              <ul className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                {matched.map((session) => {
                  const isActive = session.slug === activeSlug;
                  return (
                    <li key={session.slug}>
                      <Link
                        href={`/${session.slug}`}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-sidebar-accent font-medium text-foreground"
                            : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                        )}
                      >
                        <FileText
                          className={cn(
                            "size-3.5 shrink-0",
                            isActive ? "text-foreground" : "text-muted-foreground"
                          )}
                        />
                        <span className="min-w-0 flex-1 truncate">
                          {session.title}
                        </span>
                        <span
                          className={cn(
                            "hidden shrink-0 items-center gap-0.5 text-[0.65rem] tabular-nums text-muted-foreground sm:flex",
                            isActive && "text-foreground/70"
                          )}
                        >
                          <Clock className="size-3" />
                          {session.minutes}m
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
      {q &&
        courses.every(
          (c) =>
            c.sessions.filter((s) =>
              s.title.toLowerCase().includes(q) ||
              s.description?.toLowerCase().includes(q)
            ).length === 0
        ) && (
        <p className="px-2.5 py-6 text-center text-sm text-muted-foreground">
          No sessions match &ldquo;{query}&rdquo;
        </p>
      )}
    </nav>
  );
}
