import { Star, Crown, Palette, Gem, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const StatsCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Star;
  label: string;
  value: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center p-6 rounded-lg bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
        <Icon strokeWidth={1.5} size={32} className="text-primary" />
      </div>

      <h3 className="text-3xl font-display font-semibold text-gray-900 mb-2">
        {value}
      </h3>
      <p className="text-sm font-sans text-gray-600 uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: Star,
      value: "10+",
      label: "Years of Experience",
    },
    {
      icon: Crown,
      value: "500+",
      label: "Luxury Weddings",
    },
    {
      icon: Palette,
      value: "Custom",
      label: "Design & Build",
    },
    {
      icon: Gem,
      value: "Premium",
      label: "White-Glove Execution",
    },
    {
      icon: Landmark,
      value: "Trusted",
      label: "By Luxury Venues",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900">
            Excellence in Every Detail
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
