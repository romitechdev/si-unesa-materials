"use client";

import { useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Search, BookOpen, CornerDownLeft, X } from "lucide-react";
import type { SearchItem } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function highlight(text: string, q: string) {
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-brand/25 px-0.5 text-inherit">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export function SearchPanel({
  searchIndex,
  onNavigate,
}: {
  searchIndex: SearchItem[];
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();
  const q = trimmed.toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return searchIndex.filter(
      (item) =>
        item.session.toLowerCase().includes(q) ||
        item.course.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q)
    );
  }, [q, searchIndex]);

  const activeIndex = Math.min(active, Math.max(0, results.length - 1));

  function go(slug: string) {
    setQuery("");
    setActive(0);
    onNavigate?.();
    router.push(`/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, Math.max(0, results.length - 1)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      go(results[activeIndex].slug);
    } else if (e.key === "Escape") {
      setQuery("");
      setActive(0);
      onNavigate?.();
    }
  }

  const showEmpty = trimmed && results.length === 0;

  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="relative">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          onFocus={() => inputRef.current?.select()}
          placeholder="Search topics, keywords…"
          className="h-9 pl-8 pr-8"
          aria-label="Search SI UNESA"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setActive(0);
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>

      {trimmed && (
        <p className="px-1 text-xs text-muted-foreground">
          {results.length} result{results.length === 1 ? "" : "s"}
        </p>
      )}

      {showEmpty && (
        <div className="flex flex-col items-center gap-1.5 px-3 py-8 text-center">
          <Search className="size-5 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">
            No matches for &ldquo;{trimmed}&rdquo;
          </p>
          <p className="text-xs text-muted-foreground">
            Try a different keyword.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ul className="flex max-h-[60vh] flex-col gap-0.5 overflow-y-auto scrollbar-thin pr-1">
          {results.map((item, i) => {
            const isActiveRoute =
              pathname === `/${item.slug}` || pathname === `/${item.courseSlug}`;
            return (
              <li key={item.slug}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(item.slug)}
                  className={cn(
                    "group flex w-full flex-col gap-1 rounded-lg px-2.5 py-2 text-left transition-colors",
                    i === activeIndex
                      ? "bg-sidebar-accent"
                      : "hover:bg-sidebar-accent",
                    isActiveRoute && "ring-1 ring-brand/30"
                  )}
                >
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <BookOpen className="size-3" />
                    {item.course}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                    {highlight(item.session, trimmed)}
                    {i === activeIndex && (
                      <CornerDownLeft className="ml-auto size-3.5 shrink-0 text-muted-foreground" />
                    )}
                  </span>
                  <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {highlight(item.text, trimmed)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

    </div>
  );
}
