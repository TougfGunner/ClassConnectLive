import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MissionSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
          style={{ letterSpacing: '-0.02em' }}
          data-testid="text-mission-heading"
        >
          Where Dreams Meet Design
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-muted-foreground text-base mb-20 max-w-3xl mx-auto leading-relaxed"
          data-testid="text-mission-subtitle"
        >
          Simplicity through impeccable taste and thoughtful curation
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Our Philosophy
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you envision a serene beachfront ceremony, an intimate garden affair, or a grand soirée under starlit skies, we blend your unique story with timeless haute-couture aesthetic for a truly memorable celebration.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Working with the world's finest professionals, creatives, and luxury specialists, we ensure that every detail reflects the perfectly crafted narrative you envision. Known for our impeccable taste, attention to detail, and strong focus on design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-testid="img-mission"
          >
            <img
              src="/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg"
              alt="Wedding celebration"
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-20"
        >
          <p className="font-script text-3xl md:text-4xl text-foreground/80">
            Decades of mastery and a finely tuned process
          </p>
        </motion.div>
      </div>
    </section>
  );
}
