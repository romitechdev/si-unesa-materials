import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/sidebar";
import { getCourses, getSearchIndex } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [courses, searchIndex] = await Promise.all([getCourses(), getSearchIndex()]);

  return (
    <div className="flex min-h-screen">
      <Sidebar courses={courses} searchIndex={searchIndex} />
      <div className="min-h-screen min-w-0 flex-1 pt-14 lg:pt-0">
        <div className="sticky top-0 z-30 hidden h-14 items-center justify-end gap-2 border-b border-border bg-background/80 px-6 backdrop-blur lg:flex">
          <span className="text-xs text-muted-foreground">
            SI UNESA · Course Materials
          </span>
          <ThemeToggle />
        </div>
        {children}
      </div>
    </div>
  );
}
