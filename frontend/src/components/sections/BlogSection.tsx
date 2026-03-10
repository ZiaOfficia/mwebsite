import { Button } from "../common/Button";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { BlogCard } from "../blog/BlogCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import type { BlogPost } from "../../data/blogData";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch only 3 posts for homepage
        const response = await fetch(`${API_BASE_URL}/api/blogs?limit=3`);
        const data = await response.json();

        // Handle both array format (old) and paginated object format (new)
        const postsArray = Array.isArray(data) ? data : data.blogs || [];

        const formattedPosts: BlogPost[] = postsArray.map(
          (post: BlogPost & { image_url?: string; createdAt?: string }) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt
              ? post.excerpt
                  .replace(/<!--[\s\S]*?-->/g, "")
                  .replace(/<[^>]+>/g, "")
                  .substring(0, 300)
              : "",
            content: post.content,
            createdAt: post.createdAt,
            date: new Date(post.createdAt || post.date).toLocaleDateString(),
            author: post.author,
            category: post.category,
            image: post.image_url
              ? post.image_url.startsWith("http")
                ? post.image_url
                : `${API_BASE_URL}${post.image_url}`
              : "/images/portfolio/dsc00085.webp",
          }),
        );

        setBlogPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching blog posts for home:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const recentPosts = blogPosts.slice(0, 3);

  if (loading) {
    return null; // Or a loader, but reducing layout shift is better handled by skeleton or min-height. Null is fine for now to avoid flash of wrong content.
  }

  return (
    <motion.section
      id="blog"
      className="py-24 px-6 bg-texture-floral"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.p
              variants={itemVariants}
              className="text-primary text-xs font-bold uppercase tracking-widest mb-2"
            >
              From the Journal
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-display text-gray-900"
            >
              Wedding Inspiration
            </motion.h2>
          </div>
          <motion.div variants={itemVariants} className="hidden md:block">
            <Button
              variant="text"
              icon={ArrowRight}
              onClick={() => (window.location.href = "/blog")}
            >
              View All Articles
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Link to="/blog">
            <Button variant="primary" icon={ArrowRight}>
              Read All Blogs
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
