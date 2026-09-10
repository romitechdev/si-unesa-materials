import * as React from "react";
import { cn } from "@/lib/utils";

function Sheet({
  open,
  onClose,
  children,
  side = "left",
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn("fixed inset-0 z-50 lg:hidden", className)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fade_.2s_ease]"
        onClick={onClose}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-y-0 flex w-[85%] max-w-sm flex-col bg-background text-foreground border-r border-border shadow-xl",
          side === "left"
            ? "left-0 animate-[slide-in-left_.2s_ease-out]"
            : "right-0 animate-[slide-in-right_.2s_ease-out]"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { Sheet };
