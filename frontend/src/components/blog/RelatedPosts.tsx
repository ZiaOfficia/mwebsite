import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";
import type { BlogPost } from "../../data/blogData";
import { BlogCard } from "./BlogCard";

interface RelatedPostsProps {
  currentPostId: string | number;
  category: string;
}

export const RelatedPosts = ({
  currentPostId,
  category,
}: RelatedPostsProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // 1. Try fetching by category first
        const url = `${API_BASE_URL}/api/blogs?search=${encodeURIComponent(
          category || "",
        )}&limit=4`;

        const response = await fetch(url);
        const data = await response.json();
        const postsArray = Array.isArray(data) ? data : data.blogs || [];

        // Filter out current post
        let filteredPosts = postsArray.filter(
          (post: any) => String(post.id) !== String(currentPostId),
        );

        // 2. If not enough posts, fetch recent posts as fallback
        if (filteredPosts.length < 3) {
          const fallbackResponse = await fetch(
            `${API_BASE_URL}/api/blogs?limit=4`,
          );
          const fallbackData = await fallbackResponse.json();
          const fallbackArray = Array.isArray(fallbackData)
            ? fallbackData
            : fallbackData.blogs || [];

          const newPosts = fallbackArray.filter(
            (p: any) =>
              String(p.id) !== String(currentPostId) &&
              !filteredPosts.find((fp: any) => fp.id === p.id),
          );

          filteredPosts = [...filteredPosts, ...newPosts];
        }

        const formattedPosts: BlogPost[] = filteredPosts
          .slice(0, 3) // ensure max 3
          .map((post: any) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt
              ? post.excerpt
                  .replace(/<!--[\s\S]*?-->/g, "")
                  .replace(/<[^>]+>/g, "")
                  .substring(0, 150) + "..."
              : "",
            content: post.content,
            createdAt: post.createdAt || post.date,
            date: new Date(post.createdAt || post.date).toLocaleDateString(),
            author: post.author,
            category: post.category,
            image: post.image_url
              ? post.image_url.startsWith("http")
                ? post.image_url
                : `${API_BASE_URL}${post.image_url}`
              : "https://images.unsplash.com/photo-1499750310159-5b600cdf0325",
          }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [category, currentPostId]);

  if (loading || posts.length === 0) return null;

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-display text-gray-900 mb-8 border-l-4 border-primary pl-4">
          You Might Also Like
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
