import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Navbar from "../components/wedding/Navbar";
import HeroSection from "../components/wedding/HeroSection";
import CountdownSection from "../components/wedding/CountdownSection";
import OurStorySection from "../components/wedding/OurStorySection";
import OurSongSection from "../components/wedding/OurSongSection";
import GalleryPreview from "../components/wedding/GalleryPreview";
import QuoteSection from "../components/wedding/QuoteSection";
import EventSchedule from "../components/wedding/EventSchedule";
import RSVPSection from "../components/wedding/RSVPSection";
import FAQSection from "../components/wedding/FAQSection";
import WelcomeSplash from "../components/wedding/WelcomeSplash";
import { COUPLE_NAME_1, COUPLE_NAME_2, HASHTAG, CONTACT_EMAIL, WEDDING_DATE_LABEL, WEDDING_LOCATION_LABEL } from "../lib/wedding";
import { Heart } from "lucide-react";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/track/0SzvmWfOhoxZVGrmvb56YL?utm_source=generator&theme=0";

const HomePage = () => {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleEnter = () => {
    setEntered(true);
  };

  // Try to auto-play the Spotify embed after entering
  useEffect(() => {
    if (entered && iframeRef.current) {
      // Spotify embed auto-plays when loaded with autoplay param after user interaction
      iframeRef.current.src = SPOTIFY_EMBED_URL + "&autoplay=1";
    }
  }, [entered]);

  if (!entered) {
    return <WelcomeSplash onEnter={handleEnter} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <OurStorySection />
      <OurSongSection />
      <GalleryPreview />
      <QuoteSection />
      <EventSchedule />
      <RSVPSection />
      <FAQSection />

      {/* Hidden Spotify player for background music */}
      <iframe
        ref={iframeRef}
        src={SPOTIFY_EMBED_URL}
        width="0"
        height="0"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media"
        className="fixed bottom-0 left-0 h-0 w-0 opacity-0"
        title="Background music"
      />

      {/* Music toggle button */}
      <button
        onClick={() => {
          setMuted(!muted);
          if (iframeRef.current) {
            iframeRef.current.style.display = muted ? "" : "none";
            // Reload to stop/start
            if (!muted) {
              iframeRef.current.src = "";
            } else {
              iframeRef.current.src = SPOTIFY_EMBED_URL + "&autoplay=1";
            }
          }
        }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-lavender-400 text-white shadow-lg shadow-lavender-200 transition-all hover:bg-lavender-500 hover:shadow-xl"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>

      {/* Footer */}
      <footer className="border-t border-lavender-100 bg-white py-12 text-center">
        <div className="container mx-auto px-6">
          <p className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-gray-800">
            {COUPLE_NAME_1} <Heart className="h-5 w-5 fill-lavender-400 text-lavender-400" /> {COUPLE_NAME_2}
          </p>
          <p className="mt-2 text-sm font-semibold text-gold">{HASHTAG}</p>
          <p className="mt-1 text-sm text-gray-400">
            {WEDDING_DATE_LABEL} · {WEDDING_LOCATION_LABEL}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-block text-sm text-lavender-400 transition-colors hover:text-lavender-600"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-xs text-gray-300">
            Made with 💜 and a whole lot of love
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
