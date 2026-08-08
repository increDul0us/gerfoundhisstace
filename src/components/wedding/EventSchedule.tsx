import { MapPin, Clock } from "lucide-react";
import { CEREMONY, RECEPTION } from "../../lib/wedding";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const events = [
  {
    ...CEREMONY,
    icon: "💒",
    gradient: "from-lavender-50 to-white",
    border: "border-lavender-200",
  },
  {
    ...RECEPTION,
    icon: "🥂",
    gradient: "from-gold-50 to-white",
    border: "border-gold-200",
  },
];

const EventSchedule = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="the-day" className="py-24">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender-400">
            Saturday, 28 November 2026
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-gray-800 md:text-5xl">
            The Big Day 🎉
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            Here's what's going down. Come ready to celebrate!
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className={`rounded-3xl border ${event.border} bg-gradient-to-br ${event.gradient} p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="mb-4 text-4xl">{event.icon}</div>

              <h3 className="font-display text-2xl font-bold text-gray-800">
                {event.title}
              </h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-lavender-500">
                  <Clock className="h-4 w-4" />
                  <span className="font-semibold">{event.time}</span>
                </div>

                <p className="text-lg font-semibold text-gold-dark">
                  {event.venue}
                </p>

                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lavender-400" />
                  <span>{event.address}</span>
                </div>

                <p className="pt-2 text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
