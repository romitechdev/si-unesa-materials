"use client";

import { useState } from "react";
import { Pencil, Share2, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ShareMenu } from "./share-button";
import { Button } from "./ui/button";
import { Sheet } from "./ui/sheet";

export function NavBar({
  onOpenSidebar,
  pageTitle,
}: {
  onOpenSidebar: () => void;
  pageTitle: string;
}) {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-dashed border-border bg-surface/95 backdrop-blur">
      <div className="flex h-14 items-center gap-2 px-4 sm:px-6">
        {/* Left: mobile menu trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="size-9 lg:hidden"
          onClick={onOpenSidebar}
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </Button>

        {/* Left label */}
        <span className="hidden text-sm font-normal text-muted-foreground sm:block">
          Course Materials
        </span>

        <div className="flex-1" />

        {/* Right actions — DeepWiki style */}
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="/admin"
            className="hidden items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-all hover:border-border-hover hover:bg-component sm:inline-flex"
            title="Edit SI"
          >
            <Pencil className="size-4" />
            <span>Edit SI</span>
          </a>

          <div className="relative">
            <Button
              className="h-9 gap-2 rounded-md px-3 text-sm"
              onClick={() => setShareOpen((o) => !o)}
              aria-label="Share this page"
              aria-expanded={shareOpen}
            >
              <Share2 className="size-4" />
              <span>Share</span>
            </Button>
            <ShareMenu
              title={pageTitle}
              open={shareOpen}
              onOpenChange={setShareOpen}
              align="right"
            />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
