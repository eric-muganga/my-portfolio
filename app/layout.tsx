import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";

import { Analytics } from "@vercel/analytics/next";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eric Muganga - Senior Full-Stack Developer & Software Engineer",
    template: "%s | Eric Muganga - Software Engineer",
  },
  description:
    "Eric Muganga is a senior full-stack software engineer specializing in React, Node.js, Java, Spring Boot, and microservices architecture. Experienced in building scalable web applications, e-commerce platforms, and modern fintech solutions.",
  keywords: [
    "Eric Muganga",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "Next.js",
    "TypeScript",
    "E-commerce Development",
    "Fintech Developer",
    "Web Development",
    "Software Architecture",
    "API Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Expert",
  ],
  authors: [{ name: "Eric Muganga" }],
  creator: "Eric Muganga",
  publisher: "Eric Muganga",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ericmuganga.dev",
    siteName: "Eric Muganga Portfolio",
    title: "Eric Muganga - Senior Full-Stack Developer & Software Engineer",
    description:
      "Eric Muganga is a senior full-stack software engineer specializing in React, Node.js, Java, Spring Boot, and microservices architecture. Experienced in building scalable web applications.",
    images: [
      {
        url: "/eric.jpg",
        width: 1200,
        height: 630,
        alt: "Eric Muganga - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Muganga - Senior Full-Stack Developer & Software Engineer",
    description:
      "Eric Muganga is a senior full-stack software engineer specializing in React, Node.js, Java, Spring Boot, and microservices architecture.",
    images: ["/eric.jpg"],
    creator: "@eric_muganga",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://ericmuganga.dev",
  },
  category: "Software Development",
  classification: "Portfolio",
  generator: "Next.js",
  applicationName: "Eric Muganga Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
  metadataBase: new URL("https://ericmuganga.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eric Muganga",
              jobTitle: "Senior Full-Stack Software Engineer",
              description:
                "Eric Muganga is a senior full-stack software engineer specializing in React, Node.js, Java, Spring Boot, and microservices architecture.",
              url: "https://ericmuganga.dev",
              image: "https://ericmuganga.dev/eric.jpg",
              sameAs: [
                "https://www.linkedin.com/in/eric-muganga-6501a3253/",
                "https://github.com/eric-muganga",
                "https://twitter.com/eric_muganga",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Canada",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Saskatchewan",
              },
              knowsAbout: [
                "Full-Stack Development",
                "React.js",
                "Node.js",
                "Java",
                "Spring Boot",
                "Microservices Architecture",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Software Engineering",
                "Web Development",
                "API Development",
                "Database Design",
                "Cloud Computing",
                "DevOps",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Software Engineer",
                description:
                  "Full-stack software engineer with expertise in modern web technologies and microservices architecture",
              },
              workExample: [
                {
                  "@type": "SoftwareApplication",
                  name: "E-Commerce Microservices Platform",
                  description:
                    "Scalable e-commerce platform built with Spring Boot microservices, Docker, and Kubernetes",
                  url: "https://github.com/eric-muganga/ecommerce-microservices",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "OneRamp Cryptocurrency Platform",
                  description:
                    "Cryptocurrency ramping platform with Next.js and TypeScript",
                  url: "https://www.oneramp.io",
                },
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Eric Muganga" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />

        {/* AI SEO Optimization */}
        <meta
          name="ai-content-declaration"
          content="This portfolio showcases the work and expertise of Eric Muganga, a senior full-stack software engineer"
        />
        <meta property="profile:first_name" content="Eric" />
        <meta property="profile:last_name" content="Muganga" />
        <meta property="profile:username" content="eric-muganga" />

        {/* Rich Snippets */}
        <meta name="rating" content="5" />
        <meta name="price" content="Available for hire" />
        <meta name="availability" content="Available" />
      </head>
      <body className={`${jetBrains_Mono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
