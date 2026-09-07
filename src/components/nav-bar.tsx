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
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
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

        {/* Center-left label */}
        <span className="hidden text-sm text-muted-foreground sm:block">
          SI UNESA · Course Materials
        </span>

        <div className="flex-1" />

        {/* Right actions — DeepWiki style */}
        <div className="flex items-center gap-2">
          <a
            href="/admin"
            className="hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:bg-accent sm:inline-flex"
            title="Edit SI"
          >
            <Pencil className="size-4" />
            <span>Edit SI</span>
          </a>

          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="size-9"
              onClick={() => setShareOpen((o) => !o)}
              aria-label="Share this page"
              aria-expanded={shareOpen}
            >
              <Share2 className="size-4" />
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
