# SI UNESA — Course Materials

A fast, searchable, mobile-friendly website for **Sistem Informasi (Information Systems)** lecture notes and course materials at **Universitas Negeri Surabaya (UNESA)**.

**Live:** https://si-teknik-unesa.romitech.me

Browse courses, search across all notes, and read richly-formatted Markdown — with syntax highlighting, resource attachments (Google Drive, PDF, video, repos), a table of contents, and a password-protected admin dashboard for content management.

---

## Features

- **Course & session sidebar** with collapsible groups, session counts, and an active-page indicator
- **Instant full-text search** across every note, with keyboard navigation (`↑` `↓` `Enter`) and match highlighting
- **Markdown reader** rendered with GFM (tables, task lists, fenced code) and **syntax highlighting** via `rehype-highlight`
- **Resource attachments** — PPT, PDF, video, GitHub repo, and generic links shown as cards on each session page
- **Table of contents** generated automatically from `##`–`####` headings, with scroll-spy
- **Light / dark / system theme** with an animated View-Transitions reveal (respects `prefers-color-scheme`)
- **Responsive layout** — desktop sidebar, mobile slide-over drawer, no horizontal overflow down to 360px
- **Admin dashboard** (`/admin`) to create, edit, rename, and delete courses and sessions, and set the course lecturer
- **SEO** — per-page metadata, Open Graph, `sitemap.xml`, and `robots.txt`

---

## Tech Stack

| Concern | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, React 19) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Geist / Geist Mono (`next/font`) |
| Markdown | `remark` + `remark-gfm` + `rehype` (slug, highlight, stringify) |
| Front matter | `gray-matter` |
| Theming | `next-themes` |
| Icons | `lucide-react` |
| UI primitives | Radix-style components (`button`, `input`, `sheet`, `badge`) |
| Linting | ESLint (`eslint-config-next`) |

---

## Getting Started

### Prerequisites

- **Node.js 20+** (developed on Node 22)
- **npm** (the repo uses `npm` + `package-lock.json`)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open <http://localhost:3000>.

### 3. Production build

```bash
npm run build   # type-checks and prerenders
npm start       # serves the production build
```

> To serve on a custom port: `PORT=3003 npm start`.

### 4. Lint

```bash
npm run lint
```

The project is kept at **0 errors, 0 warnings**.

---

## Project Structure

```
.
├── content/                     # All course material (Markdown + front matter)
│   └── <course-slug>/
│       ├── _course.json         # Optional: { "lecturer": "Name, Degree" }
│       ├── pertemuan-1.md
│       └── 02-pertemuan-2-....md
├── src/
│   ├── app/
│   │   ├── (public)/            # Public site
│   │   │   ├── page.tsx         #   Homepage (course grid)
│   │   │   ├── [...slug]/page.tsx  #   Session reader page
│   │   │   └── not-found.tsx    #   404 page
│   │   ├── admin/               # Admin dashboard (client component)
│   │   ├── api/admin/route.ts   # Admin REST API (GET/POST/PUT/DELETE)
│   │   ├── layout.tsx           # Root layout, fonts, metadata, theme init
│   │   ├── robots.ts            # robots.txt
│   │   └── sitemap.ts           # sitemap.xml (all sessions)
│   ├── components/              # nav-bar, sidebar, reader, search, theme, share…
│   ├── lib/
│   │   ├── content.ts           # Loads/parses content/, builds search index & TOC
│   │   └── utils.ts             # cn() helper
│   └── globals.css              # Design tokens (CSS variables) + theme styles
└── package.json
```

---

## Content Format

Content is **plain Markdown files** on the filesystem — no database. Each course is a folder under `content/`, and each session is a `.md` file inside it.

### Directory layout

```
content/
└── transformasi-digital/            # ← course slug (folder name)
    ├── _course.json                 # optional course metadata
    ├── pertemuan-1.md               # ← one session per file
    └── 02-pertemuan-2-....md
```

- The **course title** is derived from the folder name (kebab-case → Title Case).
- **Session order** comes from the leading number in the filename (e.g. `02-…` sorts after `pertemuan-1`), or an explicit `order:` front-matter value.

### Session front matter

```markdown
---
title: "Pertemuan 1"
description: "Short summary shown in the sidebar and on the homepage."
minutes: 30
updated: "2026-09-02"
resources:
  - title: "PPT WEEK 1"
    url: "https://drive.google.com/file/d/…/view"
    type: ppt
---

## 1. Section heading

Your Markdown content here…
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Session title |
| `description` | no | Shown in sidebar/homepage |
| `minutes` | no | Estimated reading time (default `1`) |
| `updated` | no | `YYYY-MM-DD` |
| `resources` | no | List of `{ title, url, type }` |
| `order` | no | Explicit sort order (defaults to filename number) |

**`resources.type`** is one of: `ppt` · `pdf` · `video` · `repo` · `link`.

### Course metadata

An optional `_course.json` in the course folder sets the lecturer name shown in the sidebar:

```json
{ "lecturer": "Anggraeni Widya Purwita, M.Kom." }
```

> **Tip:** add a new course by creating a new folder under `content/`; add a session by dropping a `.md` file in it. No code changes needed — the site picks it up on the next build/refresh.

---

## Admin Dashboard

A password-protected UI at **`/admin`** for managing content without editing files directly. It talks to a small REST API at **`/api/admin`** that reads/writes the `content/` folder.

### Authentication

The API checks the `x-admin-pass` header against `ADMIN_PASSWORD`:

```bash
# default (no env set)
export ADMIN_PASSWORD="romitech2025"

# or set your own in the environment
export ADMIN_PASSWORD="your-secret"
```

> For production, always set `ADMIN_PASSWORD` to a strong value. The default is a development fallback only.

### API overview

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/admin?course=<slug>` | List courses & sessions (optionally one course) |
| `GET` | `/api/admin?course=<slug>&file=<fileSlug>` | Fetch one session (title, description, minutes, resources, content) |
| `POST` | `/api/admin` | Create a course (`createCourse: true`) or a session |
| `PUT` | `/api/admin` | Edit a session, rename a course (`renameCourse: true`), or update course meta (`courseMeta`) |
| `DELETE` | `/api/admin` | Delete one session, or an entire course (`deleteCourse: true`) |

All mutating requests require the `x-admin-pass` header (otherwise `401`).

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (hot reload) |
| `npm run build` | Type-check + production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint across the project |

---

## Deployment

The site is a standard Next.js app and can be hosted anywhere (Vercel, Node hosts, containers). The current production deployment runs behind a **Cloudflare Tunnel** on a custom domain:

- **URL:** https://si-teknik-unesa.romitech.me
- The tunnel points to the local production server (`npm start`) on port `3003`.

For any host, set `ADMIN_PASSWORD` (and optionally `PORT`) as environment variables, then run `npm run build && npm start`.

---

## License

© Universitas Negeri Surabaya — Sistem Informasi.
