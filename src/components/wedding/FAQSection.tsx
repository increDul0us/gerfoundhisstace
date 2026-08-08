import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const faqs = [
  {
    q: "What should I wear? 👗",
    a: "Smart casual — look good, feel comfortable! We'd love to see touches of lavender or gold if you're feeling it.",
  },
  {
    q: "Can I bring a plus one? 💑",
    a: "If your invitation says 'and guest', absolutely! If you're unsure, just reach out to us.",
  },
  {
    q: "Will there be food and drinks? 🍽️",
    a: "Oh yes. Dinner, drinks, cake — the works. Let us know about any dietary needs in your RSVP!",
  },
  {
    q: "Is there parking? 🚗",
    a: "Details coming soon! We'll share parking info and directions closer to the date.",
  },
  {
    q: "Can I take photos? 📸",
    a: "During the ceremony, we'd love for you to be present (unplugged ceremony). But at the reception? Snap away! Use #GerfoundhisStace so we can find them!",
  },
  {
    q: "What time should I arrive? ⏰",
    a: "Please arrive 15-20 minutes before the ceremony starts. Times will be confirmed closer to the date.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender-400">
            Got questions? We've got answers 🤔
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-gray-800 md:text-5xl">
            FAQ
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="overflow-hidden rounded-2xl border border-lavender-100 bg-white transition-shadow data-[state=open]:shadow-md data-[state=open]:shadow-lavender-100"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left font-display text-lg font-semibold text-gray-800 transition-colors hover:text-lavender-500 [&[data-state=open]>svg]:rotate-180">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-lavender-400 transition-transform duration-200" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-4 text-sm leading-relaxed text-gray-600">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
