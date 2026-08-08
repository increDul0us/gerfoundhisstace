import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import photo2 from "../../assets/gallery/photo-2.jpg";

const OurStorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="our-story" className="py-24">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender-400">
            How it all began 💜
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-gray-800 md:text-5xl">
            Our Story
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-md">
            <img
              src={photo2}
              alt="Stacee-Ann and Gerard"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-3 -right-3 rounded-2xl border-4 border-white bg-lavender-100 px-4 py-2 shadow-md">
              <span className="font-display text-lg font-semibold text-lavender-600">
                #GerfoundhisStace
              </span>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-lavender-100 bg-lavender-50/50 p-6">
              <p className="text-gray-600 leading-relaxed">
                From matching PJs to late-night soccer matches on TV and playful 
                arguments over the remote, we've shared the kind of moments that make life ours. 
                Through the ups and downs, the laughter and the challenges, we've grown 
                together, held on to each other, and found our way through it all.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-100 bg-gold-50/50 p-6">
              <p className="text-gray-600 leading-relaxed">
                What started as two people finding their way to each other has become 
                a journey filled with love, laughter, memories, and countless little 
                moments that we'll cherish forever.
              </p>
            </div>

            <div className="rounded-2xl border border-lavender-100 bg-lavender-50/50 p-6">
              <p className="text-gray-600 leading-relaxed text-lg font-display italic text-gray-700">
                And now, as we begin this next chapter, we know this is only the 
                beginning of our greatest adventure yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
