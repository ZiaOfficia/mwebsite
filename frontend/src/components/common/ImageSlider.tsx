import { motion } from "framer-motion";
import { getOptimizedImage } from "../../utils/imageUtils";

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  // Ensure we have enough images for a smooth loop by duplicating.
  // 4 copies ensures it fills wide screens and allows seamless 25% shift.
  const displayImages = [...images, ...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden mb-6 bg-stone-100">
      <motion.div
        className="flex gap-4 py-4"
        animate={{
          x: ["0%", "-25%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Slower, smooth glide
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {displayImages.map((img, index) => (
          <div
            key={`${img}-${index}`}
            className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-md relative"
          >
            <img loading="lazy" decoding="async"
              src={getOptimizedImage(img, 600)}
              alt="Gallery"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
