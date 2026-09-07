"use client";

import { useState } from "react";
import type { Course, SearchItem } from "@/lib/content";
import { Sidebar } from "./sidebar";
import { NavBar } from "./nav-bar";

export function SiteChrome({
  courses,
  searchIndex,
  pageTitle,
  children,
}: {
  courses: Course[];
  searchIndex: SearchItem[];
  pageTitle: string;
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
        <NavBar
          onOpenSidebar={() => setMobileOpen(true)}
          pageTitle={pageTitle}
        />
        {children}
      </div>
    </div>
  );
}
