import { useEffect, useState } from "react";
import { WEDDING_DATE, WEDDING_DATE_LABEL } from "../../lib/wedding";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { ref, isVisible } = useScrollAnimation();

  function getTimeLeft() {
    const diff = WEDDING_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days, emoji: "📅" },
    { label: "Hours", value: timeLeft.hours, emoji: "⏰" },
    { label: "Minutes", value: timeLeft.minutes, emoji: "⏱️" },
    { label: "Seconds", value: timeLeft.seconds, emoji: "💫" },
  ];

  return (
    <section id="countdown" className="bg-lavender-50 py-20">
      <div
        ref={ref}
        className={`container mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Counting down to forever ✨
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-gray-800 md:text-4xl">
          {WEDDING_DATE_LABEL}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-500">
          We literally can't wait. Neither should you!
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="group rounded-3xl border border-lavender-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-lavender-100"
            >
              <span className="mb-2 block text-2xl">{unit.emoji}</span>
              <span className="block font-display text-4xl font-bold text-lavender-500 sm:text-5xl">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
