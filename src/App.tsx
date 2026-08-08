import Navbar from "./components/wedding/Navbar";
import HeroSection from "./components/wedding/HeroSection";
import CountdownSection from "./components/wedding/CountdownSection";
import OurStorySection from "./components/wedding/OurStorySection";
import GallerySection from "./components/wedding/GallerySection";
import EventSchedule from "./components/wedding/EventSchedule";
import RSVPSection from "./components/wedding/RSVPSection";
import FAQSection from "./components/wedding/FAQSection";
import { COUPLE_NAME_1, COUPLE_NAME_2, HASHTAG, CONTACT_EMAIL, WEDDING_DATE_LABEL, WEDDING_LOCATION_LABEL } from "./lib/wedding";
import { Heart } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <OurStorySection />
      <GallerySection />
      <EventSchedule />
      <RSVPSection />
      <FAQSection />

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
}

export default App;
