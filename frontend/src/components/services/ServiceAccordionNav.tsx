import { motion } from "framer-motion";

interface AccordionNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export const ServiceAccordionNav = ({
  sections,
  activeSection,
  onSectionClick,
}: AccordionNavProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-20 left-0 w-full bg-white border-b border-stone-200 z-40 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide py-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 border-b-2 ${
                activeSection === section.id
                  ? "text-primary border-primary bg-primary/5"
                  : "text-gray-600 border-transparent hover:text-primary hover:border-primary/30"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
