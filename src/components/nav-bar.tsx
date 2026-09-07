"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil, Share2, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ShareMenu } from "./share-button";
import { Button } from "./ui/button";

const DEFAULT_GITHUB_URL = "https://github.com/romitechdev/si-unesa-materials";

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function NavBar({
  onOpenSidebar,
  pageTitle,
  showActions = false,
  githubUrl = DEFAULT_GITHUB_URL,
}: {
  onOpenSidebar: () => void;
  pageTitle: string;
  showActions?: boolean;
  githubUrl?: string;
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

        {/* Right actions — DeepWiki style (only on material pages) */}
        <div className="flex items-center gap-4 sm:gap-5">
          {showActions && (
            <>
              {/* GitHub CTA — mirrors DeepWiki's "Index your code with Devin" */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-2 md:flex"
                title="View source on GitHub"
              >
                <GitHubMark className="size-4 text-foreground/60 transition-colors group-hover:text-foreground [animation:custom-pulse_1.8s_ease-in-out_infinite]" />
                <span className="relative">
                  <span className="text-xs font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                    View on GitHub
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground/40 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <Link
                href="/admin"
                className="hidden items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-all hover:border-border-hover hover:bg-component sm:inline-flex"
                title="Edit SI"
              >
                <Pencil className="size-4" />
                <span>Edit SI</span>
              </Link>

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
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
