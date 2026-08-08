import { useState } from "react";
import { Heart, Send, PartyPopper } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const RSVPSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "0",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <section id="rsvp" className="bg-lavender-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-md rounded-3xl border border-lavender-200 bg-white p-10 shadow-lg">
            <PartyPopper className="mx-auto mb-4 h-12 w-12 text-lavender-400" />
            <h3 className="font-display text-3xl font-bold text-gray-800">
              You're In!
            </h3>
            <p className="mt-3 text-gray-500">
              We can't wait to celebrate with you. Get ready for an amazing day!
            </p>
            <p className="mt-2 text-lg font-bold text-lavender-500">
              We'll save you a seat! 🪑
            </p>
            <Heart className="mx-auto mt-4 h-8 w-8 animate-float fill-lavender-400 text-lavender-400" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-lavender-50 py-24">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Let us know you're coming!
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-gray-800 md:text-5xl">
            RSVP
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            We'd love to have you there. Fill this out so we know how many plates to stack!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg space-y-5 rounded-3xl border border-lavender-100 bg-white p-8 shadow-sm md:p-10"
        >
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Will you be attending? *
            </label>
            <div className="flex gap-3">
              {[
                { value: "yes", label: "Yes!", bg: "bg-lavender-50 border-lavender-400 text-lavender-600" },
                { value: "no", label: "Can't make it", bg: "bg-gray-50 border-gray-300 text-gray-600" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                    formData.attending === opt.value
                      ? opt.bg
                      : "border-gray-200 bg-white text-gray-400 hover:border-lavender-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={opt.value}
                    checked={formData.attending === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Number of Guests (including you)
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Dietary Requirements
            </label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="Vegetarian, allergies, etc."
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Leave a Message
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-lavender-200 px-4 py-3 text-sm outline-none transition-all focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100"
              placeholder="Any words for the happy couple?"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lavender-400 py-3.5 text-sm font-bold text-white shadow-lg shadow-lavender-200 transition-all hover:bg-lavender-500 hover:shadow-xl"
          >
            Send RSVP <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;
