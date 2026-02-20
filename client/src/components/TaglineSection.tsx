import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TaglineSection() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="py-40 px-6 bg-gradient-to-b from-background via-muted/10 to-background" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          style={{ letterSpacing: '-0.02em' }}
          data-testid="text-tagline"
        >
          Creating magic through
          <br />
          timeless elegance and
          <br />
          heartfelt attention to detail
        </h2>
      </motion.div>
    </section>
  );
}
