import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image?: string;
}

export const ServiceTestimonialCard = ({
  quote,
  author,
  location,
  image,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-stone-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    >
      {/* Decorative Quote */}
      <div className="absolute -top-2 -left-2 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote className="w-16 h-16" />
      </div>

      <div className="relative z-10">
        {/* Quote Text */}
        <p className="text-gray-600 italic text-base md:text-lg leading-relaxed mb-6">
          "{quote}"
        </p>

        {/* Author Section */}
        <div className="flex items-center gap-4">
          {image ? (
            <img loading="lazy" decoding="async"
              src={image}
              alt={author}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <span className="text-primary font-display text-lg">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-bold text-gray-900 text-sm md:text-base">
              {author}
            </p>
            <p className="text-xs md:text-sm text-primary uppercase tracking-wider">
              {location}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </motion.div>
  );
};
