"use client";

import { useState } from "react";
import type { Course, SearchItem } from "@/lib/content";
import { Sidebar } from "./sidebar";
import { NavBar } from "./nav-bar";

export function SiteChrome({
  courses,
  searchIndex,
  pageTitle,
  showActions = false,
  githubUrl,
  children,
}: {
  courses: Course[];
  searchIndex: SearchItem[];
  pageTitle: string;
  showActions?: boolean;
  githubUrl?: string;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background overflow-x-clip">
      {/* Centered outer container: dashed vertical borders run ALL THE WAY from y=0 to bottom */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col border-x border-dashed border-border">
        <NavBar
          onOpenSidebar={() => setMobileOpen(true)}
          pageTitle={pageTitle}
          showActions={showActions}
          githubUrl={githubUrl}
        />
        <div className="flex min-h-0 flex-1">
          <Sidebar
            courses={courses}
            searchIndex={searchIndex}
            mobileOpen={mobileOpen}
            onMobileOpen={setMobileOpen}
          />
          <main className="min-h-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
