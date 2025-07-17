"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data";
import {
  FaArrowLeft,
  FaCalendar,
  FaClock,
  FaTag,
  FaUser,
} from "react-icons/fa";
import BlogContentRenderer from "@/components/ui/BlogContentRenderer";
import { Metadata } from "next";
import Head from "next/head";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// Generate metadata for each blog post
export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return {
      title: "Blog Post Not Found | Eric Muganga",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Eric Muganga`,
    description: post.excerpt,
    keywords: [...post.tags, "Eric Muganga", "Software Engineer", "Blog"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://eric-muganga-portfolio.vercel.app/blog/${post.id}`,
      siteName: "Eric Muganga Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@eric_muganga",
    },
    alternates: {
      canonical: `https://eric-muganga-portfolio.vercel.app/blog/${post.id}`,
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
    category: "Technology",
    classification: "Blog Post",
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Generate JSON-LD structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: `https://ericmuganga.dev${post.image}`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://ericmuganga.dev",
      sameAs: [
        "https://www.linkedin.com/in/eric-muganga-6501a3253/",
        "https://github.com/eric-muganga",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Eric Muganga",
      logo: {
        "@type": "ImageObject",
        url: "https://ericmuganga.dev/eric.jpg",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ericmuganga.dev/blog/${post.id}`,
    },
    url: `https://ericmuganga.dev/blog/${post.id}`,
    keywords: post.tags.join(", "),
    articleSection: "Technology",
    inLanguage: "en-US",
    timeRequired: post.readTime,
    wordCount: post.content.split(" ").length,
    about: post.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  };

  return (
    <>
      <Head>
        {/* JSON-LD structured data for blog post */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional SEO meta tags */}
        <meta name="article:author" content={post.author} />
        <meta name="article:published_time" content={post.publishedAt} />
        <meta name="article:modified_time" content={post.publishedAt} />
        <meta name="article:section" content="Technology" />
        {post.tags.map((tag, index) => (
          <meta key={index} name="article:tag" content={tag} />
        ))}

        {/* AI SEO optimizations */}
        <meta name="ai-content-type" content="technical-blog-post" />
        <meta name="content-complexity" content="intermediate-to-advanced" />
        <meta name="target-audience" content="software-developers" />
        <meta name="reading-level" content="professional" />

        {/* Rich snippets */}
        <meta name="article:reading_time" content={post.readTime} />
        <meta
          name="article:word_count"
          content={post.content.split(" ").length.toString()}
        />
      </Head>

      <main className="bg-black min-h-screen">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <FaArrowLeft />
              Back to Blog
            </Link>

            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>

            <article className="prose prose-lg prose-invert max-w-none">
              <header className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-blue-500" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-blue-500" />
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-sm rounded-full"
                    >
                      <FaTag className="text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                  {post.excerpt}
                </p>
              </header>

              <BlogContentRenderer content={post.content} />
            </article>

            <footer className="mt-16 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 mb-2">Written by</p>
                  <p className="text-white font-semibold">{post.author}</p>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/eric-muganga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eric-muganga-6501a3253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </footer>
          </motion.div>
        </div>
      </main>
    </>
  );
}
