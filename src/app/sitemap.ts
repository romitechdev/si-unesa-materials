import type { MetadataRoute } from "next";
import { getCourses } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://si-teknik-unesa.vercel.app";
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date() },
  ];

  const courses = await getCourses();
  for (const course of courses) {
    for (const session of course.sessions) {
      routes.push({
        url: `${base}/${session.slug}`,
        lastModified: new Date(),
      });
    }
  }

  return routes;
}
