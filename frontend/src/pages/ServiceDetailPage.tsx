import { useParams, Link, Navigate } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import {
  ServiceAccordionNav,
  ServiceTestimonialCard,
  ServiceGalleryGrid,
  ServiceEnquiryForm,
} from "../components/services";
import { FAQSection } from "../components/sections/FAQSection";
import { Button } from "../components/common/Button";
import {
  Check,
  ArrowRight,
  Sparkles,
  Target,
  Palette,
  MapPin,
  Wrench,
  Star,
  ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { getOptimizedImage } from "../utils/imageUtils";

// Section IDs for accordion navigation
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "styles", label: "Styles" },
  { id: "process", label: "Process" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "testimonials", label: "Love Stories" },
  { id: "pricing", label: "Pricing Approach" },
  { id: "faq", label: "FAQs" },
  { id: "enquiry", label: "Inquiry" },
];

// Process step icons
const PROCESS_ICONS = [Target, Palette, Sparkles, MapPin, Wrench, Star];

export const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);
  const [activeSection, setActiveSection] = useState("overview");

  // Refs for scroll-to-section
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 120; // Account for sticky nav
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Filter related services
  const relatedServices = servicesData.filter((s) => s.id !== id).slice(0, 4);

  return (
    <div className="bg-white">
      <SEO
        title={`${service.title} - Wedding Services`}
        description={service.intro.description[0]}
        image={service.heroImage}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden z-0">
        <div className="absolute inset-0">
          <img loading="lazy" decoding="async"
            src={getOptimizedImage(service.heroImage, 1920)}
            alt={service.heroTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs uppercase tracking-widest font-medium mb-6 border border-white/20 rounded-full">
              {service.title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-6 leading-tight">
              {service.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto mb-8 italic">
              {service.intro.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("overview")}
              >
                Explore Service
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("enquiry")}
              >
                Get Quote
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Horizontal Enquiry Form */}
      <section className="py-6 px-4 md:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <ServiceEnquiryForm
            serviceName={service.title}
            variant="horizontal"
          />
        </div>
      </section>

      {/* Accordion Navigation */}
      <ServiceAccordionNav
        sections={SECTIONS}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Overview Section */}
      <section
        id="overview"
        ref={(el) => {
          sectionRefs.current["overview"] = el;
        }}
        className="py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Value Bullets */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-6">
                {service.intro.heading}
              </h2>
              <div className="space-y-4 mb-8">
                {service.whyChooseUs.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 font-light">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-gray-600 space-y-4 font-light leading-relaxed">
                {service.intro.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Right: Editorial Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 translate-x-6 translate-y-6 -z-10 rounded-xl" />
              <img loading="lazy" decoding="async"
                src={getOptimizedImage(
                  service.portfolioImages[0] || service.heroImage,
                  800,
                )}
                alt="Service Overview"
                className="w-full aspect-4/3 object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Weddings Gallery - Moved after Overview */}
      <section className="py-12 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
              Real Weddings Gallery
            </h2>
            <p className="text-gray-500 font-light">
              Moments we've had the honor of creating.
            </p>
          </div>
          <ServiceGalleryGrid images={service.portfolioImages} />
        </div>
      </section>

      {/* Styles Section */}
      <section
        id="styles"
        ref={(el) => {
          sectionRefs.current["styles"] = el;
        }}
        className="py-12 px-6 bg-stone-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
              {service.signatureServices.title}
            </h2>
            <div className="w-16 h-px bg-primary mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {service.signatureServices.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="w-full md:w-[45%] bg-white p-8 rounded-xl shadow-lg border border-stone-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <h3 className="text-xl font-display text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light mb-4">
                  {item.description}
                </p>
                {item.features && (
                  <ul className="space-y-2">
                    {item.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section
        id="process"
        ref={(el) => {
          sectionRefs.current["process"] = el;
        }}
        className="py-12 px-6 bg-stone-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              {service.process.title}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-light">
              {service.process.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {service.process.steps.map((step, idx) => {
              const Icon = PROCESS_ICONS[idx % PROCESS_ICONS.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="w-full md:w-[45%] lg:w-[30%] relative border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group rounded-xl p-8"
                >
                  {/* Step Number */}
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-display mb-3">{step.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horizontal Enquiry Form */}
      <section className="py-6 px-4 md:px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <ServiceEnquiryForm
            serviceName={service.title}
            variant="horizontal"
          />
        </div>
      </section>

      {/* Real Weddings / Why Elegantize / Testimonials */}
      <section
        id="why-us"
        ref={(el) => {
          sectionRefs.current["why-us"] = el;
        }}
        className="py-8 px-6"
      >
        <div className="max-w-7xl mx-auto mb-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
              {service.whyChooseUs.title}
            </h2>
            <div className="w-10 h-px bg-primary mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {service.whyChooseUs.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="w-full md:w-[45%] lg:w-[30%] bg-white p-8 rounded-xl shadow-sm border border-stone-100/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section
          id="testimonials"
          ref={(el) => {
            sectionRefs.current["testimonials"] = el;
          }}
          className="py-10 px-6 bg-stone-50"
        >
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-3">
                Love Stories
              </h2>
              <div className="w-16 h-px bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {service.testimonials.map((t, idx) => (
                <ServiceTestimonialCard
                  key={idx}
                  quote={t.quote}
                  author={t.author}
                  location={t.location}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Approach */}
      <section
        id="pricing"
        ref={(el) => {
          sectionRefs.current["pricing"] = el;
        }}
        className="py-8 md:py-8 px-6 bg-stone-50"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-8">
            Our Pricing Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-md border border-stone-100">
              <h3 className="text-xl font-display text-gray-900 mb-4">
                Transparent & Custom
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We believe that every wedding is unique, and so are the
                requirements. Instead of rigid packages, we build a custom
                proposal tailored to your specific needs, venue scale, and
                floral preferences. This ensures you only invest in what truly
                matters to your vision.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-stone-100">
              <h3 className="text-xl font-display text-gray-900 mb-4">
                What's Included
              </h3>
              <ul className="space-y-2">
                {[
                  "Detailed Design Consultation",
                  "Premium Material Sourcing",
                  "Full-Day Installation Team",
                  "Breakdown & Cleanup",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-600 font-light"
                  >
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Reused Component */}
      <div
        ref={(el) => {
          sectionRefs.current["faq"] = el;
        }}
      >
        <FAQSection />
      </div>

      {/* You May Also Love */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display text-gray-900 mb-8 text-center">
            You May Also Love
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedServices.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`} className="group block">
                <div className="aspect-4/5 overflow-hidden mb-3 bg-stone-200 rounded-lg relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                  <img loading="lazy" decoding="async"
                    src={getOptimizedImage(s.heroImage, 800)}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 text-white text-xs font-bold uppercase tracking-wider">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-primary transition-colors text-center">
                  {s.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + Enquiry Form */}
      <section
        id="enquiry"
        ref={(el) => {
          sectionRefs.current["enquiry"] = el;
        }}
        className="py-20 px-6 bg-stone-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display mb-4">
              Your event deserves more than decoration.
            </h2>
            <p className="text-xl text-primary font-display italic">
              It deserves design.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ServiceEnquiryForm serviceName={service.title} variant="full" />
        </div>
      </section>
    </div>
  );
};
