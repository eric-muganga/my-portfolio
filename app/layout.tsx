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
    default: "Eric Muganga - Backend Software Engineer",
    template: "%s | Eric Muganga - Backend Software Engineer",
  },
  description:
      "Eric Muganga is a backend software engineer specializing in financial technology systems, Java, Spring Boot, and microservices architecture. Expert in production-scale APIs, Apache Kafka, and distributed systems with 99.99% reliability.",
  keywords: [
    "Eric Muganga",
    "Backend Developer",
    "Backend Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Financial Technology Developer",
    "Fintech Engineer",
    "Microservices Architecture",
    "Apache Kafka",
    "Payment Processing Systems",
    "Distributed Systems",
    "REST APIs",
    "Production Systems",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Event-Driven Architecture",
    "PCI Compliance",
    "Performance Optimization",
    "Oracle Cloud Infrastructure",
    "AWS",
    "Poznan Software Engineer",
    "Poland Backend Developer",
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
    title: "Eric Muganga - Backend Software Engineer | Financial Technology Expert",
    description:
        "Backend software engineer specializing in financial technology systems, Java microservices, and production-scale APIs. Expert in Spring Boot, Apache Kafka, and distributed systems architecture.",
    images: [
      {
        url: "/eric.jpg",
        width: 1200,
        height: 630,
        alt: "Eric Muganga - Backend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Muganga - Backend Software Engineer | Financial Technology Expert",
    description:
        "Backend software engineer specializing in financial technology systems, Java microservices, and production-scale APIs with 99.99% reliability.",
    images: ["/eric.jpg"],
    creator: "@eric_muganga",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://ericmuganga.dev",
  },
  category: "Backend Software Development",
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
  metadataBase: new URL("https://eric-muganga-portfolio.vercel.app/"),
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
                jobTitle: "Backend Software Engineer",
                description:
                    "Backend software engineer specializing in financial technology systems, Java, Spring Boot, and microservices architecture. Expert in production-scale APIs and distributed systems.",
                url: "https://eric-muganga-portfolio.vercel.app/",
                image: "https://eric-muganga-portfolio.vercel.app/eric.jpg",
                sameAs: [
                  "https://www.linkedin.com/in/eric-muganga-6501a3253/",
                  "https://github.com/eric-muganga"
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Poznan",
                  addressRegion: "Greater Poland",
                  addressCountry: "Poland",
                  postalCode: "60-001"
                },
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Uniwersytet WSB Merito Poznan",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Poznan",
                    addressCountry: "Poland"
                  }
                },
                knowsAbout: [
                  "Backend Development",
                  "Java",
                  "Spring Boot",
                  "Spring Security",
                  "Spring Cloud",
                  "Microservices Architecture",
                  "Apache Kafka",
                  "Financial Technology",
                  "Payment Processing",
                  "REST APIs",
                  "PostgreSQL",
                  "MongoDB",
                  "Docker",
                  "Kubernetes",
                  "Event-Driven Architecture",
                  "Distributed Systems",
                  "Performance Optimization",
                  "Oracle Cloud Infrastructure",
                  "AWS",
                  "PCI Compliance",
                  "Production Systems"
                ],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Backend Software Engineer",
                  description:
                      "Backend software engineer with expertise in financial technology systems, microservices architecture, and production-scale API development",
                  skills: [
                    "Java", "Spring Boot", "Apache Kafka", "Microservices",
                    "PostgreSQL", "MongoDB", "Docker", "Kubernetes"
                  ]
                },
                worksFor: {
                  "@type": "Organization",
                  name: "Cashfro",
                  description: "Financial Technology Company"
                },
                workExample: [
                  {
                    "@type": "SoftwareApplication",
                    name: "Muscledia - Distributed Fitness Platform",
                    description:
                        "Production-ready microservices platform with 6 services, 99.99% availability, and 87% AI optimization. Built using Spring Boot, Apache Kafka, deployed on Oracle Cloud Infrastructure.",
                    url: "https://github.com/muscledia/muscledia",
                    applicationCategory: "Backend System",
                    operatingSystem: "Cross-platform",
                    programmingLanguage: ["Java", "Spring Boot"],
                    features: [
                      "99.99% System Availability",
                      "87% AI Performance Improvement",
                      "52 REST API Endpoints",
                      "$0/month Infrastructure Cost"
                    ]
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "E-Commerce Microservices Platform",
                    description:
                        "Enterprise-scale e-commerce platform with 8+ microservices, event-driven architecture using Apache Kafka, and Kubernetes orchestration",
                    url: "https://github.com/eric-muganga/ecommerce-microservices",
                    applicationCategory: "Backend System",
                    programmingLanguage: ["Java", "Spring Boot"]
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "Financial Payment Processing System",
                    description:
                        "PCI-compliant payment processing APIs built with Spring Boot, supporting 5,000+ concurrent users and processing thousands of daily transactions",
                    employer: "Cashfro",
                    applicationCategory: "Financial System"
                  }
                ],
                award: [
                  "4.84 CGPA - Top 5% Computer Science Class",
                  "Dean's List Academic Achievement"
                ],
                certification: [
                  "Spring Boot 3 & Spring 6 Professional Certification",
                  "IBM Cloud Native, Microservices, Containers & DevOps Professional Certificate",
                  "Hibernate/JPA Advanced Data Persistence"
                ]
              }),
            }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Eric Muganga" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Poznan, Poland" />
        <meta name="geo.position" content="52.4064;16.9252" />
        <meta name="ICBM" content="52.4064, 16.9252" />

        {/* Backend Engineer Specific Meta Tags */}
        <meta name="expertise" content="Backend Development, Financial Technology, Microservices" />
        <meta name="experience-level" content="1+ years production experience" />
        <meta name="specialization" content="Java, Spring Boot, Apache Kafka, Payment Processing" />
        <meta name="availability" content="Available for backend engineering roles" />

        {/* AI SEO Optimization */}
        <meta
            name="ai-content-declaration"
            content="This portfolio showcases the backend engineering expertise of Eric Muganga, specializing in financial technology systems and microservices architecture"
        />
        <meta property="profile:first_name" content="Eric" />
        <meta property="profile:last_name" content="Muganga" />
        <meta property="profile:username" content="eric-muganga" />

        {/* Rich Snippets for Backend Engineer */}
        <meta name="rating" content="5" />
        <meta name="experience" content="1+ years production systems" />
        <meta name="achievement" content="99.99% System Availability" />
        <meta name="achievement" content="87% AI Performance Improvement" />
        <meta name="education" content="B.S. Computer Science, 4.84 CGPA" />
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
