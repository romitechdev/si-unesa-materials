import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-muted">
        <FileQuestion className="size-7 text-muted-foreground" />
      </span>
      <p className="mt-6 text-5xl font-bold tracking-tight text-foreground">
        404
      </p>
      <h1 className="mt-2 text-lg font-semibold text-foreground">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        The page you are looking for does not exist. It may have been moved or
        removed.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background shadow-sm transition-colors hover:opacity-90"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>
    </div>
  );
}
