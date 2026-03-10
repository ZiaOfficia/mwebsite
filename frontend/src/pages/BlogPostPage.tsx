import { useParams, Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";

import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
  Facebook,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { BlogPost } from "../data/blogData";
import { getBlogPostUrl } from "../data/blogData"; // For type definition
import { API_BASE_URL } from "../config";
import { RelatedPosts } from "../components/blog/RelatedPosts";
import { HorizontalEnquiryForm } from "../components/common/HorizontalEnquiryForm";
import { ContactSection } from "../components/sections/ContactSection";

export const BlogPostPage = () => {
  const { slug } = useParams<{
    year?: string;
    month?: string;
    day?: string;
    slug: string;
  }>();
  const [post, setPost] = useState<
    | (BlogPost & {
        metaTitle?: string;
        metaDescription?: string;
        metaKeywords?: string;
      })
    | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
        if (response.ok) {
          const data = await response.json();
          const formattedPost: BlogPost & {
            metaTitle?: string;
            metaDescription?: string;
            metaKeywords?: string;
          } = {
            id: data.id,
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt
              ? data.excerpt
                  .replace(/<!--[\s\S]*?-->/g, "")
                  .replace(/<[^>]+>/g, "")
                  .substring(0, 150) + "..."
              : "",
            content: (data.content || "")
              .replace(/\u00AD/g, "") // Remove soft hyphens (Unicode)
              .replace(/&shy;/gi, "") // Remove soft hyphens (HTML entity)
              .replace(/<wbr\s*\/?>/gi, "") // Remove <wbr> tags
              .replace(/\u200B/g, "") // Remove zero-width spaces
              .replace(/\u200C/g, "") // Remove zero-width non-joiners
              .replace(/\u200D/g, "") // Remove zero-width joiners
              .replace(/\s+style\s*=\s*"[^"]*"/gi, "") // Strip inline styles (double quotes)
              .replace(/\s+style\s*=\s*'[^']*'/gi, ""), // Strip inline styles (single quotes)
            createdAt: data.createdAt,
            date: new Date(data.createdAt).toLocaleDateString(),
            author: data.author,
            category: data.category,
            image: data.image_url
              ? data.image_url.startsWith("http")
                ? data.image_url
                : `${API_BASE_URL}${data.image_url}`
              : "https://images.unsplash.com/photo-1499750310159-5b600cdf0325",
            tags: data.tags || "",
            metaTitle: data.meta_title || "",
            metaDescription: data.meta_description || "",
            metaKeywords: data.meta_keywords || "",
          };
          setPost(formattedPost);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    window.scrollTo(0, 0);
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center">
        <h2 className="text-xl font-display text-gray-500">
          Loading Article...
        </h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center">
        <SEO title="Article Not Found" />
        <h2 className="text-3xl font-display mb-4">Article Not Found</h2>
        <Link to="/blog" className="text-primary hover:underline">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[60px] md:pt-[50px] pb-24 bg-white">
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.metaKeywords}
        image={post.image}
        url={getBlogPostUrl(post.slug, post.createdAt)}
        type="article"
      />
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/blog" className="hover:text-primary transition-colors">
            Journal
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900 truncate max-w-[200px]">
            {post.title}
          </span>
        </div>

        {/* Category */}
        <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-900 text-[10px] uppercase tracking-widest font-bold mb-6 rounded-full">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-gray-900 leading-tight mb-8">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-500 text-sm font-medium border-t border-b border-gray-100 py-6">
          <span className="flex items-center gap-2">
            <User size={16} className="text-primary" />
            <span className="text-gray-900">{post.author}</span>
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
          <span className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            <span>{post.date}</span>
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            <span>5 min read</span>
          </span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="w-full overflow-hidden rounded-2xl shadow-sm">
          <img loading="lazy" decoding="async" src={post.image} alt={post.title} className="w-full h-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Main Content */}
        <article className="w-full">
          {/* Content Injection */}
          <div
            className="prose prose-lg prose-stone w-full max-w-none wrap-break-word [hyphens:none] [word-break:normal]
                        prose-headings:font-display prose-headings:font-normal prose-headings:text-gray-900
                        prose-p:font-sans prose-p:text-gray-700 prose-p:leading-loose prose-p:mb-6
                        prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                        prose-strong:font-semibold prose-strong:text-gray-900
                        prose-ul:list-disc prose-ul:font-sans prose-ul:text-gray-700 prose-ul:pl-6 prose-ul:ml-4 [&_ul]:list-disc [&_ul]:list-outside! [&_ul]:pl-6
                        prose-ol:list-decimal prose-ol:font-sans prose-ol:text-gray-700 prose-ol:pl-6 prose-ol:ml-4 [&_ol]:list-decimal [&_ol]:list-outside! [&_ol]:pl-6
                        prose-li:marker:text-primary prose-li:my-2 [&_li]:list-item [&_li]:ml-4
                        prose-img:rounded-xl prose-img:shadow-md prose-img:w-full prose-img:h-auto prose-img:my-10
                        [&_img]:my-10! [&_img]:block!
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:text-gray-800
                        **:max-w-full! **:min-w-0!
                        [&_iframe]:w-full [&_video]:w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share & Tags */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest mr-2">
                  <Tag size={16} /> Tags:
                </div>
                {(post.tags
                  ? post.tags
                      .split(",")
                      .map((t: string) => t.trim())
                      .filter(Boolean)
                  : [post.category]
                ).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 text-xs text-gray-600 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-900">Share:</span>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href,
                        )}`,
                        "_blank",
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all"
                  >
                    <Facebook size={16} />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href,
                        )}&text=${encodeURIComponent(post.title)}`,
                        "_blank",
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all"
                  >
                    <Twitter size={16} />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                          window.location.href,
                        )}&title=${encodeURIComponent(post.title)}`,
                        "_blank",
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all"
                  >
                    <span className="font-bold text-xs">in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Journal
            </Link>
          </div>
        </article>
      </div>

      {post && (
        <RelatedPosts currentPostId={post.id} category={post.category} />
      )}
      <HorizontalEnquiryForm />
      <ContactSection />
    </div>
  );
};
