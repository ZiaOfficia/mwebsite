export interface PortfolioItem {
  id: string;
  title: string;
  services: string;
  date: string;
  location: string;
  heroImage: string;
  description: string[];
  galleryImages: string[];
  videoUrl?: string; // YouTube ID
  testimonial?: {
    quote: string;
    author: string;
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "Devan-ashish",
    title: "Devan & Ashish",
    services: "Floral Design, Centerpiece Design, Draping Services",
    date: "",
    location: "New York",
    heroImage: "/images/portfolio/devan-wedding-decorations-nyc.webp",
    description: [
      "Ashish’s first words when seeing the decor were unforgettable: “Wow… Oh my God… Look at this!” Moments like these are what make our work so rewarding. ",
      "This event stands proudly in our wedding decorator’s portfolio, capturing the elegance, color, and emotion that define our work.",
    ],
    galleryImages: [
      "/images/portfolio/unique-wedding-centerpiece-design-think-outside-the-vase.webp",
      "/images/portfolio/devan-wedding-decorations-nyc.webp",
      "/images/portfolio/untitled-design2.webp",
      "/images/portfolio/wedding-decorators-floral-design-service-usa.webp",
      "/images/portfolio/devan-wedding-decorations-nyc.webp",
      "/images/portfolio/darw-1689-scaled-1.webp",
    ],
    videoUrl: "u9BBO3L0u7A", // Placeholder ID
    testimonial: {
      quote:
        "Elegantize made our dream wedding a reality. The attention to detail was unmatched!",
      author: "Shivani & Carlos",
    },
  },
  {
    id: "adriana-kyle",
    title: "Adriana & Kyle",
    services: "Floral Design, Ceiling Draping, Centerpiece Design",
    date: "",
    location: "Ravel Hotel, New York",
    heroImage: "/images/portfolio/whatsapp-image-2023-09-27-at-12.17.56-2.webp",
    description: [
      "We had the incredible opportunity to bring Adrian & Kyle’s dream wedding to life at the gorgeous Ravel Hotel in New York. As part of our ever-evolving wedding portfolio, this celebration showcased our passion for elegant design and cohesive styling.Our team curated every detail—from romantic floral arrangements and luxurious ceiling draping to sophisticated centerpieces—each element carefully chosen to reflect the couple’s unique taste. This celebration is a proud addition to our wedding decorator’s portfolio, highlighting our expertise in transforming spaces into timeless, romantic settings.",
    ],
    galleryImages: [
      "/images/portfolio/ak-196.webp",
      "/images/portfolio/ak-173.webp",
      "/images/portfolio/whatsapp-image-2023-09-27-at-12.18.28.webp",
      "/images/portfolio/ak-177.webp",
      "/images/portfolio/ak-188.webp",
      "/images/portfolio/dsc02592-1.webp",
    ],
    videoUrl: "PXJWdgfigUg",
    testimonial: {
      quote:
        "Everything was absolutely perfect. The team went above and beyond!",
      author: "Adriana",
    },
  },
  {
    id: "judi-chris",
    title: "Judi & Chris",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/chris-judi-3.0.webp",
    description: [
      "For Judi and Chris’s wedding, strictly elegance was the theme. We transformed the banquet hall into a space of timeless beauty, utilizing a sophisticated palette of gold and white.",
      "The focal point was the custom-designed stage, framed by cascading florals that created a perfect backdrop for their special moments.",
    ],
    galleryImages: [
      "/images/portfolio/floral-design-for-central-stage-weddings.webp",
      "/images/portfolio/judi-chris-4.0.webp",
      "/images/portfolio/judi-and-cris.webp",
      "/images/portfolio/chris-judi-3.0-1.webp",
      "/images/portfolio/chris-judi-2.0.webp",
    ],
    videoUrl: "5HgrU-RK2Ec",
    testimonial: {
      quote:
        "Elegantize brought our vision to life perfectly. It was a dream come true.",
      author: "Judi & Chris",
    },
  },
  {
    id: "tony-tesia",
    title: "Tony & Tesia",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/dsc06181.webp",
    description: [
      "Tony and Tesia’s wedding was a celebration of bold love and beautiful design. We used rich, deep florals to create a sense of drama and intimacy in the ballroom.",
      "Lighting played a key role, illuminating the centerpieces and casting a warm, romantic glow over the entire reception.",
    ],
    galleryImages: [
      "/images/portfolio/dsc05979.webp",
      "/images/portfolio/dsc05880.webp",
      "/images/portfolio/dsc06181-1.webp",
      "/images/portfolio/dsc05988.webp",
      "/images/portfolio/dsc05859.webp",
      "/images/portfolio/dsc06072.webp",
    ],
    videoUrl: "C5ekSwnd7QI",
    testimonial: {
      quote: "A night we will never forget. The decor was absolutely stunning.",
      author: "Tony & Tesia",
    },
  },
  {
    id: "shivani-carlos",
    title: "Shivani & Carlos",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/dsc02529.webp",
    description: [
      "A breathtaking fusion of cultures and styles, Shivani and Carlos’s wedding was a testament to the power of personalized design. We focused on creating a warm, inviting atmosphere that felt both grand and intimate.",
      "The floral arrangements were designed to bridge the gap between traditional elegance and modern sophistication, resulting in a visual experience that left guests in awe.",
    ],
    galleryImages: [
      "/images/portfolio/dsc03995-1.webp",
      "/images/portfolio/dsc02529.webp",
      "/images/portfolio/dsc04018.webp",
      "/images/portfolio/dsc02359.webp",
      "/images/portfolio/dsc02529.webp",
    ],
    videoUrl: "uOLvnCSOtJA",
    testimonial: {
      quote:
        "We were blown away by the beauty of the design. It felt like walking into a dream.",
      author: "Shivani & Carlos",
    },
  },
  {
    id: "puja-kushal",
    title: "Puja & Kushal",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage:
      "/images/portfolio/whatsapp-image-2024-08-16-at-15.52.24_b8120fea.webp",
    description: [
      "For Puja and Kushal, we crafted a setting that radiated vibrancy and joy. Using a bold color palette and lush, overflowing florals, the venue was transformed into a garden of celebration.",
      "Every detail, from the intricate centerpieces to the sweeping ceiling drapery, was meticulously planned to create a cohesive and immersive experience for the couple and their loved ones.",
    ],
    galleryImages: [
      "/images/portfolio/dsc09914.webp",
      "/images/portfolio/dsc00259.webp",
      "/images/portfolio/copy-of-dsc09966.webp",
      "/images/portfolio/dsc00222.webp",
      "/images/portfolio/dsc00215.webp",
      "/images/portfolio/whatsapp-image-2024-08-16-at-15.52.24_b8120fea-1.webp",
    ],
    videoUrl: "f4yTvMkZu2E",
    testimonial: {
      quote:
        "The colors, the flowers, everything was just spectacular. Thank you for making our day so special.",
      author: "Puja",
    },
  },
  {
    id: "monisah-jubayeth",
    title: "Monisah & Jubayeth",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/dsc08990.webp",
    description: [
      "Elegance and sophistication defined Monisah and Jubayeth’s reception. We utilized soft, romantic lighting tailored to highlight the exquisite floral installations, creating an ambiance of pure romance.",
      "The centerpiece designs were crafted to be conversation starters—tall, striking, yet allowing for easy conversation across the table. It was a night of beauty and seamless execution.",
    ],
    galleryImages: [
      "/images/portfolio/dsc08812.webp",
      "/images/portfolio/dsc08946.webp",
      "/images/portfolio/dsc09036.webp",
      "/images/portfolio/dsc08968.webp",
      "/images/portfolio/dsc09005.webp",
      "/images/portfolio/dsc08982.webp",
    ],
    videoUrl: "by3xiUxG3eQ",
    testimonial: {
      quote:
        "Elegantize truly understands how to set a mood. The lighting and flowers were perfect.",
      author: "Monisah",
    },
  },
  {
    id: "monique-greg",
    title: "Monique & Greg",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/dsc00425.webp",
    description: [
      "Monique and Greg envisioned a classic, timeless wedding, and we were honored to bring that vision to life. White florals, crystal accents, and candlelight came together to create a look of understated luxury.",
      "Our team focused on texture and layers, ensuring that the white-on-white palette felt rich and dimensional rather than flat. The result was pure magic.",
    ],
    galleryImages: [
      "/images/portfolio/dsc08812.webp",
      "/images/portfolio/dsc00820.webp",
      "/images/portfolio/dsc00654.webp",
      "/images/portfolio/dsc00425.webp",
      "/images/portfolio/dsc00620.webp",
      "/images/portfolio/dsc00829.webp",
    ],
    videoUrl: "MpBjzRmzsKc",
    testimonial: {
      quote: "Simple, elegant, and breathtaking. Exactly what we wanted.",
      author: "Monique & Greg",
    },
  },
  {
    id: "jaya-kevin",
    title: "Jaya & Kevin",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/dsc00102.webp",
    description: [
      "Jaya and Kevin’s celebration was all about grandeur. We transformed the ballroom with dramatic ceiling installations that drew the eye upward, making the space feel expansive and majestic.",
      "Coupled with lush, low centerpieces, the design struck the perfect balance between awe-inspiring scale and intimate table settings.",
    ],
    galleryImages: [
      "/images/portfolio/dsc00061.webp",
      "/images/portfolio/dsc00085.webp",
      "/images/portfolio/dsc00122-2.webp",
      "/images/portfolio/dsc00079.webp",
      "/images/portfolio/dsc00125.webp",
      "/images/portfolio/dsc00052.webp",
    ],
    videoUrl: "LomsZ2ym_Wc",
    testimonial: {
      quote:
        "Our guests couldn't stop talking about the ceiling decor. It was the highlight of the night!",
      author: "Kevin",
    },
  },
  {
    id: "ayesha-george",
    title: "Ayesha & George",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/copy-of-dsc09906.webp",
    description: [
      "A modern fairytale is how we describe Ayesha and George’s wedding. We incorporated mix-and-match elements to create a dynamic visual flow throughout the venue.",
      "From geometric structures to organic floral flows, every design choice was intentional, creating a bespoke environment that perfectly mirrored the couple’s personality.",
    ],
    galleryImages: [
      "/images/portfolio/copy-of-dsc00017.webp",
      "/images/portfolio/copy-of-img_9069.webp",
      "/images/portfolio/copy-of-img_9075.webp",
      "/images/portfolio/copy-of-dsc00008.webp",
      "/images/portfolio/copy-of-dsc09906.webp",
      "/images/portfolio/copy-of-img_9067.webp",
    ],
    videoUrl: "uaeuOjJwq3w",
    testimonial: {
      quote: "Unique, stylish, and flawlessly executed. We loved every minute.",
      author: "Ayesha",
    },
  },
  {
    id: "kaliyah-curt",
    title: "Kaliyah & Curt",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/img_0551.webp",
    description: [
      "For Kaliyah and Curt, the focus was on romance. Soft pastels, billowing drapes, and candlelight set the scene for an evening filled with love and laughter.",
      "We paid special attention to the head table, creating a focal point that framed the couple beautifully for photos and toasts.",
    ],
    galleryImages: [
      "/images/portfolio/dsc09962.webp",
      "/images/portfolio/img_0689.webp",
      "/images/portfolio/img_0701.webp",
      "/images/portfolio/dsc09834.webp",
      "/images/portfolio/img_0551.webp",
      "/images/portfolio/img_0667.webp",
    ],
    videoUrl: "5HgrU-RK2Ec",
    testimonial: {
      quote:
        "The team made us feel like royalty. The decor was beyond our expectations.",
      author: "Kaliyah",
    },
  },
  {
    id: "tatiana-ulrich",
    title: "Tatiana & Ulrich",
    services: "Centerpiece,Floral Design,Ceilling Design",
    date: "",
    location: "New York, NY",
    heroImage: "/images/portfolio/elegantize_av-61.webp",
    description: [
      "Finishing our season with Tatiana and Ulrich’s wedding was a high note. We designed a sophisticated, high-contrast look that felt modern yet timeless.",
      "The interplay of light and shadow, combined with our signature floral styling, created a dramatic backdrop for an unforgettable celebration.",
    ],
    galleryImages: [
      "/images/portfolio/elegantize_av-65.webp",
      "/images/portfolio/elegantize_av-39.webp",
      "/images/portfolio/elegantize_av-31.webp",
      "/images/portfolio/elegantize_av-65.webp",
      "/images/portfolio/elegantize_av-23.webp",
      "/images/portfolio/elegantize_av-34.webp",
    ],
    videoUrl: "5HgrU-RK2Ec",
    testimonial: {
      quote:
        "Stylish, chic, and professional. We highlight recommend Elegantize.",
      author: "Ulrich",
    },
  },
];
