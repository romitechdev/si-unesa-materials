"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Share2,
  Link2,
  Check,
  Copy,
  MessageCircle,
  Globe,
  Send,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SITE_NAME = "SI UNESA";

type Target = "wa" | "tw" | "fb" | "tg";

const SOCIALS: { id: Target; label: string; icon: typeof Share2; url: (u: string, t: string) => string }[] = [
  { id: "wa", label: "WhatsApp", icon: MessageCircle, url: (u, t) => `https://wa.me/?text=${encodeURIComponent(`${t}\n${u}`)}` },
  { id: "tw", label: "X / Twitter", icon: Globe, url: (u, t) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(u)}` },
  { id: "fb", label: "Facebook", icon: Send, url: (u) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}` },
  { id: "tg", label: "Telegram", icon: Mail, url: (u, t) => `https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}` },
];

export function ShareMenu({
  title,
  open,
  onOpenChange,
  align = "right",
  className,
}: {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  align?: "left" | "right";
  className?: string;
}) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined" ? window.location.origin + pathname : pathname;
  const shareTitle = `${title} — ${SITE_NAME}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function nativeShare() {
    if (!navigator.share) return false;
    try {
      await navigator.share({ title: shareTitle, url: shareUrl });
      return true;
    } catch {
      return false;
    }
  }

  if (!open) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="fixed inset-0 z-40" onClick={() => onOpenChange(false)} aria-hidden />
      <div
        className={cn(
          "absolute top-full z-50 mt-2 w-64 rounded-xl border border-border bg-background p-3 shadow-lg",
          align === "right" ? "right-0" : "left-0"
        )}
      >
        <p className="mb-2 px-1 text-xs font-semibold text-muted-foreground">
          Share this page
        </p>

        <div className="flex items-center gap-2 rounded-lg border border-border p-1.5">
          <Link2 className="ml-1 size-4 shrink-0 text-muted-foreground" />
          <input
            readOnly
            value={shareUrl}
            onFocus={(e) => e.currentTarget.select()}
            className="min-w-0 flex-1 bg-transparent text-xs text-foreground outline-none"
            aria-label="Page URL"
          />
          <Button
            variant="ghost"
            size="icon"
            className="size-7 shrink-0"
            onClick={copy}
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-500" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </Button>
        </div>

        <div className="mt-2 grid grid-cols-4 gap-1">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={s.url(shareUrl, shareTitle)}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={`Share on ${s.label}`}
                className="flex flex-col items-center gap-1 rounded-lg px-1 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" />
                <span className="text-[0.6rem] leading-none">{s.label.split(" ")[0]}</span>
              </a>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full"
          onClick={async () => {
            const ok = await nativeShare();
            if (ok) onOpenChange(false);
          }}
          disabled={!navigator.share}
        >
          <Share2 className="size-3.5" /> More…
        </Button>
      </div>
    </div>
  );
}
