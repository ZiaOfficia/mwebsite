import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title,
  description = "Luxury wedding decor and event design in New York & New Jersey. Elegantize specializes in custom mandaps, floral arrangements, and premium event styling.",
  keywords,
  name = "Elegantize Weddings",
  type = "website",
  image = "/og-image.jpg", // Ensure this default image exists or update path
  url,
}: SEOProps) => {
  const siteUrl = "https://elegantize.com"; // Update with actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | Elegantize Weddings</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
