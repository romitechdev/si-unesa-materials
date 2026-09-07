"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Trash2,
  Save,
  Lock,
  BookOpen,
  Clock,
  Link2,
  X,
  Check,
  AlertCircle,
  FileText,
  FolderPlus,
  LogOut,
  Pencil,
  ChevronRight,
  Folder,
  File,
  Code,
  Heading2,
  List,
  Quote,
} from "lucide-react";

type Resource = { title: string; url: string; type: string };
type Session = { fileSlug: string; title: string; description: string };
type Course = { slug: string; sessions: Session[] };

const RESOURCE_TYPES = [
  { value: "link", label: "Link Web" },
  { value: "pdf", label: "Dokumen PDF" },
  { value: "ppt", label: "Slide Presentasi" },
  { value: "video", label: "Video Tutorial" },
  { value: "repo", label: "Repository Code" },
];

function renderMarkdown(md: string): string {
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, lang, code) => {
    return `<pre><code class="hljs">${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Headings
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Blockquote
  html = html.replace(/^&gt; (.+)$/gm, "<blockquote><p>$1</p></blockquote>");

  // Unordered list
  html = html.replace(/^[-*] (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  // Ordered list
  html = html.replace(/^\d+\. (.+)$/gm, "<oli>$1</oli>");
  html = html.replace(/(<oli>[\s\S]*?<\/oli>)/g, "<ol>$1</ol>");
  html = html.replace(/<oli>/g, "<li>");
  html = html.replace(/<\/oli>/g, "</li>");

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Paragraphs: wrap lines that aren't already in block elements
  html = html
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("</")
      ) {
        return line;
      }
      return `<p>${line}</p>`;
    })
    .join("\n");

  return html;
}

function LoginView({
  password,
  setPassword,
  authError,
  onLogin,
}: {
  password: string;
  setPassword: (v: string) => void;
  authError: string;
  onLogin: (e: React.FormEvent) => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-[340px] space-y-6">
        <div className="space-y-2 text-center">
          <div className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-muted/40 font-mono text-sm font-bold">
            LN
          </div>
          <h1 className="text-lg font-semibold tracking-tight">SI UNESA Admin</h1>
          <p className="text-xs text-muted-foreground">Authentication required</p>
        </div>

        <form onSubmit={onLogin} className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="pass" className="text-xs font-mono font-medium text-muted-foreground">
              PASSWORD
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                id="pass"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 font-mono text-sm"
                autoFocus
              />
            </div>
          </div>

          {authError && (
            <p className="text-xs font-medium text-destructive flex items-center gap-1.5">
              <AlertCircle className="size-3.5 shrink-0" /> {authError}
            </p>
          )}

          <Button type="submit" className="w-full font-medium" size="sm">
            Sign In
          </Button>
        </form>

        <p className="text-center font-mono text-[11px] text-muted-foreground/60">
          si-teknik-unesa.romitech.me · CMS
        </p>
      </div>
    </div>
  );
}

function Toast({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-md border px-4 py-2.5 text-xs font-medium shadow-md ${
        type === "success"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "border-destructive/30 bg-destructive/10 text-destructive"
      }`}
    >
      {type === "success" ? <Check className="size-3.5" /> : <AlertCircle className="size-3.5" />}
      {message}
    </div>
  );
}

