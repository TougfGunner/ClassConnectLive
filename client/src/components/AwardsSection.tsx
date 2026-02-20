import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    number: "01",
    publication: "Vogue",
    description:
      "Featured for our innovative approach to luxury wedding design and impeccable attention to detail in creating unforgettable celebrations.",
  },
  {
    number: "02",
    publication: "Brides Magazine",
    description:
      "Recognized as leading destination wedding planners, showcasing our expertise in crafting romantic, elegantly designed ceremonies worldwide.",
  },
  {
    number: "03",
    publication: "Tatler",
    description:
      "Highlighted for our sophisticated aesthetic and ability to create bespoke experiences that blend tradition with modern luxury.",
  },
  {
    number: "04",
    publication: "Condé Nast Traveler",
    description:
      "Celebrated for our expertise in destination weddings across Asia's most breathtaking venues and hidden luxury locations.",
  },
];

export default function AwardsSection() {
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
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Industry Recognition</p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ letterSpacing: '-0.02em' }}
            data-testid="text-awards-heading"
          >
            Featured In
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {["Vogue", "Brides", "Tatler", "Condé Nast"].map((pub, index) => (
            <motion.div
              key={pub}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center py-8 border border-border/30 rounded-sm hover-elevate"
            >
              <p className="font-display text-xl font-semibold">{pub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative pl-16"
              data-testid={`card-feature-${feature.number}`}
            >
              <div className="absolute left-0 top-0 font-display text-5xl font-bold text-muted-foreground/20">
                {feature.number}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{feature.publication}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
