import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <img
            src="/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg"
            alt="Wedding"
            className="w-full max-w-2xl mx-auto h-96 object-cover rounded-sm mb-12 shadow-lg"
            data-testid="img-hero"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          style={{ letterSpacing: '-0.02em' }}
          data-testid="text-hero-headline"
        >
          LUXURY WEDDING PLANNER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm md:text-base tracking-widest uppercase mb-8 text-muted-foreground"
          data-testid="text-hero-tagline"
        >
          Memory of a Lifetime. Refinement and Elegance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-foreground/90"
          data-testid="text-hero-description"
        >
          Where every wedding is a one-of-a-kind masterpiece crafted with elegance, grace, and world-class hospitality. We transform your vision into an unforgettable experience set against breathtaking backdrops, creating celebrations filled with effortless sophistication and joy.
        </motion.p>

        <motion.a
          href="mailto:hello@baliblissweddings.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block px-10 py-4 bg-foreground text-background font-sans text-sm tracking-wide uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
          data-testid="button-contact"
        >
          Start Planning
        </motion.a>
      </motion.div>
    </section>
  );
}
