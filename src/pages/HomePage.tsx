import Navbar from "../components/wedding/Navbar";
import HeroSection from "../components/wedding/HeroSection";
import CountdownSection from "../components/wedding/CountdownSection";
import OurStorySection from "../components/wedding/OurStorySection";
import GalleryPreview from "../components/wedding/GalleryPreview";
import QuoteSection from "../components/wedding/QuoteSection";
import EventSchedule from "../components/wedding/EventSchedule";
import RSVPSection from "../components/wedding/RSVPSection";
import FAQSection from "../components/wedding/FAQSection";
import { COUPLE_NAME_1, COUPLE_NAME_2, HASHTAG, CONTACT_EMAIL, WEDDING_DATE_LABEL, WEDDING_LOCATION_LABEL } from "../lib/wedding";
import { Heart, Instagram } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <OurStorySection />
      <GalleryPreview />
      <QuoteSection />
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

          {/* Social placeholder */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-lavender-100 text-lavender-500 transition-all hover:bg-lavender-400 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Made with 💜 and a whole lot of love
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
