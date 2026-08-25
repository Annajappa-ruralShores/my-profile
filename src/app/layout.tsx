import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annajappa | GenAI Developer & Full-Stack Engineer",
  description: "Portfolio of Gadige Annajappa, a GenAI Developer at RuralShores building RAG pipelines, LLM-powered products, and full-stack apps with Next.js, React, and OpenAI/Anthropic/Gemini.",
  openGraph: {
    title: "Annajappa | GenAI Developer & Full-Stack Engineer",
    description: "Building GenAI products end-to-end — RAG pipelines, LLM integrations, and performant full-stack web apps.",
    type: "website",
  },
  icons: {
    icon: "/Annajappa.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
