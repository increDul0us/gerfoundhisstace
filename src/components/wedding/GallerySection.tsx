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
import photo10 from "../../assets/gallery/photo-10.jpg";
import photo11 from "../../assets/gallery/photo-11.jpg";
import photo12 from "../../assets/gallery/photo-12.jpg";
import photo13 from "../../assets/gallery/photo-13.jpg";
import photo14 from "../../assets/gallery/photo-14.jpg";
import photo15 from "../../assets/gallery/photo-15.jpg";
import photo16 from "../../assets/gallery/photo-16.jpg";
import photo17 from "../../assets/gallery/photo-17.jpg";

const photos = [
  { src: photo10, alt: "Kiss in Arsenal kits", span: "md:col-span-2 md:row-span-2" },
  { src: photo11, alt: "Smiling with football", span: "" },
  { src: photo6, alt: "Forever Converse", span: "" },
  { src: photo12, alt: "Foreheads together on the pitch", span: "" },
  { src: photo13, alt: "Sitting together with football", span: "" },
  { src: photo15, alt: "Back to back on the pitch", span: "md:col-span-2" },
  { src: photo3, alt: "Matching PJs morning", span: "" },
  { src: photo16, alt: "Pillow fight", span: "" },
  { src: photo17, alt: "Pillow fight action", span: "" },
  { src: photo1, alt: "Together", span: "" },
  { src: photo14, alt: "Kiss in jerseys", span: "md:col-span-2" },
  { src: photo4, alt: "Getting ready together", span: "" },
  { src: photo5, alt: "Candid moment", span: "" },
  { src: photo2, alt: "Couple portrait", span: "" },
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
