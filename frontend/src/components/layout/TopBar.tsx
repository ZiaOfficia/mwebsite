import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-stone-950 text-primary border-b border-white/10 py-2 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-widest uppercase">
        <div className="flex items-center space-x-4">
          <a
            href="tel:+13476864562"
            className="flex items-center hover:text-white transition-colors"
          >
            <Phone size={18} className="mr-1" /> +1(347)686-4562
          </a>
          <div className="hidden md:flex items-center hover:text-white transition-colors">
            <MapPin size={18} className="mr-1" />
            <span className="hidden md:inline ">
              8 Di Tomas Ct, Copiague, NY, 11726
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/elegantizeevents/"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://in.pinterest.com/elegantizeevents/"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="shrink-0"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.246.957-.899 2.152-1.341 2.889.36.109.734.166 1.117.166 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/people/Elegantize-Productions/100083099336478/"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.youtube.com/@elegantize"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
