import { notFound } from "next/navigation";
import { blogPosts } from "@/data";
import { Metadata } from "next";
import Head from "next/head";
import BlogPostClient from "./BlogPostClient";

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

      <BlogPostClient post={post} />
    </>
  );
}
