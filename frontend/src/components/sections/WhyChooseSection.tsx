import { whyChooseContent } from "../../data/content";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const WhyChooseSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 bg-texture-gold text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-4xl md:text-5xl font-display mb-12 text-center"
        >
          {whyChooseContent.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest border-b border-white/20 pb-4">
              Our Promise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-icons-outlined mr-3 text-white/80">
                  check_circle
                </span>
                <span>{whyChooseContent.description}</span>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined mr-3 text-white/80">
                  check_circle
                </span>
                <span>{whyChooseContent.footer}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <h3 className="text-xl font-bold uppercase tracking-widest border-b border-white/20 pb-4 mb-6">
              Key Highlights
            </h3>
            <ul className="space-y-4 text-sm md:text-base opacity-90">
              {whyChooseContent.points.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="block min-w-2 w-2 h-2 rounded-full bg-white mt-2 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
