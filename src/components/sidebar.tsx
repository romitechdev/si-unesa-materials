"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  BookMarked,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import type { Course, SearchItem } from "@/lib/content";
import { SidebarNav } from "./sidebar-nav";
import { SearchPanel } from "./search-panel";
import { ThemeToggle } from "./theme-toggle";
import { Sheet } from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Sidebar({
  courses,
  searchIndex,
  activeSlug,
}: {
  courses: Course[];
  searchIndex: SearchItem[];
  activeSlug?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const inner = (
    <div className={cn("flex h-full flex-col", collapsed && "items-center")}>
      {/* Brand */}
      <div
        className={cn(
          "flex h-14 shrink-0 items-center border-b border-border",
          collapsed ? "justify-center px-0" : "px-4"
        )}
      >
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-bold leading-tight">
            SI UNESA
          </p>
          {!collapsed && (
            <p className="truncate text-xs leading-tight text-muted-foreground">
              Information Systems
            </p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X className="size-4" />
        </Button>
      </div>

      {/* Search */}
      {!collapsed ? (
        <div className="shrink-0 border-b border-border py-3">
          <SearchPanel searchIndex={searchIndex} onNavigate={() => setMobileOpen(false)} />
        </div>
      ) : (
        <div className="flex shrink-0 justify-center border-b border-border py-3">
          <Link
            href="/"
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
            aria-label="Search"
          >
            <Search className="size-4" />
          </Link>
        </div>
      )}

      {/* Nav */}
      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-thin p-3">
        {collapsed ? (
          <div className="flex flex-col items-center gap-1">
            {courses.map((c) => (
              <Link
                key={c.slug}
                href={c.sessions[0] ? `/${c.slug}` : "#"}
                className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
                title={c.title}
                aria-label={c.title}
              >
                <BookMarked className="size-4" />
              </Link>
            ))}
          </div>
        ) : (
          <SidebarNav courses={courses} activeSlug={activeSlug} />
        )}
      </div>

      <div
        className={cn(
          "shrink-0 border-t border-border py-3",
          collapsed ? "px-0" : "px-4"
        )}
      >
        {collapsed ? (
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-[0.65rem] tabular-nums text-muted-foreground">
              {courses.reduce((n, c) => n + c.sessions.length, 0)}
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={() => setCollapsed(false)}
              aria-label="Expand sidebar"
            >
              <PanelLeftOpen className="size-4" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-[0.7rem] text-muted-foreground">
              {courses.length} courses ·{" "}
              {courses.reduce((n, c) => n + c.sessions.length, 0)} sessions
            </p>
            <div className="flex items-center gap-1">
              <div className="lg:hidden">
                <ThemeToggle className="size-7" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={() => setCollapsed(true)}
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile trigger */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background px-4 lg:hidden">
        <Link href="/" className="text-base font-bold">SI UNESA</Link>
        <Button
          variant="outline"
          size="icon"
          className="size-9"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </Button>
      </div>

      <Sheet open={mobileOpen} onClose={() => setMobileOpen(false)} side="right">
        {inner}
      </Sheet>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "sticky top-0 hidden h-screen shrink-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 lg:flex",
          collapsed ? "w-16" : "w-72"
        )}
      >
        {inner}
      </aside>
    </>
  );
}
