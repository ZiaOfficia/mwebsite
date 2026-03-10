import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { BlogSidebar } from "../components/blog/BlogSidebar";
import { BlogCard } from "../components/blog/BlogCard";
import { motion } from "framer-motion";
import type { BlogPost } from "../data/blogData";
import { API_BASE_URL } from "../config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SEO } from "../components/common/SEO";

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const BlogListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const pageParam = parseInt(searchParams.get("page") || "1");

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationData>({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const itemsPerPage = 10;

  const fetchPosts = useCallback(async (page: number, search: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: itemsPerPage.toString(),
      });
      if (search) {
        params.append("search", search);
      }

      const response = await fetch(`${API_BASE_URL}/api/blogs?${params}`);
      const data = await response.json();

      const formattedPosts: BlogPost[] = data.blogs.map(
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
            : "https://images.unsplash.com/photo-1499750310159-5b600cdf0325",
        }),
      );

      setBlogPosts(formattedPosts);
      setPagination(data.pagination);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(pageParam, searchQuery);
    window.scrollTo(0, 0);
  }, [pageParam, searchQuery, fetchPosts]);

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    setSearchParams(newParams);
  };

  // Generate page numbers for mobile (show limited pages)
  const getVisiblePages = () => {
    const { currentPage, totalPages } = pagination;
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pt-15 md:pt-12.5 pb-24 px-4 md:px-6 bg-white">
      <SEO
        title="Wedding Blog - Trends & Inspiration"
        description="Explore our latest wedding stories, trends, decor tips, and expert advice to help you plan your dream wedding."
      />
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Our Journal
        </p>
        <h1 className="text-4xl md:text-6xl font-display text-gray-900 mb-6">
          Wedding Inspiration & Tips
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Explore our latest stories, trends, and expert advice to help you plan
          your dream luxury wedding.
        </p>
        {pagination.totalCount > 0 && (
          <p className="text-sm text-gray-400 mt-4">
            Showing {blogPosts.length} of {pagination.totalCount} articles
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Main Content (Articles) */}
        <main className="lg:col-span-2">
          {loading ? (
            <div className="text-center py-20 text-gray-400">
              Loading articles...
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No articles found.
            </div>
          ) : (
            <div className="space-y-12 md:space-y-16">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination - Mobile Optimized */}
          {!loading && pagination.totalPages > 1 && (
            <div className="mt-12 md:mt-16">
              <div className="flex items-center justify-center gap-1 md:gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={!pagination.hasPrevPage}
                  className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {getVisiblePages().map((page, index) =>
                    page === "..." ? (
                      <span
                        key={`ellipsis-${index}`}
                        className="w-8 h-9 flex items-center justify-center text-gray-400 text-sm"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page as number)}
                        className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-sm font-medium rounded-lg border transition-all ${
                          pagination.currentPage === page
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                  className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Page Info */}
              <p className="text-center text-xs text-gray-400 mt-4">
                Page {pagination.currentPage} of {pagination.totalPages}
              </p>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
