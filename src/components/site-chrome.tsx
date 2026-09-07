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
  children,
}: {
  courses: Course[];
  searchIndex: SearchItem[];
  pageTitle: string;
  showActions?: boolean;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        courses={courses}
        searchIndex={searchIndex}
        mobileOpen={mobileOpen}
        onMobileOpen={setMobileOpen}
      />
      <div className="min-h-screen min-w-0 flex-1">
        {/* DeepWiki-style container wrapper: dashed vertical borders on
            the left/right edges of the main content area, centered with
            max-width 1400px. */}
        <div className="relative mx-auto flex h-full min-h-screen w-full max-w-[1400px] flex-col border-x border-dashed border-border">
          <NavBar
            onOpenSidebar={() => setMobileOpen(true)}
            pageTitle={pageTitle}
            showActions={showActions}
          />
          <div className="min-h-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
