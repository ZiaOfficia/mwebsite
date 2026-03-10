export const FeaturedInStrip = () => {
  return (
    <div className="bg-stone-950 border-t border-white/10 py-12">
      <p className="text-lg font-bold uppercase tracking-[0.3em] mb-8 text-center text-gray-300">
        Also Featured In
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 px-12 hover:grayscale-0 transition-all duration-700">
        <a
          href="https://www.maharaniweddings.com/2025-04-15/16630-hartford-ct-indian-wedding-by-juniper-domantay?fbclid=PAY2xjawJre85leHRuA2FlbQIxMQABp0DZ6VuDwJI8ulfXC6hmCpEyA6lycLDJEtklxSls-mr0qe2L5xnAjDQvyj3O_aem_XMyyfUDnYZjHn39PUVibmw"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <img loading="lazy" decoding="async"
            src="/images/general/maharani.webp"
            alt="Maharani Weddings"
            className="h-24 w-auto object-contain"
          />
        </a>
        <a
          href="https://wezoree.com/real-weddings/urban-euphoria-adriana-kyle-s-magical-moments-at-ravel-hotel-1701964352/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <img loading="lazy" decoding="async"
            src="/images/logos/logo_wezoree_black-01.webp"
            alt="Wezoree"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Vogue Weddings */}
        <img loading="lazy" decoding="async"
          src="/images/general/358054850_1645118269287715_7591891286819020443_n.webp"
          alt="Vogue Weddings"
          className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-80 hover:opacity-100"
        />

        {/* Elle Weddings */}
        <img loading="lazy" decoding="async"
          src="/images/general/326374167_520572563502506_3682989526405299889_n.webp"
          alt="Elle Weddings"
          className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-80 hover:opacity-100"
        />

        {/* Brides */}
        <img loading="lazy" decoding="async"
          src="/images/general/212027854_503914070828276_8392782795759379749_n.webp"
          alt="Brides"
          className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-80 hover:opacity-100"
        />

        {/* Carats & Cakes */}
        <img loading="lazy" decoding="async"
          src="/images/general/568631337_18538482400017750_8428615054160921167_n.webp"
          alt="Carats & Cakes"
          className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-80 hover:opacity-100"
        />

        {/* The Luxury Bride Magazine */}
        
          <img loading="lazy" decoding="async"
            src="/images/general/screenshot-2026-02-10-205318.webp"
            alt="The Luxury Bride Magazine"
            className="h-30 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
          />



        {/* Modern Luxury Weddings */}
        <img loading="lazy" decoding="async"
          src="/images/general/497509931_18507082408031379_9071343399086700481_n.webp"
          alt="Modern Luxury Weddings"
          className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 rounded-sm opacity-80 hover:opacity-100"
        />

        {/* Munaluchi Bride */}
        <img loading="lazy" decoding="async"
          src="/images/general/munaluchi_horizontal_black-web.webp"
          alt="Munaluchi Bride"
          className="h-14 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500"
        />
        {/* <span className="text-xl md:text-2xl font-serif italic text-white">
          WeddingWire
        </span> */}
      </div>
    </div>
  );
};
