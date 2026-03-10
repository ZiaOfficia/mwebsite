import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Utensils,
  Flower2,
  ArrowRight,
  LampCeiling,
  LampFloor,
  ShirtIcon,
  Theater,
  TheaterIcon,
  ChevronRight,
} from "lucide-react";
import { SEO } from "../components/common/SEO";
import NewsletterSection from "../components/sections/NewsletterSection";
import { useState } from "react";
import { getOptimizedImage } from "../utils/imageUtils";

export const ServicesPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "What types of events does Elegantize specialize in decorating?",
      answer:
        "Elegantize specializes in decorating a wide range of events, including weddings, corporate events, private parties, and more. Whether you’re planning an intimate gathering or a lavish affair, we have the expertise to elevate your event decor to the next level.",
    },
    {
      question: "How far in advance should I book Elegantize for my event?",
      answer:
        "We recommend booking Elegantize as early as possible to ensure availability for your desired date. Our calendar fills up quickly, especially during peak wedding and event seasons. Contact us to discuss your event date and secure our services in advance.",
    },
    {
      question:
        "Can Elegantize accommodate specific themes or design preferences for my event?",
      answer:
        "Absolutely! At Elegantize, we pride ourselves on our versatility and ability to tailor our decor to match your unique vision. Whether you have a specific theme in mind or prefer a custom design, our team will work closely with you to bring your ideas to life.",
    },
    {
      question: "What is included in Elegantize's event decor services?",
      answer:
        "Our event decor services typically include a consultation to discuss your vision, design concept development, decor setup and installation, and teardown after the event. We offer a range of decor options, including floral arrangements, table settings, backdrops, lighting, and more.",
    },
    {
      question:
        "How do I request a quote for event decor services from Elegantize?",
      answer:
        "Requesting a quote from Elegantize is easy! Simply fill out our online contact form or reach out to us via email or phone. Provide us with details about your event, including the date, location, estimated guest count, and any specific decor preferences or requirements. We’ll promptly get back to you with a customized quote tailored to your needs.",
    },
  ];
  const services = [
    {
      id: "floral-design",
      icon: <Flower2 className="w-8 h-8 text-primary" />,
      title: "Floral Design",
      description:
        "At Elegantize Weddings, flowers aren’t just decorations—they’re storytellers. Each bloom reflects a chapter of your love story, and we take pride in crafting floral designs for wedding decoration that speak from the heart. As the best wedding floral designers in NYC, we create lush, artful arrangements inspired by nature’s timeless beauty and your unique vision. ",
      features: [
        "Custom Bouquets and Boutonnieres",
        "Show-Stopping Ceremony Decor",
        "Enchanting Reception Centerpieces",
        "Unique Floral Installations",
      ],
      image: "/images/general/play-with-white-pink-bookeventz.webp",
    },
    {
      id: "ceiling-design",
      icon: <LampCeiling className="w-8 h-8 text-primary" />,
      title: "Ceiling Design",
      description:
        "At Elegantize Weddings, we believe your love story deserves to be celebrated beneath a canopy of elegance and wonder. Our ceiling design for weddings in the United States transforms venues into magical spaces that captivate hearts and create lasting memories. Whether you envision cascading floral installations, draped fabrics, or glimmering chandeliers, our team specializes in curating wedding ceiling decor in New York and New Jersey that reflects your unique style.",
      features: [
        "Draping Services",
        "Floral Ceiling Décor",
        "Lighting EnhancementsCustom Installations",
        "Custom Installations",
      ],
      image: "/images/home/382098743.webp",
    },
    {
      id: "centerpiece-design",
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Centerpiece Design",
      description:
        "Your wedding day is a canvas, and every detail should reflect your unique love story. At Elegantize Weddings, we specialize in crafting wedding centerpiece decor in New York that captures the essence of your celebration. Whether you’re dreaming of classic elegance, rustic charm, or modern sophistication, our unique wedding centerpiece designs in the United States will bring your vision to life.",
      features: [
        "Classic Floral Centerpieces",
        "Rustic Elegance",
        "Modern and Minimalist Designs",
        "Seasonal & Thematic Centerpieces",
      ],
      image: "/images/general/noivaansiosa.webp",
    },
    {
      id: "vinyl-floor-wrap",
      icon: <LampFloor className="w-8 h-8 text-primary" />,
      title: "Vinyl Floor Wraps",
      description:
        "At Elegantize Weddings, we believe every detail of your big day should reflect your unique style and love story. One of the most impactful ways to personalize your wedding venue is through wedding floor wrap decoration in New York. From elegant monograms to breathtaking designs, our vinyl floor wrap wedding services turn ordinary floors into extraordinary showcases of beauty and creativity.",
      features: [
        "Custom Designs Tailored to You",
        "High-Quality Materials",
        "Seamless Installation",
        "Personalized Vinyl Floor Wrap",
      ],
      image: "/images/general/il_1588xn.3666063238_qsa7.webp",
    },
    {
      id: "ceremony-decor",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Ceremony Decor",
      description:
        "At Elegantize Weddings, we specialize in creating breathtaking wedding ceremony decorations in New York and New Jersey that set the stage for your “I Do” moment. Whether you envision a grand celebration or a rustic, intimate affair, our designs reflect your unique love story, ensuring your ceremony is as unforgettable as the vows you exchange.",
      features: [
        "Personalized Aisle Designs",
        "Showstopping Arches & Altars",
        "Rustic Wedding Themes",
        "Cultural & Traditional Designs",
      ],
      image: "/images/portfolio/dsc02592.webp",
    },
    {
      id: "draping-services",
      icon: <ShirtIcon className="w-8 h-8 text-primary" />,
      title: "Draping Services",
      description:
        "At Elegantize Weddings, we specialize in crafting stunning wedding decor draping services in New York and New Jersey that add sophistication and charm to your special day. Draping décor has the power to transform any venue, creating a magical ambiance that enhances the beauty of your wedding ceremony or reception.",
      features: [
        "Elegant Ceiling Draping for Weddings",
        "Romantic Backdrops and Walls",
        "Wedding Reception Draping",
        "Custom Aisle and Ceremony Draping",
      ],
      image: "/images/general/4da02ecaa4ae7e295ff13ff1900ba116.webp",
    },
    {
      id: "mandap-design",
      icon: <Theater className="w-8 h-8 text-primary" />,
      title: "Mandap Design",
      description:
        "Celebrate love in style with the best mandap decoration that turns your wedding into a masterpiece. At Elegantize, we bring together tradition and modern elegance to create breathtaking setups that reflect your story. From vibrant floral themes to grand cultural settings, our expertise in Indian wedding decoration ensures every detail feels magical. For couples in the USA, we design mandaps that are not just beautiful but unforgettable.",
      features: [
        "Traditional Indian Mandap Designs",
        "Modern & Contemporary Mandap Decoration",
        "Luxury Destination Wedding Mandaps",
        // "Opulent & Emotional Décor",
      ],
      image: "/images/portfolio/dsc03995.webp",
    },
    {
      id: "stage-design",
      icon: <TheaterIcon className="w-8 h-8 text-primary" />,
      title: "Stage Design",
      description:
        "At Elegantize Wedding, we specialize in creating the most beautiful wedding stage decoration that reflects your style and vision. Our expert designers bring together creativity and elegance to craft stages that leave lasting impressions. From grand luxury setups to low cost wedding stage decoration options, we customize every detail to suit your budget. We focus on modern trends, personalized themes, and innovative designs that make your big day truly unforgettable. With us, your wedding stage becomes more than just décor – it becomes the centerpiece of your celebration in the USA.",
      features: [
        "Luxury Stage Designs for Unforgettable Weddings",
        "Affordable & Stylish Stage Decoration Options",
        "Personalized Themes & Customized Touches",
        // "Opulent & Emotional Décor",
      ],
      image: "/images/home/395791049.webp",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="pt-[60px] md:pt-[50px]">
      <SEO
        title="Our Services - Wedding Decor & Design"
        description="Explore our comprehensive wedding services including floral design, mandaps, event planning, and custom styling."
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async"
            src={getOptimizedImage("/images/gallery/dsc00073-2.webp", 1920)}
            alt="Luxury Wedding Setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
          >
            Capabilities & Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display mb-6"
          >
            DISCOVER OUR WEDDING DECORATION SERVICES IN NYC & NJ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Delve into our Decor Offerings & Elevate your Wedding Events to New
            Heights.
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8">
            Tailored to Perfection
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12">
            Elegantize offers a wide range of services to cater to your event
            decor needs. Whether you’re planning a wedding, corporate event, or
            private celebration, our team is here to bring your vision to life.
          </p>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#8ca18e] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                <div className="relative overflow-hidden aspect-[5/6] lg:aspect-[4/5]">
                  <img loading="lazy" decoding="async"
                    src={getOptimizedImage(service.image, 1200)}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="p-4 bg-white border border-stone-200 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-display text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="bg-white p-8 border border-stone-100 shadow-sm relative">
                  <h4 className="font-display text-lg mb-4 text-gray-800">
                    Services Include
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-left">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary uppercase text-xs font-bold tracking-widest hover:text-gray-900 transition-colors"
                  >
                    {service.title} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white text-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display mb-6">FAQs?</h2>
            <p className="text-gray-500  text-xl font-bold">
              Wedding Event Decor Related Questions
            </p>
            <p className="text-gray-500 font-light text-sm">
              We’re here to address all your wedding event decor inquiries and
              turn your vision into a stunning reality! Let’s connect and
              explore how Elegantize can transform your special occasion into an
              unforgettable experience.
            </p>
          </div>

          <div className="divide-y divide-stone-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-8">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left font-display text-xl md:text-2xl hover:text-[#8ca18e] transition-colors"
                >
                  <span className="pr-8">{faq.question}</span>
                  <span
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      transform:
                        activeAccordion === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <ChevronRight size={24} />
                  </span>
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 font-light text-gray-600 text-lg leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
    </div>
  );
};
