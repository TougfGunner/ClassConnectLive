import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description:
      "We begin by understanding your story, style, and dreams. Through intimate conversations, we discover what makes your love unique and craft a vision that authentically reflects you both.",
  },
  {
    number: "02",
    title: "Design & Curation",
    description:
      "Every detail is thoughtfully curated—from venue selection to florals, styling to ambiance. We blend your vision with our expertise to create a cohesive aesthetic that feels effortlessly elegant.",
  },
  {
    number: "03",
    title: "Coordination & Execution",
    description:
      "With meticulous planning and seamless coordination, we bring your wedding to life. Our team manages every element with precision, allowing you to be fully present in each precious moment.",
  },
  {
    number: "04",
    title: "Celebration & Joy",
    description:
      "On your wedding day, we ensure everything unfolds beautifully. From the first moment to the last dance, we're there to create an unforgettable celebration filled with love, laughter, and memories.",
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Our Approach</p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ letterSpacing: '-0.02em' }}
            data-testid="text-process-heading"
          >
            The Journey to Your Perfect Day
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-20"
              data-testid={`card-process-${step.number}`}
            >
              <div className="absolute left-0 top-0 font-display text-6xl font-bold text-muted-foreground/20">
                {step.number}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">{step.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-block px-10 py-4 border-2 border-foreground text-foreground font-sans text-sm tracking-wide uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
            data-testid="button-explore-services"
          >
            Explore Our Services
          </motion.a>
        </div>
      </div>
    </section>
  );
}
