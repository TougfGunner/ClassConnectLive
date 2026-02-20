import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function VisualFeedSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          data-testid="text-feed-heading"
        >
          Visual
          <br />
          Feed
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video bg-muted rounded-md flex items-center justify-center"
          data-testid="container-visual-feed"
        >
          <p className="text-muted-foreground text-lg">Visual Feed Grid</p>
        </motion.div>
      </div>
    </section>
  );
}
