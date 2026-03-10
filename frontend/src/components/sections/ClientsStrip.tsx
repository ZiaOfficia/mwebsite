export const ClientsStrip = () => {
  return (
    <section className="py-12 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-md uppercase tracking-[0.2em] text-gray-100 mb-8">
          Clients Worked With
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-nowrap overflow-x-auto">
          <img loading="lazy" decoding="async"
            src="/images/misc/frame-300x150.webp"
            alt="Client 1"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <img loading="lazy" decoding="async"
            src="/images/misc/frame2-300x150.webp"
            alt="Client 2"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <img loading="lazy" decoding="async"
            src="/images/misc/frame3-300x150.webp"
            alt="Client 3"
            className="h-10 md:h-16 w-auto object-contain"
          />
          <img loading="lazy" decoding="async"
            src="/images/misc/frame4-300x150.webp"
            alt="Client 4"
            className="h-10 md:h-16 w-auto object-contain"
          />
          <img loading="lazy" decoding="async"
            src="/images/misc/frame5-300x150.webp"
            alt="Client 5"
            className="h-10 md:h-16 w-auto object-contain"
          />
          <img loading="lazy" decoding="async"
            src="/images/misc/frame6-300x150.webp"
            alt="Client 6"
            className="h-10 md:h-16 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
