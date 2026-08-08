import { ChevronDown, Heart } from "lucide-react";
import { COUPLE_NAME_1, COUPLE_NAME_2, WEDDING_DATE_LABEL, WEDDING_LOCATION_LABEL } from "../../lib/wedding";
import heroImg from "../../assets/gallery/photo-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Stacee-Ann and Gerard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[10%] top-[15%] animate-float text-4xl opacity-30">💜</span>
        <span className="absolute right-[15%] top-[25%] animate-float text-3xl opacity-20" style={{ animationDelay: "1s" }}>✨</span>
        <span className="absolute left-[20%] bottom-[20%] animate-float text-3xl opacity-25" style={{ animationDelay: "2s" }}>💛</span>
        <span className="absolute right-[10%] bottom-[30%] animate-float text-2xl opacity-20" style={{ animationDelay: "0.5s" }}>💜</span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-lavender-500">
          We're getting married! 🎉
        </p>

        <h1 className="font-display text-5xl font-bold leading-tight text-gray-800 sm:text-7xl md:text-8xl">
          <span className="block">{COUPLE_NAME_1}</span>
          <span className="my-2 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold sm:w-20" />
            <Heart className="h-6 w-6 fill-gold text-gold sm:h-8 sm:w-8" />
            <span className="h-px w-12 bg-gold sm:w-20" />
          </span>
          <span className="block">{COUPLE_NAME_2}</span>
        </h1>

        <div className="mt-6 flex flex-col items-center gap-1 text-gray-600">
          <span className="font-display text-xl italic sm:text-2xl">{WEDDING_DATE_LABEL}</span>
          <span className="text-sm text-lavender-400">{WEDDING_LOCATION_LABEL}</span>
        </div>

        <p className="mt-4 max-w-lg text-base text-gray-500">
          We found our forever — and we'd love you to be there when we make it official 💍
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#rsvp"
            className="rounded-full bg-lavender-400 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-lavender-200 transition-all hover:bg-lavender-500 hover:shadow-xl hover:shadow-lavender-300"
          >
            RSVP Now 💌
          </a>
          <a
            href="#our-story"
            className="rounded-full border-2 border-gold bg-white/70 px-8 py-3 text-sm font-bold text-gold-dark transition-all hover:bg-gold-50"
          >
            Our Story ✨
          </a>
        </div>
      </div>

      <a
        href="#countdown"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-lavender-400" />
      </a>
    </section>
  );
};

export default HeroSection;
