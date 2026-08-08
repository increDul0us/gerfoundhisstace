import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import photo1 from "../../assets/gallery/photo-1.jpg";
import photo2 from "../../assets/gallery/photo-2.jpg";
import photo3 from "../../assets/gallery/photo-3.jpg";
import photo4 from "../../assets/gallery/photo-4.jpg";
import photo5 from "../../assets/gallery/photo-5.jpg";
import photo6 from "../../assets/gallery/photo-6.jpg";
import photo7 from "../../assets/gallery/photo-7.jpg";
import photo8 from "../../assets/gallery/photo-8.jpg";
import photo9 from "../../assets/gallery/photo-9.jpg";

const photos = [
  { src: photo1, alt: "Stacee-Ann and Gerard together", span: "md:col-span-2 md:row-span-2" },
  { src: photo3, alt: "Matching PJs morning", span: "" },
  { src: photo6, alt: "Forever Converse", span: "" },
  { src: photo4, alt: "Getting ready together", span: "" },
  { src: photo5, alt: "Candid moment", span: "" },
  { src: photo2, alt: "Together", span: "md:col-span-2" },
  { src: photo7, alt: "Playful moment", span: "" },
  { src: photo8, alt: "Relaxing together", span: "" },
  { src: photo9, alt: "Fun times", span: "" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="gallery" className="bg-lavender-50 py-24">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Memories we love 📸
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-gray-800 md:text-5xl">
            Our Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            A few of our favourite moments together — the real ones, not the posed ones 😄
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-2xl ${photo.span}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
