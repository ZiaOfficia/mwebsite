import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: "/images/portfolio/whatsapp-image-2023-09-27-at-12.17.56.webp",
      quote:
        "If you're fortunate enough to have Elegantize as your event decor specialist, consider yourselves truly blessed. We highly endorse their services!",
      author: "Adrian & Kyle",
      link: "#",
    },
    // {
    //   image:
    //     "/images/gallery/dsc09950.webp",
    //   quote:
    //     "Elegantize transformed our venue into a fairytale. The attention to detail was simply unmatched. Truly a magical experience!",
    //   author: "Sarah & Mike",
    //   link: "#",
    // },
    {
      image: "/images/portfolio/kiranfritdjof-weddingphotos-1135.webp",
      quote:
        "Choosing Elegantize for our wedding decor was one of the best decisions we made. Their attention to detail and creative flair transformed our wedding venue in New York into a dream come true. Highly recommended!",
      author: "Devan & Ashish",
      link: "#",
    },
    {
      image: "/images/portfolio/dsc00122.webp",
      quote:
        "Elegantize Weddings exceeded all our expectations and brought our vision to life in the most spectacular way. From the initial consultation to the final touches in our wedding, Elegantize team's professionalism and expertise shone through. We couldn't be happier with the results!",
      author: "Judi & Chris",
      link: "#",
    },
    // {
    //   image:
    //     "/images/gallery/dsc00038.webp",
    //   quote:
    //     "From the initial consultation to the final reveal, the team at Elegantize exceeded all our expectations.",
    //   author: "Amanda & Robert",
    //   link: "#",
    // },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1, // Ensure opacity is 1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1, // Keep opacity 1 so it doesn't fade
    }),
  };

  return (
    <section className="bg-stone-50 pt-24">
      {/* Main Mid Heading */}
      <div className="text-center mb-12 px-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500 mb-3 block">
          Client Stories
        </span>
        <h2 className="text-4xl md:text-6xl font-display text-stone-900">
          Kind Words
        </h2>
      </div>

      {/* Split Content */}
      <div className="flex flex-col md:flex-row sm:min-h-[70vh] lg:flex-row min-h-[50vh] lg:max-h-[70vh] w-full overflow-hidden border-t border-stone-200">
        {/* LEFT COLUMN: IMAGE */}
        <div className="w-full md:w-1/2 relative min-h-[400px] bg-stone-200 overflow-hidden group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <img loading="lazy" decoding="async"
                src={slides[currentSlide].image}
                alt="Highlight"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: TEXT */}
        <div className="w-full md:w-1/2 bg-stone-200 flex flex-col justify-center p-8 md:p-20 relative">
          <div className="max-w-xl mx-auto w-full">
            <div className="relative">
              {/* Decorative Opening Quote Mark */}

              {/* Fixed Height Container to prevent jumping */}
              <div className="min-h-[330px] md:min-h-[280px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <h3 className="text-xl md:text-2xl font-light italic leading-relaxed text-stone-800 font-serif relative z-10">
                      <span className="text-4xl text-stone-900 mr-2 font-serif opacity-50 align-top">
                        &ldquo;
                      </span>
                      {slides[currentSlide].quote}
                      <span className="text-4xl text-stone-900 ml-2 font-serif opacity-50 align-top">
                        &rdquo;
                      </span>
                    </h3>

                    <div className="flex flex-col gap-2 border-l-2 mt-6 border-primary pl-6">
                      <p className="text-2xl font-display tracking-wide font-bold text-stone-900">
                        {slides[currentSlide].author}
                      </p>
                      <a
                        href={slides[currentSlide].link}
                        className="text-xs uppercase tracking-widest text-stone-500 hover:text-primary transition-colors font-medium flex items-center gap-2 group cursor-pointer"
                      >
                        View Gallery{" "}
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                          →
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Closing Quote Mark */}
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-4 mt-10 bg-stone-100/50 p-2 rounded-full w-max backdrop-blur-sm">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 text-stone-600 bg-white"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 text-stone-600 bg-white"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
