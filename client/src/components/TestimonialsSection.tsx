import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Working with this team was transformative for our special day. From our first meeting to the final celebration, they brought stunning creativity and flawless execution. Our wedding was breathtakingly beautiful, perfectly orchestrated, and deeply personal. We couldn't be happier!",
    author: "Sarah & James",
    location: "Phuket Wedding",
  },
  {
    id: 2,
    text: "They completely elevated our wedding experience. From initial planning to the final moment, every detail was perfection. The team's attention to design and heartfelt service created a celebration that was elegant, meaningful, and unforgettable. Truly exceptional.",
    author: "Emma & Michael",
    location: "Krabi Celebration",
  },
  {
    id: 3,
    text: "Our destination wedding was everything we dreamed and more. The planning process was seamless, the design was stunning, and the day itself was magical. They understood our vision perfectly and brought it to life with such grace and professionalism.",
    author: "Olivia & David",
    location: "Chiang Mai Affair",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Kind Words</p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ letterSpacing: '-0.02em' }}
            data-testid="text-testimonials-heading"
          >
            What Our Couples Say
          </h2>
        </div>

        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center px-4"
              data-testid={`testimonial-${current}`}
            >
              <p className="font-script text-3xl md:text-4xl mb-8 text-foreground/80">
                "
              </p>
              <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
                {testimonials[current].text}
              </p>
              <p className="font-display text-xl font-semibold mb-1">
                {testimonials[current].author}
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prev}
            className="p-3 border border-foreground/20 rounded-sm hover-elevate active-elevate-2 transition-all"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-foreground w-8" : "bg-foreground/20"
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 border border-foreground/20 rounded-sm hover-elevate active-elevate-2 transition-all"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
