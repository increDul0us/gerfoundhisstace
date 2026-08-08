import { ChevronDown, Heart } from "lucide-react";
import { COUPLE_NAME_1, COUPLE_NAME_2, WEDDING_DATE_LABEL, WEDDING_LOCATION_LABEL } from "../../lib/wedding";
import heroImg from "../../assets/gallery/photo-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image — full vivid, minimal overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Stacee-Ann and Gerard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[10%] top-[15%] animate-float text-4xl opacity-20">💜</span>
        <span className="absolute right-[15%] top-[25%] animate-float text-3xl opacity-15" style={{ animationDelay: "1s" }}>✨</span>
        <span className="absolute left-[20%] bottom-[20%] animate-float text-3xl opacity-20" style={{ animationDelay: "2s" }}>💛</span>
      </div>

      {/* Glass card content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/20 bg-white/15 px-6 py-10 shadow-2xl backdrop-blur-md sm:px-10 sm:py-14 md:px-14 md:py-16">
          <div className="text-center">
            <p className="mb-5 font-body text-sm font-bold uppercase tracking-[0.25em] text-gold-200">
              We're getting married! 🎉
            </p>

            <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
              <span className="block">{COUPLE_NAME_1}</span>
              <span className="my-3 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold-300 sm:w-16" />
                <Heart className="h-5 w-5 fill-gold-300 text-gold-300 sm:h-6 sm:w-6" />
                <span className="h-px w-10 bg-gold-300 sm:w-16" />
              </span>
              <span className="block">{COUPLE_NAME_2}</span>
            </h1>

            <div className="mt-5 flex flex-col items-center gap-1">
              <span className="font-display text-lg italic text-white/90 sm:text-xl">{WEDDING_DATE_LABEL}</span>
              <span className="text-sm text-lavender-200">{WEDDING_LOCATION_LABEL}</span>
            </div>

            <p className="mt-4 text-sm text-white/80 sm:text-base">
              We found our forever — and we'd love you to be there when we make it official 💍
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#rsvp"
                className="animate-pulse-glow rounded-full bg-lavender-400 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-lavender-500/30 transition-all hover:bg-lavender-500 hover:shadow-xl hover:shadow-lavender-500/40 sm:px-10 sm:py-3.5"
              >
                RSVP Now 💌
              </a>
              <a
                href="#our-story"
                className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10"
              >
                Our Story ✨
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#countdown"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </a>
    </section>
  );
};

export default HeroSection;
