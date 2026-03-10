export interface ServiceData {
  id: string;
  title: string;
  heroImage: string;
  heroTitle: string;
  intro: {
    heading: string;
    subheading: string;
    description: string[];
  };
  whyChooseUs: {
    title: string;
    items: { title: string; description: string }[];
  };
  signatureServices: {
    title: string;
    items: { title: string; description: string; features?: string[] }[];
  };
  process: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  testimonials?: {
    quote: string;
    author: string;
    location: string;
  }[];
  portfolioImages: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "floral-design",
    title: "Floral Design",
    heroImage:
      "/images/general/play-with-white-pink-bookeventz.webp",
    heroTitle: "DISCOVER OUR WEDDING FLORAL DESIGN SERVICES IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR WEDDING FLORAL DESIGN SERVICES",
      subheading:
        "Enchanting Floral Design in NY & NJ: Creating Magical Wedding Moments",
      description: [
        "At Elegantize Weddings, flowers aren’t just decorations—they’re storytellers. Each bloom reflects a chapter of your love story, and we take pride in crafting floral designs for wedding decoration that speak from the heart. As the best wedding floral designers in NYC, we create lush, artful arrangements inspired by nature’s timeless beauty and your unique vision.",
        "Our team thrives on bringing your dreams to life, blending colors, textures, and seasonal blooms to create unforgettable designs. Whether you envision a romantic garden-style wedding or a modern, elegant affair, our floral wedding designers will ensure every detail aligns perfectly with your dream celebration.",
      ],
    },
    whyChooseUs: {
      title: "Why Couples Choose Us",
      items: [
        {
          title: "Personalized Designs",
          description:
            "Every bouquet, centerpiece, and installation is a one-of-a-kind creation tailored to you.",
        },
        {
          title: "Seasonal Inspiration",
          description:
            "We source the freshest blooms to reflect the natural beauty of each season.",
        },
        {
          title: "Attention to Detail",
          description:
            "Our team ensures every petal is perfectly placed, delivering a flawless experience.",
        },
      ],
    },
    signatureServices: {
      title: "Our Signature Floral Services",
      items: [
        {
          title: "Custom Bouquets and Boutonnieres",
          description:
            "Designed with care by our floral designer wedding specialists, these personal touches are as unique as your love story.",
        },
        {
          title: "Show-Stopping Ceremony Decor",
          description:
            "From floral arches to aisle arrangements, we craft designs that make your “I do” moment unforgettable.",
        },
        {
          title: "Enchanting Reception Centerpieces",
          description:
            "Our floral wedding design transforms tables into works of art, creating an atmosphere of elegance and warmth.",
        },
        {
          title: "Unique Floral Installations",
          description:
            "Let us bring drama and beauty to your venue with breathtaking floral walls, hanging arrangements, and more.",
        },
      ],
    },
    process: {
      title: "A Collaborative Journey",
      description:
        "We believe in crafting wedding experiences as much as we craft flowers. That’s why our process is collaborative and stress-free:",
      steps: [
        {
          title: "Initial Consultation",
          description: "Share your vision, and we’ll dream alongside you.",
        },
        {
          title: "Design Proposal",
          description:
            "Receive a custom floral design plan that reflects your wedding style.",
        },
        {
          title: "Flawless Execution",
          description:
            "From delivery to setup, our team handles everything, so you can focus on celebrating.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Elegantize Weddings turned our floral dreams into reality. Every arrangement was a masterpiece. Their team made the process so easy, and the result was beyond anything we could have imagined!",
        author: "Emma & James",
        location: "New York",
      },
      {
        quote:
          "The attention to detail, creativity, and passion they brought to our wedding were unparalleled. The flowers were stunning, and we’ll cherish the memories forever.",
        author: "Sofia & Michael",
        location: "New Jersey",
      },
    ],
    portfolioImages: [
      "/images/gallery/dsc382098743-1.webp",
      "/images/gallery/dsc00021.webp",
      "/images/gallery/dsc8720274-1.webp",
      "/images/gallery/dsc08934.webp",
      "/images/gallery/dsc00215.webp",
      "/images/gallery/dsc00038-1.webp",
    ],
  },
  {
    id: "ceiling-design",
    title: "Ceiling Design",
    heroImage:
      "/images/home/382098743.webp",
    heroTitle: "BREATHTAKING CEILING DESIGN SERVICES IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR WEDDING CEILING DESIGN SERVICES",
      subheading:
        "Captivating Ceiling Designs: Elevate Your Venue Decor to New Heights",
      description: [
        "At Elegantize Weddings, we believe your love story deserves to be celebrated beneath a canopy of elegance and wonder. Our ceiling design for weddings in the United States transforms venues into magical spaces that captivate hearts and create lasting memories. Whether you envision cascading floral installations, draped fabrics, or glimmering chandeliers, our team specializes in curating wedding ceiling decor in New York and New Jersey that reflects your unique style and creates an immersive experience for you and your guests.",
      ],
    },
    whyChooseUs: {
      title: "Why Our Ceiling Designs Stand Out",
      items: [
        {
          title: "Tailored to Your Vision",
          description:
            "We collaborate closely to ensure the ceiling design aligns with your overall theme and aesthetic.",
        },
        {
          title: "Expert Craftsmanship",
          description:
            "From floral artistry to lighting and draping, our team excels at creating cohesive designs.",
        },
        {
          title: "Unmatched Quality",
          description:
            "We source premium materials and décor elements to craft ceilings that leave a lasting impression.",
        },
      ],
    },
    signatureServices: {
      title: "Our Signature Ceiling Services",
      items: [
        {
          title: "Draping Services",
          description:
            "Create a romantic ambiance with soft, flowing fabrics that frame your space beautifully. Our decoration for ceiling design ensures seamless integration with your wedding theme.",
        },
        {
          title: "Floral Ceiling Décor",
          description:
            "Bring nature indoors with our exquisite floral ceiling decor, featuring lush blooms, hanging arrangements, and verdant greenery.",
        },
        {
          title: "Lighting Enhancements",
          description:
            "Elevate the mood with custom lighting designs, from twinkling fairy lights to elegant chandeliers.",
        },
        {
          title: "Custom Installations",
          description:
            "Think beyond tradition with statement pieces, such as suspended centerpieces, cascading ribbons, or whimsical lanterns.",
        },
      ],
    },
    process: {
      title: "Personalized Experience",
      description:
        "From the first consultation to the final reveal, we work closely with you to make your wedding ceiling a centerpiece of elegance and charm:",
      steps: [
        {
          title: "Vision Boarding",
          description:
            "Share your ideas, and we’ll create a visual plan tailored to your preferences.",
        },
        {
          title: "Concept Visualization",
          description:
            "Our wedding decoration team evaluates your venue to maximize its potential with the perfect ceiling décor.",
        },
        {
          title: "Execution with Precision",
          description:
            "On your big day, we bring your vision to life, ensuring every detail is flawless.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Elegantize turned our venue into a dream come true. The ceiling design was magical—floral installations, lights, and draping worked together perfectly. It’s something our guests still talk about!",
        author: "Ava & Daniel",
        location: "New Jersey",
      },
      {
        quote:
          "We wanted something unique for our wedding, and the team at Elegantize delivered beyond our expectations. The ceiling décor completely transformed the space—it was breathtaking!",
        author: "Rachel & Ethan",
        location: "New York",
      },
    ],
    portfolioImages: [
      "/images/home/95261302.webp",
      "/images/home/copy-of-ak-202.webp",
      "/images/home/395791049-1.webp",
      "/images/home/dsc00644.webp",
      "/images/home/copy-of-dsc00653.webp",
      "/images/home/c3bc82a9-1671-4455-ad92-a47e6beb5e94-1.webp",
    ],
  },
  {
    id: "centerpiece-design",
    title: "Centerpiece Design",
    heroImage:
      "/images/general/noivaansiosa.webp",
    heroTitle: "DISCOVER OUR WEDDING CENTERPIECE DESIGN SERVICES IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR WEDDING CENTERPIECE DESIGN SERVICES",
      subheading: "Centerpiece Splendor: Creating Timeless Tablescapes",
      description: [
        "Your wedding day is a canvas, and every detail should reflect your unique love story. At Elegantize Weddings, we specialize in crafting wedding centerpiece decor in New York that captures the essence of your celebration. Whether you’re dreaming of classic elegance, rustic charm, or modern sophistication, our unique wedding centerpiece designs in the United States will bring your vision to life.",
      ],
    },
    whyChooseUs: {
      title: "What Makes Eleganitze Weddings Different",
      items: [
        {
          title: "Experienced Designers",
          description:
            "With years of expertise, our team understands the art of creating centerpieces that leave a lasting impression.",
        },
        {
          title: "Premium Quality",
          description:
            "We use the finest flowers, materials, and décor elements to ensure your centerpieces are nothing short of perfection.",
        },
        {
          title: "End-to-End Service",
          description:
            "From design to delivery and setup, we handle every detail, so you can focus on enjoying your big day.",
        },
      ],
    },
    signatureServices: {
      title: "Our Signature Centerpiece Services",
      items: [
        {
          title: "Classic Floral Centerpieces",
          description:
            "Our wedding flower centerpieces feature lush blooms and artistic arrangements, adding color, texture, and romance to your reception tables.",
          features: [
            "Variety of blooms including roses, peonies, lilies, hydrangeas, and seasonal favorites.",
            "Customizable color palettes to match your wedding theme perfectly.",
            "Artistic styling with cascading arrangements, compact posies, or garden-style designs.",
          ],
        },
        {
          title: "Rustic Elegance",
          description:
            "Create a warm, inviting ambiance with rustic centerpieces for a wedding, incorporating elements like wood, greenery, and soft candlelight for a timeless look.",
          features: [
            "Incorporation of greenery like eucalyptus, ferns, or ivy for a fresh, organic look.",
            "Soft lighting through mason jars, lanterns, or votive candles to enhance the romantic glow.",
            "Seasonal flowers like sunflowers, wildflowers, or baby’s breath to add a delicate touch.",
          ],
        },
        {
          title: "Modern Minimalist",
          description:
            "For couples seeking a sleek aesthetic, we offer chic wedding party table centerpieces featuring geometric shapes, monochromatic palettes, and clean lines.",
          features: [
            "Use of structured shapes like hexagons, cubes, or circles for a bold, architectural look.",
            "Neutral or monochrome color schemes—think white, black, gold, or muted tones.",
            "Minimal floral arrangements, often with single-stem blooms or greenery.",
          ],
        },
        {
          title: "Seasonal & Thematic",
          description:
            "Celebrate the season or a specific theme with our custom creations, blending vibrant colors and seasonal elements for a memorable touch. ",
          features: [
            "From spring blossoms to autumnal foliage, each piece reflects the unique beauty of the time of year.",
            "Ideal for any occasion — be it a cozy winter wedding or a breezy summer celebration.",
            "These seasonal designs add warmth, character, and a meaningful touch to every table setting.",
          ],
        },
      ],
    },
    process: {
      title: "A Personalized Approach to Centerpiece Design",
      description:
        "Every couple is unique, and so are our designs. Here’s how we create your dream centerpiece:",
      steps: [
        {
          title: "Initial Consultation",
          description: "Share your wedding vision, theme, and preferences.",
        },
        {
          title: "Custom Proposal",
          description:
            "Receive a tailored design plan featuring centerpiece concepts that complement your style.",
        },
        {
          title: "Flawless Execution",
          description:
            "Our expert team crafts and arranges your centerpieces with precision, ensuring they enhance the beauty of your venue.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "The centerpieces Elegantize created were stunning! They brought our theme to life and were the perfect blend of elegance and charm. Everyone loved them!",
        author: "Sophia & Liam",
        location: "New York, NY",
      },
      {
        quote:
          "We wanted something unique for our reception, and Elegantize delivered. The centerpieces were truly works of art!",
        author: "Emily & Noah",
        location: "New Jersey, NJ",
      },
      {
        quote:
          "Choosing Elegantize for our event decor was one of the best decisions we made. Highly recommended!",
        author: "Devan & Ashish",
        location: "New Jersey, NJ",
      },
    ],
    portfolioImages: [
      "/images/home/copy-of-dsc05988.webp",
      "/images/home/copy-of-copy-of-dsc00606.webp",
      "/images/home/copy-of-dsc00989.webp",
      "/images/home/5481356d-e5c7-4119-a495-c7b19be19811.webp",
      "/images/home/copy-of-dsc02819.webp",
      "/images/home/395725119.webp",
    ],
  },
  {
    id: "vinyl-floor-wrap",
    title: "Vinyl Floor Wraps",
    heroImage:
      "/images/general/il_1588xn.3666063238_qsa7.webp",
    heroTitle: "CUSTOM VINYL FLOOR WRAPS IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR WEDDING VINYL FLOOR WRAPS SERVICES",
      subheading:
        "Transform Your Wedding Venue with Stunning Vinyl Floor Wraps",
      description: [
        "At Elegantize Weddings, we believe every detail of your big day should reflect your unique style and love story. One of the most impactful ways to personalize your wedding venue is through wedding floor wrap decoration in New York. From elegant monograms to breathtaking designs, our vinyl floor wrap wedding services turn ordinary floors into extraordinary showcases of beauty and creativity.",
      ],
    },
    whyChooseUs: {
      title: "Why Wrap Your Floor?",
      items: [
        {
          title: "Total Transformation",
          description:
            "Instantly cover outdated carpets or scratched wood with a pristine, glossy surface.",
        },
        {
          title: "High-Quality Vinyl",
          description:
            "We use durable, non-slip, high-gloss materials that withstand dancing all night.",
        },
        {
          title: "Seamless Removal",
          description:
            "Our professional installation ensures no residue is left behind after the event.",
        },
      ],
    },
    signatureServices: {
      title: "Our Wedding Floor Wrap Services",
      items: [
        {
          title: "Custom Designs Tailored to You",
          description:
            "Our design team collaborates with you to create a unique wedding dance floor wrap that aligns with your wedding theme, color palette, and personal style.",
        },
        {
          title: "High-Quality Materials",
          description:
            "We use premium vinyl for our floor wraps, ensuring vibrant colors, durability, and a flawless finish that enhances your venue’s aesthetic.",
        },
        {
          title: "Seamless Installation",
          description:
            "Our professional wedding decor team handles every detail, from concept to installation, so you can focus on enjoying your special day.",
        },
      ],
    },
    process: {
      title: "Personalized Vinyl Floor Wrap Ideas",
      description: "",
      steps: [
        {
          title: "Elegant Monograms",
          description:
            "Add a touch of sophistication with your initials or wedding date as the centerpiece.",
        },
        {
          title: "Romantic Patterns",
          description:
            "Choose floral motifs, lace-inspired designs, or celestial themes for a dreamy vibe.",
        },
        {
          title: "Vibrant Themes",
          description:
            "Incorporate bold colors and designs to make a statement. Perfect for modern or cultural weddings.",
        },
        {
          title: "Vibrant Themes",
          description:
            "Incorporate bold colors and designs to make a statement. Perfect for modern or cultural weddings.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Elegantize turned our plain reception floor into a stunning masterpiece. The monogram design was breathtaking and made our first dance unforgettable!”",
        author: "Rachel & Ethan",
        location: "New York, NY",
      },
      {
        quote:
          "We loved how the floor wrap tied together our entire wedding theme. The design and quality were top-notch!",
        author: "Ava & James",
        location: "New Jersey,NJ",
      },
    ],
    portfolioImages: [
      "/images/home/dsc00644.webp",
      "/images/home/627932fd-b02f-44d5-b215-de33d1df4fc5.webp",
      "/images/gallery/dsc8720274-2.webp",
      "/images/gallery/dsc01084-1.webp",
      "/images/home/copy-of-dsc05988.webp",
      "/images/home/2366abf6-75ec-4ed4-9837-cb9ee6146cd9.webp",
    ],
  },
  {
    id: "ceremony-decor",
    title: "Ceremony Decor",
    heroImage:
      "/images/portfolio/dsc02592.webp",
    heroTitle: "UNFORGETTABLE CEREMONY DECOR IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR CEREMONY DECOR SERVICES",
      subheading: "Transform Your Big Day with Stunning Ceremony Décor",
      description: [
        "At Elegantize Weddings, we specialize in creating breathtaking wedding ceremony decorations in New York and New Jersey that set the stage for your “I Do” moment.",
        "Whether you envision a grand celebration or a rustic, intimate affair, our designs reflect your unique love story, ensuring your ceremony is as unforgettable as the vows you exchange.",
      ],
    },
    whyChooseUs: {
      title: "Why Our Ceremonies Create Impact",
      items: [
        {
          title: "Tailored to Your Vision",
          description:
            "We work closely with you to ensure every detail aligns with your theme and style.",
        },
        {
          title: "Attention to Detail",
          description:
            "From the smallest accents to the grandest installations, we guarantee precision and perfection.",
        },
        {
          title: "Passion for Elegance",
          description:
            "With years of experience, we deliver décor that not only enhances your venue but also tells your love story.",
        },
      ],
    },
    signatureServices: {
      title: "Our Ceremony Décor Services",
      items: [
        {
          title: "Personalized Aisle Designs",
          description:
            "Transform your aisle into a path of beauty with custom wedding ceremony aisle decor, including lush floral arrangements, lanterns, petals, or rustic accents tailored to your vision.",
        },
        {
          title: "Showstopping Arches & Altars",
          description:
            "From romantic floral arches to chic minimalist backdrops, we design a stunning focal point that reflects your style. Perfect for photos and your most cherished moments.",
        },
        {
          title: "Rustic Wedding Themes",
          description:
            "For couples who adore charm and simplicity, our rustic wedding ceremony decor in New Jersey features natural elements, such as wood, greenery, and earthy tones, to create a warm and inviting atmosphere.",
        },
        {
          title: "Cultural & Traditional Designs",
          description:
            "Planning a marriage ceremony NYC with cultural or religious significance? We honor your traditions by incorporating meaningful symbols and designs into your décor.",
        },
      ],
    },
    process: {
      title: "Ceremony Décor Ideas",
      description: "Incorporate fresh blooms for a romantic, timeless look.",
      steps: [
        {
          title: "Floral Elegance",
          description:
            "Incorporate fresh blooms for a romantic, timeless look.",
        },
        {
          title: "Aisle Enhancements",
          description:
            "Adorn your aisle with candles, petals, or rustic lanterns.",
        },
        {
          title: "Statement Arches",
          description:
            "Create a picture-perfect altar with floral, geometric, or greenery-covered arches.",
        },
        {
          title: "Rustic Details",
          description:
            "Use wooden signs, barrels, or macramé accents for a natural, cozy vibe.Create a picture-perfect altar with floral, geometric, or greenery-covered arches.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "Elegantize Weddings transformed our ceremony into a dream come true. The rustic décor was absolutely stunning, and our guests couldn’t stop complimenting the setup.",
        author: "Emily & Josh",
        location: "New Jersey, NJ",
      },
      {
        quote:
          "From the aisle to the altar, every detail was perfect. The floral arrangements and the arch were breathtaking and made our day even more special.",
        author: "Mia & Daniel",
        location: "New York, NY",
      },
    ],
    portfolioImages: [
      "/images/gallery/elegantize_av-51.webp",
      "/images/gallery/dsc08998-1.webp",
      "/images/gallery/dsc08933-1.webp",
      "/images/gallery/dsc18469449-1.webp",
      "/images/gallery/dsc00379.webp",
      "/images/home/05028235.webp",
    ],
  },
  {
    id: "draping-services",
    title: "Draping Services",
    heroImage:
      "/images/general/4da02ecaa4ae7e295ff13ff1900ba116.webp",
    heroTitle: "ELEGANT WEDDING DRAPING IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR DRAPING SERVICES IN NYC & NJ",
      subheading: "Elevate Your Celebration with Elegant Wedding Draping Décor",
      description: [
        "At Elegantize Weddings, we specialize in crafting stunning wedding decor draping services in New York and New Jersey that add sophistication and charm to your special day. Draping décor has the power to transform any venue, creating a magical ambiance that enhances the beauty of your wedding ceremony or reception.",
        "Whether you envision a grand celebration or a rustic, intimate affair, our designs reflect your unique love story, ensuring your ceremony is as unforgettable as the vows you exchange.",
      ],
    },
    whyChooseUs: {
      title: "Why Draping Matters",
      items: [
        {
          title: "Tailored Designs",
          description:
            "We customize every draping element to match your wedding theme and vision.",
        },
        {
          title: "High-Quality Fabrics",
          description:
            "Choose from a wide selection of premium fabrics, colors, and textures.",
        },
        {
          title: "Attention to Detail",
          description:
            "Our team ensures every fold, pleat, and layer is flawlessly executed.",
        },
        {
          title: "Seamless Integration",
          description:
            "We collaborate with your planner and other vendors for a cohesive look.",
        },
      ],
    },
    signatureServices: {
      title: "Draping Applications",
      items: [
        {
          title: "Elegant Ceiling Draping for Weddings",
          description:
            "Create a breathtaking atmosphere with flowing fabrics that cascade from the ceiling, adding depth, texture, and an air of sophistication. Our ceiling draping for wedding ceremonies and receptions is tailored to suit your venue’s architecture and theme.",
        },
        {
          title: "Romantic Backdrops and  Walls",
          description:
            "Set the stage for your vows or head table with beautifully designed draped backdrops. Our expert team uses high-quality draping fabric for decoration, including sheer, satin, and velvet options, to match your aesthetic.",
        },
        {
          title: "Wall Covering",
          description:
            "Elevate your reception space with artistic draping that complements your tablescapes, lighting, and overall décor. From grand entrances to stage backdrops, we ensure every element flows seamlessly.",
        },
        {
          title: "Custom Aisle and Ceremony Draping",
          description:
            "Walk down the aisle in style with delicately draped fabrics that frame your path. Our draping decor for wedding ceremony services include arches, canopies, and altar draping for a picture-perfect setup.",
        },
      ],
    },
    process: {
      title: "Wedding Draping Ideas",
      description: "",
      steps: [
        {
          title: "Ceiling Draping for Weddings",
          description:
            "Combine flowing fabrics with twinkling fairy lights or chandeliers for a dreamy, ethereal effect.",
        },
        {
          title: "Rustic Elegance",
          description:
            "Use natural fabrics like burlap or linen for rustic or boho-themed weddings.",
        },
        {
          title: "Color Accents",
          description:
            "Incorporate your wedding colors with vibrant or soft-toned draping fabric for decoration.",
        },
        {
          title: "Layered Textures",
          description:
            "Add dimension with layered sheer and opaque fabrics for a luxurious feel.",
        },
      ],
    },
    testimonials: [
      {
        quote:
          "The draping at our reception was breathtaking! Elegantize Weddings transformed the space into something out of a fairy tale. Every detail was perfect.",
        author: "Rachel & Sam",
        location: "New York",
      },
      {
        quote:
          "From the ceiling to the altar, the draping added a level of elegance we didn’t even know was possible. Our guests couldn’t stop talking about it!",
        author: "Amanda & John",
        location: "New Jersey",
      },
    ],
    portfolioImages: [
      "/images/home/copy-of-dsc00653.webp",
      "/images/home/5481356d-e5c7-4119-a495-c7b19be19811.webp",
      "/images/home/dsc00335.webp",
      "/images/home/dsc00326-1.webp",
      "/images/home/copy-of-ak-202.webp",
      "/images/home/2366abf6-75ec-4ed4-9837-cb9ee6146cd9.webp",
    ],
  },
  {
    id: "mandap-design",
    title: "Mandap Design",
    heroImage:
      "/images/portfolio/dsc03995.webp",
    heroTitle: "DISCOVER OUR WEDDING MANDAP DESIGN SERVICES IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR WEDDING MANDAP DESIGN SERVICES",
      subheading:
        "Celebrate Love With The Best Mandap Decoration Tailored For You",
      description: [
        "Celebrate love in style with the best mandap decoration that turns your wedding into a masterpiece. At Elegantize, we bring together tradition and modern elegance to create breathtaking setups that reflect your story. From vibrant floral themes to grand cultural settings, our expertise in Indian wedding decoration ensures every detail feels magical. For couples in the USA, we design mandaps that are not just beautiful but unforgettable.",
      ],
    },
    whyChooseUs: {
      title: "Why Mandap Design Matters in Every Indian Wedding",
      items: [
        {
          title: "Cultural Significance",
          description:
            "The mandap is the sacred space where wedding rituals and vows are performed, symbolizing tradition and heritage.",
        },
        {
          title: "Emotional Impact",
          description:
            "It serves as the focal point for families and guests, creating memories that last a lifetime.",
        },
        {
          title: "Aesthetic Appeal",
          description:
            "A beautifully designed mandap elevates the overall wedding décor, adding elegance and charm to the ceremony.",
        },
        {
          title: "Personal Expression",
          description:
            "Mandap designs reflect the couple’s personality, style, and vision, making the ceremony truly unique.",
        },
        {
          title: "Photography & Memories",
          description:
            "The mandap is the backdrop for countless photographs, ensuring that every captured moment is picture-perfect.",
        },
      ],
    },
    signatureServices: {
      title: "Mandap Styles",
      items: [
        {
          title: "Traditional Indian Mandap Designs",
          description: "",
          features: [
            "Traditional mandaps bring elegance and heritage to weddings, symbolizing the sacred space where vows are exchanged and creating a meaningful, memorable atmosphere.",
            "Meticulous Detailing by Elegantize: Every aspect—from fabrics and floral drapes to colors, lighting, and motifs—is crafted with perfection, ensuring the mandap reflects care, artistry, and devotion.",
            "Creating Timeless Memories: The final setup is not just visually stunning but radiates love, tradition, and the beginning of your forever, making each moment under the mandap truly unforgettable.",
          ],
        },
        {
          title: "Modern & Contemporary Mandap Decoration",
          description: "",
          features: [
            "Sleek & Sophisticated Styling: Indoor mandaps feature soft drapery, creative lighting, and elegant structures, offering chic aesthetics that perfectly suit modern couples.",
            "Customization & Personal Expression: Each mandap is tailored to reflect the couple’s unique style and personality, making the wedding stage an artistic statement.",
            "Expert Execution by Elegantize: From design to setup, Elegantize blends creativity, technology, and precision to create indoor mandaps that radiate sophistication and make every vow memorable. We believe that the mandap should not only be a centerpiece but also a reflection of your personality.",
          ],
        },
        {
          title: "Modern & Contemporary Mandap Decoration",
          description:
            "Structures completely covered in blooms for a garden-like feel.",
          features: [
            "Grand & Exclusive Settings: Luxury destination wedding mandaps across the USA bring grandeur and exclusivity to your special day. Whether set against the waves of a beach, the charm of a lush garden, or the elegance of a grand ballroom, these mandaps create an unforgettable backdrop for your vows.",
            "Opulent & Emotional Décor: Outdoor luxury settings, adorned with premium fabrics, bespoke floral designs, and opulent structures, capture both beauty and emotion. At Elegantize, we specialize in curating destination mandaps that blend seamlessly with the venue’s natural charm while elevating it with exquisite detailing.",
            "Tailored Perfection with Elegantize: From concept to execution, every element is tailored to reflect your vision of a fairy-tale wedding. With Elegantize by your side, your destination wedding mandap becomes not just décor, but a masterpiece of love, luxury, and timeless memories.",
          ],
        },
      ],
    },
    process: {
      title: "Attention to Every Detail",
      description: "",
      steps: [
        {
          title: "Floral Precision",
          description:
            "Fresh, hand-picked flowers are arranged with artistry to symbolize beauty and prosperity.",
        },
        {
          title: "Fabric & Lighting Balance",
          description:
            "Drapes and lights are carefully chosen and aligned to enhance the ambiance.",
        },
        {
          title: "Perfect Symmetry",
          description:
            "Every element is thoughtfully placed to ensure the mandap looks flawless from every angle.",
        },
      ],
    },
    // Testimonials removed for Mandap Design
    portfolioImages: [
      "/images/home/95261302.webp",
      "/images/portfolio/dsc07116.webp",
      "/images/portfolio/dsc00061-1.webp",
      "/images/portfolio/dsc02359-1.webp",
      "/images/portfolio/dsc07116.webp",
      "/images/home/395791049-1.webp",
    ],
  },
  {
    id: "stage-design",
    title: "Stage Design",
    heroImage:
      "/images/home/395791049.webp",
    heroTitle: "DISCOVER OUR WEDDING STAGE DESIGN SERVICES IN NYC & NJ",
    intro: {
      heading: "DISCOVER OUR WEDDING STAGE DESIGN SERVICES",
      subheading:
        "Wedding Stage Decoration Experts in the USA – Modern, Creative & Customized Designs",
      description: [
        "At Elegantize Wedding, we specialize in creating the most beautiful wedding stage decoration that reflects your style and vision. Our expert designers bring together creativity and elegance to craft stages that leave lasting impressions. From grand luxury setups to low cost wedding stage decoration options, we customize every detail to suit your budget. We focus on modern trends, personalized themes, and innovative designs that make your big day truly unforgettable.With us, your wedding stage becomes more than just décor – it becomes the centerpiece of your celebration in the USA.",
      ],
    },
    whyChooseUs: {
      title: "Elegantize Signature Style",
      items: [
        {
          title: "Iconic stage designs that combine grandeur with elegance ",
          description:
            "Our signature style is all about creating wedding stages that feel larger-than-life while still maintaining a refined, sophisticated charm.",
        },
        {
          title: "Dramatic lighting, floral artistry, and statement backdrops",
          description:
            "Every element is carefully layered to make your stage the true showstopper of the event.",
        },
        {
          title: "Perfect for couples who want a “wow” factor",
          description:
            "The Grand Stage Experience by Elegantize ensures that your wedding feels nothing short of a red-carpet celebration in the USA.",
        },
      ],
    },
    signatureServices: {
      title: "Creative & Customized Stage Decoration Services",
      items: [
        {
          title: "Luxury Stage Designs for Unforgettable Weddings",
          description: "",
          features: [
            "Our luxury wedding stage decorations bring together breathtaking floral walls, cascading blooms, and statement chandeliers that immediately set the tone for elegance.",
            "Crystal accents, metallic details, and customized lighting solutions ensure the stage radiates glamour and luxury while beautifully highlighting the couple.",
            "Our luxury stage concepts are inspired by international wedding trends, offering couples in the USA a chance to enjoy décor that feels straight out of a bridal magazine. ",
          ],
        },
        {
          title: "Affordable & Stylish Stage Decoration Options",
          description: "",
          features: [
            "Smart use of flowers, draping, and lighting for a stunning yet budget-friendly look.",
            "Creative themes that balance beauty with practicality.",
            "Ideal for couples looking for low cost wedding stage decoration without compromising style.",
            "By incorporating sustainable décor pieces like reusable fabric drapes, artificial floral accents, and modular stage setups, we ensure you save money while also being eco-conscious.",
          ],
        },
        {
          title: "Personalized Themes & Customized Touches",
          description: "",
          features: [
            "Designs inspired by your love story, culture, or favorite trends.",
            "Flexible options ranging from rustic chic, modern minimal, to traditional elegance.",
            "A truly tailored approach that ensures your stage reflects your personality.",
            "We use creative lighting, textures, and layout techniques to emphasize the theme, ensuring your stage stands out in photos and videos.",
          ],
        },
      ],
    },
    process: {
      title: "Professional Setup & Hassle-Free Service",
      description: "",
      steps: [
        {
          title: "On-time delivery and flawless execution",
          description:
            "We ensure every décor element is ready before the celebration begins, so there are no last-minute worries.",
        },
        {
          title: "Expert installation team with attention to detail ",
          description:
            "Our professionals handle everything from stage setup to lighting arrangements with precision and care.",
        },
        {
          title: "Stress-free experience for couples and families",
          description:
            "With our seamless process, you can focus on enjoying your big day while we take care of the rest.",
        },
      ],
    },
    // Testimonials removed for Stage Design
    portfolioImages: [
      "/images/gallery/dsc18469449-1.webp",
      "/images/gallery/dsc00360-1.webp",
      "/images/gallery/dsc08934.webp",
      "/images/gallery/dsc08998-1.webp",
      "/images/gallery/dsc00215.webp",
      "/images/gallery/elegantize_av-39-1.webp",
    ],
  },
];
