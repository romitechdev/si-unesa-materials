import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    variant?: "default" | "secondary" | "outline" | "brand" | "muted";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
      {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
        brand: "border-transparent bg-brand/15 text-brand",
        muted: "border-transparent bg-muted text-muted-foreground",
      }[variant],
      className
    )}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
