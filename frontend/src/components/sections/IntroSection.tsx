import { introContent } from "../../data/content";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";

export const IntroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 px-6 bg-grain-dark text-white relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-display leading-tight mb-8">
          {introContent.heading}
        </h1>
        {introContent.text.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg mb-6"
          >
            {paragraph}
          </p>
        ))}

        <div className="inline-block border border-primary/50 p-1 mt-6">
          <Button onClick={() => {navigate("/portfolio")}} className="px-8 py-3 w-full">View Our Work</Button>
        </div>
      </div>
    </section>
  );
};
