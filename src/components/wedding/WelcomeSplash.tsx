import { Heart } from "lucide-react";
import { COUPLE_NAME_1, COUPLE_NAME_2, WEDDING_DATE_LABEL } from "../../lib/wedding";
import heroImg from "../../assets/gallery/photo-hero.jpg";

interface WelcomeSplashProps {
  onEnter: () => void;
}

const WelcomeSplash = ({ onEnter }: WelcomeSplashProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="animate-fade-in rounded-3xl border border-white/20 bg-white/10 px-8 py-12 backdrop-blur-md sm:px-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">
            You're invited to celebrate
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            <span className="block">{COUPLE_NAME_1}</span>
            <span className="my-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold-300 sm:w-14" />
              <Heart className="h-5 w-5 animate-float fill-gold-300 text-gold-300" />
              <span className="h-px w-8 bg-gold-300 sm:w-14" />
            </span>
            <span className="block">{COUPLE_NAME_2}</span>
          </h1>

          <p className="mt-4 font-display text-lg italic text-white/80">
            {WEDDING_DATE_LABEL}
          </p>

          <button
            onClick={onEnter}
            className="mt-10 rounded-full bg-lavender-400 px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-xl shadow-lavender-500/30 transition-all hover:bg-lavender-500 hover:shadow-2xl hover:shadow-lavender-500/40 active:scale-95"
          >
            Celebrate With Us 🎉
          </button>

          <p className="mt-4 text-xs text-white/40">
            🔊 Turn your sound on
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSplash;
