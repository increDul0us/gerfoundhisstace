import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SPOTIFY_TRACK_ID = "0SzvmWfOhoxZVGrmvb56YL";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [active, setActive] = useState(autoPlay);

  return (
    <>
      {/* Spotify embed — pushed off screen but still "visible" to the browser */}
      {active && (
        <div className="fixed -left-[9999px] top-0 h-[80px] w-[300px]" aria-hidden="true">
          <iframe
            src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&theme=0`}
            width="300"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
            title="Background music"
          />
        </div>
      )}

      {/* Small toggle */}
      <button
        onClick={() => setActive(!active)}
        className="fixed bottom-6 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lavender-500 shadow-md backdrop-blur-sm transition-all hover:bg-lavender-400 hover:text-white sm:right-6"
        aria-label={active ? "Mute music" : "Play music"}
      >
        {active ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
    </>
  );
};

export default MusicPlayer;
