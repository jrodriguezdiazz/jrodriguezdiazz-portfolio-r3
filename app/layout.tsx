import GoogleAnalytics from '@/components/google-analytics';
import { GA_TRACKING_ID } from '@/lib/gtag';
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: {
    default: "Jorge Rodríguez Díaz - Senior Software Engineer",
    template: "%s | Jorge Rodríguez Díaz"
  },
  description: "Senior Software Engineer portfolio showcasing projects and skills in React, Next.js, and modern web technologies",
  keywords: [
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "Full Stack Developer",
    "Portfolio",
    "Jorge Rodríguez Díaz"
  ],
  authors: [{ name: "Jorge Rodríguez Díaz", url: "https://jrodriguezdiazz.vercel.app/" }],
  creator: "Jorge Rodríguez Díaz",
  publisher: "Jorge Rodríguez Díaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jrodriguezdiazz.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jorge Rodríguez Díaz - Senior Software Engineer",
    description: "Senior Software Engineer portfolio showcasing projects and skills in React, Next.js, and modern web technologies",
    url: "https://jrodriguezdiazz.vercel.app/",
    siteName: "Jorge Rodríguez Díaz Portfolio",
    images: [
      {
        url: "/profile-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Jorge Rodríguez Díaz - Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Rodríguez Díaz - Senior Software Engineer",
    description: "Senior Software Engineer portfolio showcasing projects and skills in React, Next.js, and modern web technologies",
    images: ["/profile-photo.jpeg"],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
    <head title={"Jorge Rodríguez Díaz - Senior Software Engineer"}>

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="application-name" content="Jorge Rodríguez Díaz Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Jorge Rodríguez Díaz Portfolio" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      <meta name="color-scheme" content="light dark" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="theme-color" content="#ffffff" />
      <title>Jorge Rodríguez Díaz - Senior Software Engineer</title>
    </head>
    <body
      className={ cn(
        "min-h-screen bg-background font-sans antialiased",
        "selection:bg-primary/20 selection:text-primary-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        inter.className
      )}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Skip to main content
      </a>

      {/* Main content wrapper */}
      <div id="main-content" className="relative">
        {children}
      </div>

      {/* Screen reader only live region for announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="live-region"
      />
    </ThemeProvider>

    {/* Analytics script placeholder */}
    {process.env.NODE_ENV === "production" && GA_TRACKING_ID && <GoogleAnalytics />}
    </body>
    </html>
  )
}
