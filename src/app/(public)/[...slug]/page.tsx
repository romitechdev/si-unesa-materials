import { notFound } from "next/navigation";
import { getCourses } from "@/lib/content";
import { ReaderView } from "@/components/reader-view";

export const dynamic = "force-dynamic";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const segments = slug.filter(Boolean);
  const courseSlug = segments[0];
  const fileSlug = segments[1];

  const courses = await getCourses();
  const course = courses.find((c) => c.slug === courseSlug);
  if (!course) notFound();

  const index = fileSlug
    ? course.sessions.findIndex((s) => s.fileSlug === fileSlug)
    : 0;
  const session = course.sessions[index];
  if (!session) notFound();

  const prev = index > 0 ? course.sessions[index - 1] : undefined;
  const next =
    index < course.sessions.length - 1 ? course.sessions[index + 1] : undefined;

  return (
    <ReaderView course={course} session={session} prev={prev} next={next} />
  );
}
