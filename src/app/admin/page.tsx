import { AdminClient } from "./admin-client";

export const metadata = { title: "Admin", robots: { index: false } };

export default function AdminPage() {
  return <AdminClient />;
}
