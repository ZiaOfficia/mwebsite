

const NewsletterSection = () => {
  return (
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy" decoding="async"
            src="/images/general/wedding-newsletter-signup-980x825.webp"
            alt="Newsletter BG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"/>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
          <h5 className="text-xs uppercase tracking-[0.2em] opacity-80 mb-6">
            Stay Inspired
          </h5>
          <h2 className="text-4xl md:text-5xl font-display mb-8">
            Join Our Newsletter
          </h2>
          <p className="text-lg font-light opacity-90 mb-10">
            Get exclusive access to our latest design concepts, wedding trends,
            and insider tips.
          </p>

          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 px-6 py-4 rounded-none focus:outline-none focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              className="bg-white text-stone-900 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#8ca18e] hover:text-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
  )
}

export default NewsletterSection