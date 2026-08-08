import { MapPin, Clock, Church, Wine } from "lucide-react";
import { CEREMONY, RECEPTION } from "../../lib/wedding";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const events = [
  {
    ...CEREMONY,
    icon: <Church className="h-6 w-6 text-lavender-500" />,
    gradient: "from-lavender-50 to-white",
    border: "border-lavender-200",
  },
  {
    ...RECEPTION,
    icon: <Wine className="h-6 w-6 text-gold" />,
    gradient: "from-gold-50 to-white",
    border: "border-gold-200",
  },
];

const EventSchedule = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="the-day" className="py-14 sm:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 sm:px-6 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-lavender-400 sm:text-sm sm:tracking-[0.2em]">
            Saturday, 28 November 2026
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-gray-800 sm:mt-3 sm:text-4xl md:text-5xl">
            The Big Day
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 sm:mt-3 sm:text-base">
            Here's what's going down. Come ready to celebrate!
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:gap-6 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className={`rounded-2xl border ${event.border} bg-gradient-to-br ${event.gradient} p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl sm:p-8`}
            >
              <div className="mb-3 sm:mb-4">{event.icon}</div>

              <h3 className="font-display text-xl font-bold text-gray-800 sm:text-2xl">
                {event.title}
              </h3>

              <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs text-lavender-500 sm:text-sm">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="font-semibold">{event.time}</span>
                </div>

                <p className="text-base font-semibold text-gold-dark sm:text-lg">
                  {event.venue}
                </p>

                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-500 transition-colors hover:text-lavender-500"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lavender-400" />
                  <span className="underline decoration-dotted underline-offset-2">{event.address}</span>
                </a>

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
