import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://si-teknik-unesa.romitech.me"),
  icons: {
    icon: "/icon.svg",
  },
  title: {
    default: "SI UNESA — Course Materials | Sistem Informasi UNESA",
    template: "%s | SI UNESA",
  },
  description:
    "Lecture notes and course materials for Sistem Informasi (Information Systems) at Universitas Negeri Surabaya (UNESA). Browse courses, search materials, and read notes with syntax highlighting.",
  keywords: [
    "SI UNESA",
    "Sistem Informasi UNESA",
    "Information Systems UNESA",
    "Materi Kuliah UNESA",
    "Lecture Notes UNESA",
    "Sistem Informasi",
    "Universitas Negeri Surabaya",
    "Course Materials",
    "Muhromin",
  ],
  authors: [{ name: "Muhromin", url: "https://si-teknik-unesa.romitech.me" }],
  creator: "Muhromin",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://si-teknik-unesa.romitech.me",
    siteName: "SI UNESA",
    title: "SI UNESA — Course Materials",
    description:
      "Lecture notes and course materials for Sistem Informasi, Universitas Negeri Surabaya.",
  },
  twitter: {
    card: "summary",
    title: "SI UNESA — Course Materials",
    description:
      "Lecture notes and course materials for Sistem Informasi, Universitas Negeri Surabaya.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#24242e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
