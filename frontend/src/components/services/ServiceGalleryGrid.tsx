import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { getOptimizedImage } from "../../utils/imageUtils";

interface ServiceGalleryGridProps {
  images: string[];
}

export const ServiceGalleryGrid = ({ images }: ServiceGalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.slice(0, 6).map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square cursor-pointer group overflow-hidden bg-stone-200 rounded-lg"
          >
            {/* Image */}
            <img loading="lazy" decoding="async"
              src={getOptimizedImage(img, 800)}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Animated Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 rounded-lg" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:text-primary transition-colors z-10">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
