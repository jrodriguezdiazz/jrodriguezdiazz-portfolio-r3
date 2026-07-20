import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { RootLayoutProps } from "@/lib/types";
import GoogleAnalytics from "@/components/google-analytics";
import { GA_TRACKING_ID } from "@/lib/gtag";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Jorge Rodríguez — Senior Software Engineer",
    template: "%s | Jorge Rodríguez",
  },
  description:
    "Senior Software Engineer with 7+ years of experience building scalable, enterprise-grade systems across healthcare, media, and telecommunications. Specializing in React, TypeScript, Flutter, Node.js, GraphQL, and HIPAA-compliant cloud architectures.",
  keywords: [
    "Jorge Rodríguez",
    "Senior Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Flutter Developer",
    "Dart Engineer",
    "Node.js Developer",
    "GraphQL Architect",
    "HIPAA Compliant Developer",
    "LaunchDarkly Progressive Rollouts",
    "AWS S3 Cloud Architecture",
    "Web Performance Tuning",
    "Mobile App Developer",
    "Dominican Republic Software Engineer",
    "Remote Senior Developer",
    "AI-Assisted Development",
    "Claude Code Developer",
    "Cursor AI Engineer",
  ],
  authors: [
    {
      name: "Jorge Rodríguez",
      url: "https://jrodriguezdiazz.vercel.app",
    },
  ],
  creator: "Jorge Rodríguez",
  publisher: "Jorge Rodríguez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jrodriguezdiazz.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jorge Rodríguez — Senior Software Engineer",
    description:
      "Explore the portfolio of Jorge Rodríguez, a Senior Software Engineer specializing in full-stack enterprise architecture, React, Flutter, Node.js, and high-performance cross-functional product delivery.",
    url: "https://jrodriguezdiazz.vercel.app",
    siteName: "Jorge Rodríguez Portfolio",
    images: [
      {
        url: "/profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Jorge Rodríguez — Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Rodríguez — Senior Software Engineer",
    description:
      "Senior Software Engineer portfolio showcasing scalable engineering implementations with React, Next.js, Flutter, Node.js, and feature flags with LaunchDarkly.",
    images: ["/profile-photo.jpg"],
    creator: "@jrodriguezdiazz",
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
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.variable}>
      <head title={"Jorge Rodríguez - Senior Software Engineer"}>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
        <link rel='dns-prefetch' href='https://fonts.gstatic.com' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='application-name' content='Jorge Rodríguez Portfolio' />
        <meta
          name='apple-mobile-web-app-title'
          content='Jorge Rodríguez Portfolio'
        />
        <meta name='msapplication-TileColor' content='#000' />
        <meta name='msapplication-TileImage' content='/mstile-150x150.png' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes'
        />
        <meta name='color-scheme' content='light dark' />
        <meta name='referrer' content='no-referrer-when-downgrade' />
        <meta name='theme-color' content='#ffffff' />
        <title>Jorge Rodríguez - Senior Software Engineer</title>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "selection:bg-primary/20 selection:text-primary-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          inter.className
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content for accessibility */}
          <a
            href='#main-content'
            className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md'
          >
            Skip to main content
          </a>

          {/* Main content wrapper */}
          <div id='main-content' className='relative'>
            {children}
          </div>

          {/* Screen reader only live region for announcements */}
          <div
            aria-live='polite'
            aria-atomic='true'
            className='sr-only'
            id='live-region'
          />
        </ThemeProvider>

        {/* Analytics script placeholder */}
        {process.env.NODE_ENV === "production" && GA_TRACKING_ID && (
          <GoogleAnalytics />
        )}
      </body>
    </html>
  );
}
