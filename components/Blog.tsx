"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data";
import { useState } from "react";
import { FaCalendar, FaClock, FaTag, FaUser } from "react-icons/fa";
import BlogContentRenderer from "./ui/BlogContentRenderer";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-600">Blog</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights and experiences from my journey in software
            development, covering everything from backend architecture to
            frontend optimization.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-blue-500" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-blue-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaUser className="text-blue-500" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-xs rounded-full"
                    >
                      <FaTag className="text-xs" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-gray-400 text-xs">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-center"
                  >
                    Read Full Post
                  </Link>
                </div>

                {selectedPost === post.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-700"
                  >
                    <div className="max-h-96 overflow-y-auto pr-2">
                      <BlogContentRenderer content={post.content} />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to read more? Follow me on social media for updates on new
            posts.
          </p>
          <div className="flex justify-center gap-4">
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
        </motion.div>
      </div>
    </section>
  );
}
