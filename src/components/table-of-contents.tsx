"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TableOfContents({ toc }: { toc: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const h of toc) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto border-l border-border px-5 py-8 xl:block">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        On this page
      </h2>
      <ul className="flex flex-col gap-1 text-sm">
        {toc.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block py-1 pr-2 transition-colors",
                activeId === h.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                h.depth === 2 && "pl-0",
                h.depth === 3 && "pl-4",
                h.depth === 4 && "pl-8"
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
