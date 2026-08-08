import { useState, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SPOTIFY_TRACK_ID = "0SzvmWfOhoxZVGrmvb56YL";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [playing, setPlaying] = useState(autoPlay);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMusic = useCallback(() => {
    if (playing) {
      // Remove iframe to stop music
      if (iframeRef.current) {
        iframeRef.current.src = "";
      }
      setPlaying(false);
    } else {
      // Load iframe with autoplay to start music
      if (iframeRef.current) {
        iframeRef.current.src = `https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`;
      }
      setPlaying(true);
    }
  }, [playing]);

  return (
    <>
      {/* Spotify embed - small visible player pinned at bottom */}
      <div className={`fixed bottom-20 right-4 z-50 w-[300px] overflow-hidden rounded-xl shadow-xl transition-all duration-300 sm:right-6 ${playing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <iframe
          ref={iframeRef}
          src={autoPlay ? `https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0` : ""}
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          title="Baby I'm Yours — Arctic Monkeys"
          className="rounded-xl"
        />
      </div>

      {/* Toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-lavender-400 text-white shadow-lg shadow-lavender-200 transition-all hover:bg-lavender-500 hover:shadow-xl sm:right-6"
        aria-label={playing ? "Hide music player" : "Show music player"}
      >
        {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
};

export default MusicPlayer;
