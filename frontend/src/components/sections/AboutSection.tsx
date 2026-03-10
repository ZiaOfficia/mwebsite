import { aboutContent } from "../../data/content";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row items-center relative">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-3/5 z-10 md:pr-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className="bg-white p-8 md:p-16 shadow-xl border-l-4 border-[#8ca18e]">
            <motion.span
              variants={itemVariants}
              className="text-[#8ca18e] text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display text-stone-900 mb-8 leading-tight"
            >
              {aboutContent.heading}
            </motion.h2>

            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              {aboutContent.text.map((paragraph, index) => (
                <motion.p key={index} variants={itemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#8ca18e]" />
              <div>
                <p className="font-display text-2xl text-stone-800">
                  {aboutContent.author.split("–")[0].trim()}
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {aboutContent.author.split("–")[1]?.trim() || "Founder"}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Abstract Image Composition */}
        <motion.div
          className="w-full md:w-1/2 absolute top-0 right-0 h-full hidden md:block z-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full bg-stone-100 absolute inset-0 -z-10 transform translate-x-12 translate-y-12" />
          <img loading="lazy" decoding="async"
            alt="About Elegantize"
            className="w-full h-full object-cover grayscale-20 opacity-90"
            src="/images/general/raza-weding-decor-specialist-1.webp"
          />
        </motion.div>
        {/* Mobile Image Fallback */}
        <div className="w-full md:hidden mt-8">
          <img loading="lazy" decoding="async"
            alt="About Elegantize"
            className="w-full h-100 object-cover grayscale-20"
            src="/images/general/raza-weding-decor-specialist-1-1.webp"
          />
        </div>
      </div>
    </section>
  );
};
