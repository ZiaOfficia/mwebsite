import { services } from "../../data/content";
import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

import { Link } from "react-router-dom";

export const ServicesGrid = () => {
  // IDs must match servicesData.ts exactly
  const SERVICE_IDS = [
    "floral-design",
    "ceiling-design",
    "centerpiece-design",
    "vinyl-floor-wrap",
    "ceremony-decor",
    "draping-services",
    "mandap-design",
    "stage-design",
  ];

  return (
    <motion.section
      id="services"
      className="py-24 px-6 bg-gradient-soft"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display text-gray-900"
          >
            Our Signature Wedding Decor Services
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-0.5 bg-primary mx-auto mt-6"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-600 max-w-2xl mx-auto"
          >
            We provide complete wedding décor and design services for
            ceremonies, receptions, and multi-day wedding celebrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const serviceId = SERVICE_IDS[index] || "";
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden cursor-pointer h-[28rem]"
              >
                <Link
                  to={`/services/${serviceId}`}
                  className="block w-full h-full"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <h4 className="font-display text-2xl mb-4">
                      {service.title}
                    </h4>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