export function AdminClient() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [editingSession, setEditingSession] = useState<{ courseSlug: string; fileSlug: string } | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [minutes, setMinutes] = useState(30);
  const [resources, setResources] = useState<Resource[]>([]);
  const [content, setContent] = useState("");

  // Course meta state
  const [courseLecturers, setCourseLecturers] = useState<Record<string, string>>({});

  const [newCourseName, setNewCourseName] = useState("");
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);

  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  // Modals
  const [deleteSessionModal, setDeleteSessionModal] = useState<{ courseSlug: string; fileSlug: string; title: string } | null>(null);
  const [deleteCourseModal, setDeleteCourseModal] = useState<string | null>(null);
  const [renameCourseModal, setRenameCourseModal] = useState<{ oldSlug: string; newSlug: string } | null>(null);

  const showToast = useCallback((msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const getPass = () => sessionStorage.getItem("admin_pass") || "";

  const loadCourses = useCallback((pass: string) => {
    if (!pass) return;
    fetch("/api/admin", { headers: { "x-admin-pass": pass } })
      .then((r) => {
        if (!r.ok) throw new Error("auth failed");
        return r.json();
      })
      .then((d) => {
        const list = (d.courses || []) as (Course & { lecturer?: string })[];
        setCourses(list);
        const lects: Record<string, string> = {};
        list.forEach((c) => { lects[c.slug] = c.lecturer || ""; });
        setCourseLecturers(lects);
        if (list.length > 0 && !selectedCourse) {
          setSelectedCourse(list[0].slug);
        }
      })
      .catch(() => {});
  }, [selectedCourse]);

  useEffect(() => {
    const pass = sessionStorage.getItem("admin_pass");
    if (pass) {
      setAuthed(true);
      loadCourses(pass);
    }
    setLoading(false);
  }, [loadCourses]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    fetch("/api/admin", { headers: { "x-admin-pass": password } })
      .then((r) => {
        if (!r.ok) throw new Error();
        sessionStorage.setItem("admin_pass", password);
        setAuthed(true);
        setAuthError("");
        loadCourses(password);
      })
      .catch(() => setAuthError("Invalid password"));
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_pass");
    setAuthed(false);
    setPassword("");
    setCourses([]);
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setDescription("");
    setContent("");
    setResources([]);
    setMinutes(30);
    setEditingSession(null);
  }

  function startNewSession(cSlug: string) {
    setSelectedCourse(cSlug);
    resetForm();
  }

  async function loadSessionForEdit(cSlug: string, fSlug: string) {
    const pass = getPass();
    if (!pass) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin?course=${cSlug}&file=${fSlug}`, {
        headers: { "x-admin-pass": pass },
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSelectedCourse(cSlug);
      setEditingSession({ courseSlug: cSlug, fileSlug: fSlug });
      setTitle(data.title || "");
      setDescription(data.description || "");
      setMinutes(data.minutes || 30);
      setResources((data.resources || []) as Resource[]);
      setContent(data.content || "");
    } catch (err: any) {
      showToast(`Failed to load: ${err.message}`, "error");
    }
    setSaving(false);
  }

  async function handleSaveSession(e: React.FormEvent) {
    e.preventDefault();
    const pass = getPass();
    if (!pass) return;

    if (!selectedCourse) {
      showToast("Select a course first", "error");
      return;
    }

    setSaving(true);
    try {
      if (editingSession) {
        // PUT Edit
        const res = await fetch("/api/admin", {
          method: "PUT",
          headers: { "Content-Type": "application/json", "x-admin-pass": pass },
          body: JSON.stringify({
            courseSlug: editingSession.courseSlug,
            fileSlug: editingSession.fileSlug,
            title,
            description,
            minutes,
            resources,
            content,
          }),
        });
        if (res.status === 401) { handleLogout(); return; }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        showToast("Material updated successfully", "success");
        loadCourses(pass);
      } else {
        // POST New
        const count = courses.find((c) => c.slug === selectedCourse)?.sessions.length ?? 0;
        const slugBase = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
        const fileSlug = count ? `${String(count + 1).padStart(2, "0")}-${slugBase}` : slugBase;

        const res = await fetch("/api/admin", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-admin-pass": pass },
          body: JSON.stringify({
            courseSlug: selectedCourse,
            title,
            description,
            minutes,
            resources,
            content,
            fileSlug,
          }),
        });
        if (res.status === 401) { handleLogout(); return; }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        showToast("New material published successfully", "success");
        resetForm();
        loadCourses(pass);
      }
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
    setSaving(false);
  }

  async function handleDeleteSession() {
    if (!deleteSessionModal) return;
    const pass = getPass();
    if (!pass) return;

    try {
      const res = await fetch("/api/admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-admin-pass": pass },
        body: JSON.stringify({
          courseSlug: deleteSessionModal.courseSlug,
          fileSlug: deleteSessionModal.fileSlug,
        }),
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      showToast(`Material "${deleteSessionModal.title}" deleted`, "success");
      if (editingSession?.fileSlug === deleteSessionModal.fileSlug) {
        resetForm();
      }
      setDeleteSessionModal(null);
      loadCourses(pass);
    } catch (err: any) {
      showToast(`Failed to delete: ${err.message}`, "error");
    }
  }

  async function handleCreateCourse(e: React.FormEvent) {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    const pass = getPass();
    if (!pass) return;

    const safeSlug = newCourseName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    setSaving(true);
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-pass": pass },
        body: JSON.stringify({
          createCourse: true,
          courseSlug: safeSlug,
        }),
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      showToast(`Course "${safeSlug}" created`, "success");
      setNewCourseName("");
      setIsCreatingCourse(false);
      setSelectedCourse(safeSlug);
      loadCourses(pass);
    } catch (err: any) {
      showToast(`Failed to create course: ${err.message}`, "error");
    }
    setSaving(false);
  }

  async function handleDeleteCourse() {
    if (!deleteCourseModal) return;
    const pass = getPass();
    if (!pass) return;

    try {
      const res = await fetch("/api/admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-admin-pass": pass },
        body: JSON.stringify({ courseSlug: deleteCourseModal, deleteCourse: true }),
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      showToast(`Course "${deleteCourseModal}" deleted`, "success");
      if (selectedCourse === deleteCourseModal) {
        setSelectedCourse("");
        resetForm();
      }
      setDeleteCourseModal(null);
      loadCourses(pass);
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
  }

  async function handleRenameCourse() {
    if (!renameCourseModal || !renameCourseModal.newSlug.trim()) return;
    const pass = getPass();
    if (!pass) return;

    try {
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-pass": pass },
        body: JSON.stringify({
          renameCourse: true,
          oldSlug: renameCourseModal.oldSlug,
          newSlug: renameCourseModal.newSlug,
        }),
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      showToast(`Mata kuliah diubah menjadi "${data.newSlug}"`, "success");
      if (selectedCourse === renameCourseModal.oldSlug) {
        setSelectedCourse(data.newSlug);
      }
      setRenameCourseModal(null);
      loadCourses(pass);
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
  }

  async function saveCourseLecturer(cSlug: string) {
    const pass = getPass();
    if (!pass) return;
    const val = courseLecturers[cSlug] || "";
    try {
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-pass": pass },
        body: JSON.stringify({ courseMeta: { lecturer: val }, courseSlug: cSlug }),
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      showToast("Lecturer updated", "success");
    } catch (err: any) {
      showToast(`Error: ${err.message}`, "error");
    }
  }

  function insertMarkdownSnippet(prefix: string, suffix = "") {
    setContent((prev) => `${prev}\n${prefix} ${suffix}`);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="size-5 animate-spin rounded-full border-2 border-border border-t-foreground" />
        </div>
      </div>
    );
  }

  if (!authed) {
    return (
      <LoginView
        password={password}
        setPassword={setPassword}
        authError={authError}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background font-sans text-foreground antialiased">
      {toast && <Toast message={toast.msg} type={toast.type} />}

      {/* Top Navbar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-background px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-tight text-foreground">
            LECTURE / CONTENT MANAGER
          </span>
          <span className="text-xs text-muted-foreground/60">•</span>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground hover:underline"
          >
            si-teknik-unesa.romitech.me ↗
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="h-8 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <LogOut className="mr-1.5 size-3.5" /> Sign Out
          </Button>
        </div>
      </header>

      {/* Main Workspace (Sidebar + Form) */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Left Sidebar - Course & Sessions Tree */}
        <aside className="w-72 shrink-0 border-r border-border bg-muted/20 flex flex-col justify-between overflow-y-auto">
          <div className="p-3 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-[11px] font-semibold text-muted-foreground tracking-wider uppercase">
                COURSES & MATERIALS
              </span>
              <button
                type="button"
                onClick={() => setIsCreatingCourse(!isCreatingCourse)}
                className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground"
                title="Add New Course"
              >
                <Plus className="size-3" /> Course
              </button>
            </div>

            {/* Inline Input New Course */}
            {isCreatingCourse && (
              <form onSubmit={handleCreateCourse} className="space-y-2 rounded-md border border-border bg-background p-2">
                <span className="text-[11px] font-mono text-muted-foreground">COURSE NAME:</span>
                <Input
                  placeholder="e.g.: database-systems"
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                  className="h-7 text-xs font-mono"
                  autoFocus
                />
                <div className="flex justify-end gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-[11px]"
                    onClick={() => setIsCreatingCourse(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" size="sm" className="h-6 px-2 text-[11px]">
                    Save
                  </Button>
                </div>
              </form>
            )}

            {/* Course list */}
            <div className="space-y-3">
              {courses.map((course) => {
                const isCourseSelected = selectedCourse === course.slug;
                return (
                  <div key={course.slug} className="space-y-1">
                    <div
                      className={`group flex items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium cursor-pointer transition-colors ${
                        isCourseSelected
                          ? "bg-accent text-accent-foreground font-semibold"
                          : "text-foreground hover:bg-muted/60"
                      }`}
                      onClick={() => startNewSession(course.slug)}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Folder className="size-3.5 shrink-0 text-muted-foreground" />
                        <span className="truncate capitalize">{course.slug.replace(/-/g, " ")}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setRenameCourseModal({ oldSlug: course.slug, newSlug: course.slug });
                          }}
                          className="p-0.5 text-muted-foreground hover:text-foreground"
                          title="Rename matkul"
                        >
                          <Pencil className="size-3" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteCourseModal(course.slug);
                          }}
                          className="p-0.5 text-muted-foreground hover:text-destructive"
                          title="Delete course"
                        >
                          <Trash2 className="size-3" />
                        </button>
                      </div>
                    </div>

                    {/* Lecturer input per course */}
                    <div className="pl-3 ml-3 flex items-center gap-1.5 border-l border-border/60">
                      <input
                        type="text"
                        value={courseLecturers[course.slug] || ""}
                        onChange={(e) =>
                          setCourseLecturers((prev) => ({ ...prev, [course.slug]: e.target.value }))
                        }
                        onBlur={() => saveCourseLecturer(course.slug)}
                        placeholder="Lecturer name..."
                        className="h-6 w-full rounded border border-border/60 bg-background px-1.5 text-[11px] text-foreground outline-none focus:border-ring"
                      />
                    </div>

                    {/* List Sessions under course */}
                    <div className="pl-3 space-y-0.5 border-l border-border/60 ml-3">
                      {course.sessions.map((sess) => {
                        const isEditingThis =
                          editingSession?.courseSlug === course.slug &&
                          editingSession?.fileSlug === sess.fileSlug;
                        return (
                          <div
                            key={sess.fileSlug}
                            onClick={() => loadSessionForEdit(course.slug, sess.fileSlug)}
                            className={`group flex items-center justify-between rounded px-2 py-1 text-[12px] cursor-pointer transition-colors ${
                              isEditingThis
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-1.5 truncate">
                              <File className="size-3 shrink-0 opacity-60" />
                              <span className="truncate">{sess.title}</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDeleteSessionModal({
                                  courseSlug: course.slug,
                                  fileSlug: sess.fileSlug,
                                  title: sess.title,
                                });
                              }}
                              className="opacity-0 group-hover:opacity-100 p-0.5 text-muted-foreground hover:text-destructive"
                              title="Delete material"
                            >
                              <Trash2 className="size-3" />
                            </button>
                          </div>
                        );
                      })}

                      <button
                        type="button"
                        onClick={() => startNewSession(course.slug)}
                        className="flex items-center gap-1 w-full text-left px-2 py-1 text-[11px] font-mono text-muted-foreground/70 hover:text-foreground"
                      >
                        <Plus className="size-3" /> Add Session
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-3 border-t border-border bg-background/50 font-mono text-[11px] text-muted-foreground">
            Direct file writer · Markdown
          </div>
        </aside>

        {/* Right Main Editor */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header Action */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-1">
                  <span>{selectedCourse || "Select Course"}</span>
                  {editingSession && (
                    <>
                      <span>/</span>
                      <span className="text-foreground font-semibold">{editingSession.fileSlug}</span>
                    </>
                  )}
                </div>
                <h1 className="text-xl font-bold tracking-tight">
                  {editingSession ? "Edit Material" : "Add New Material"}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                {editingSession && (
                  <Button variant="outline" size="sm" onClick={resetForm} className="h-8 text-xs">
                    + Sesi Baru
                  </Button>
                )}
                <Button
                  onClick={handleSaveSession}
                  disabled={saving || !selectedCourse || !title || !content}
                  size="sm"
                  className="h-8 text-xs font-semibold"
                >
                  <Save className="mr-1.5 size-3.5" />
                  {saving ? "Saving..." : editingSession ? "Update Material" : "Publish Material"}
                </Button>
              </div>
            </div>

            {/* Editor Form */}
            <form onSubmit={handleSaveSession} className="space-y-5">
              {/* Metadata Fields */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-muted-foreground">MATERIAL TITLE</label>
                  <Input
                    placeholder="e.g.: Introduction to Stack & Queue"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-9 text-sm"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">ESTIMATED MINUTES</label>
                  <Input
                    type="number"
                    min={1}
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                    className="h-9 text-sm font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">BRIEF DESCRIPTION</label>
                <Input
                  placeholder="Brief description of this material..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-9 text-sm"
                />
              </div>

              {/* Resource Attachments (Slide, Drive, Video) */}
              <div className="space-y-2 rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    ATTACHMENTS & RESOURCES (DRIVE / YOUTUBE / PDF)
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setResources([...resources, { title: "", url: "", type: "link" }])}
                    className="h-7 text-xs"
                  >
                    <Plus className="mr-1 size-3" /> Add Resource
                  </Button>
                </div>

                {resources.length === 0 && (
                  <p className="text-xs text-muted-foreground/60 italic py-2 text-center">
                    No attachments yet. Click "Add Resource" to add Drive or PDF links.
                  </p>
                )}

                <div className="space-y-2">
                  {resources.map((res, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Input
                        placeholder="Resource name (e.g. Module 1 Slides)"
                        value={res.title}
                        onChange={(e) => {
                          const updated = [...resources];
                          updated[i].title = e.target.value;
                          setResources(updated);
                        }}
                        className="h-8 text-xs flex-1"
                      />
                      <Input
                        placeholder="URL (https://drive.google.com/...)"
                        value={res.url}
                        onChange={(e) => {
                          const updated = [...resources];
                          updated[i].url = e.target.value;
                          setResources(updated);
                        }}
                        className="h-8 text-xs flex-[1.5]"
                      />
                      <select
                        value={res.type}
                        onChange={(e) => {
                          const updated = [...resources];
                          updated[i].type = e.target.value;
                          setResources(updated);
                        }}
                        className="h-8 rounded-md border border-input bg-transparent px-2 text-xs font-mono"
                      >
                        {RESOURCE_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => setResources(resources.filter((_, idx) => idx !== i))}
                        className="p-1 text-muted-foreground hover:text-destructive"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Markdown Editor + Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">CONTENT (MARKDOWN)</label>
                  {/* Quick Toolbar */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => insertMarkdownSnippet("## Sub Judul")}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] hover:bg-muted"
                      title="Sub Judul"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                        onClick={() => insertMarkdownSnippet("- Key point")}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] hover:bg-muted"
                      title="Bullet list"
                    >
                      List
                    </button>
                    <button
                      type="button"
                      onClick={() => insertMarkdownSnippet("```python\nprint('hello')\n```")}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] hover:bg-muted"
                      title="Code Block"
                    >
                      Code
                    </button>
                    <button
                      type="button"
                      onClick={() => insertMarkdownSnippet("> Catatan penting")}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] hover:bg-muted"
                      title="Quote"
                    >
                      Quote
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-0 rounded-md border border-input overflow-hidden lg:grid-cols-2">
                  {/* Editor */}
                  <div className="border-r border-input">
                    <div className="flex items-center justify-between border-b border-input bg-muted/30 px-3 py-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Editor</span>
                    </div>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="## Introduction&#10;&#10;Write your content here in Markdown format..."
                      className="min-h-[360px] w-full bg-background p-4 font-mono text-xs leading-relaxed outline-none resize-y"
                      required
                    />
                  </div>
                  {/* Preview */}
                  <div>
                    <div className="flex items-center justify-between border-b border-input bg-muted/30 px-3 py-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Preview</span>
                    </div>
                    <div
                      className="prose-lecture min-h-[360px] max-h-[500px] overflow-y-auto p-4 scrollbar-thin"
                      dangerouslySetInnerHTML={{ __html: content ? renderMarkdown(content) : "<p class='text-muted-foreground'>Preview akan muncul di sini...</p>" }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* Modal Delete Session */}
      {deleteSessionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-lg border border-border bg-card p-5 space-y-3 shadow-lg">
            <h3 className="font-semibold text-sm">Delete Material?</h3>
            <p className="text-xs text-muted-foreground">
              Material <span className="font-semibold text-foreground">"{deleteSessionModal.title}"</span> will be permanently deleted.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setDeleteSessionModal(null)}>
                Cancel
              </Button>
              <Button variant="destructive" size="sm" className="h-7 text-xs" onClick={handleDeleteSession}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Delete Course */}
      {deleteCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-lg border border-border bg-card p-5 space-y-3 shadow-lg">
            <h3 className="font-semibold text-sm">Delete Course?</h3>
            <p className="text-xs text-muted-foreground">
              Folder <span className="font-mono font-semibold text-foreground">{deleteCourseModal}</span> and all its materials will be deleted.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setDeleteCourseModal(null)}>
                Cancel
              </Button>
              <Button variant="destructive" size="sm" className="h-7 text-xs" onClick={handleDeleteCourse}>
                Delete Course
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Rename Course */}
      {renameCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-lg border border-border bg-card p-5 space-y-3 shadow-lg">
            <h3 className="font-semibold text-sm">Rename Course</h3>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-muted-foreground">NEW NAME:</label>
              <Input
                value={renameCourseModal.newSlug}
                onChange={(e) =>
                  setRenameCourseModal({
                    ...renameCourseModal,
                    newSlug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                  })
                }
                className="h-8 text-xs font-mono"
                autoFocus
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setRenameCourseModal(null)}>
                Cancel
              </Button>
              <Button variant="default" size="sm" className="h-7 text-xs" onClick={handleRenameCourse}>
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
