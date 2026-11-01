import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F7F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pancayandra — Junior Software Developer | DEVELOPER.LOG",
  description:
    "Junior Software Developer focused on frontend development, web technologies, and continuous learning.",
  authors: [{ name: "Muhammad Pancayandra Anugrah" }],
  creator: "Muhammad Pancayandra Anugrah",
  keywords: [
    "Pancayandra",
    "Portfolio",
    "Frontend Developer",
    "Junior Software Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
  ],
  openGraph: {
    title: "Pancayandra — Junior Software Developer | DEVELOPER.LOG",
    description:
      "Junior Software Developer focused on frontend development, web technologies, and continuous learning.",
    type: "website",
    locale: "en_US",
    siteName: "DEVELOPER.LOG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pancayandra — Junior Software Developer | DEVELOPER.LOG",
    description:
      "Junior Software Developer focused on frontend development, web technologies, and continuous learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-primary-text font-sans antialiased selection:bg-accent selection:text-surface">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background focus:font-medium focus:shadow-md"
        >
          Skip to content
        </a>
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
