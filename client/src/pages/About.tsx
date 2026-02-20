import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ letterSpacing: '-0.02em' }}
            data-testid="text-about-heading"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Creating unforgettable celebrations since 2011
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg"
                alt="Wedding celebration"
                className="w-full h-auto rounded-sm shadow-lg"
                data-testid="img-about-hero"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Our Story
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Founded in 2011 by sisters Nanya and Jess Tantapaiboon, The Wedding Bliss Thailand has grown to become one of Southeast Asia's premier luxury destination wedding planners. Based in Phuket, we've crafted over 500 unforgettable celebrations across Thailand and beyond.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our philosophy is simple: each wedding should be a deeply personal and joyful reflection of the couple. We transform your vision into an unforgettable experience by blending impeccable taste, attention to detail, and strong design focus with world-class Thai hospitality.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Featured in Vogue, Brides Magazine, Style Me Pretty, Town & Country, and Over the Moon, we're recognized globally for our innovative approach and unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-8 border border-border/30 rounded-sm"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Jess Tantapaiboon</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Executive Director</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                With a background in Communication Arts and an MBA in Global Marketing, Jess brings sophisticated business acumen and international experience from her time in New York working with luxury brands like La Mer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center p-8 border border-border/30 rounded-sm"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Nanya Tantapaiboon</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Creative Director</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                With a background in Fine and Applied Arts, Nanya brings unparalleled creative vision and artistic expertise to every wedding, crafting celebrations that are as beautiful as they are meaningful.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-sans font-semibold mb-2">Established Expertise</h4>
                <p className="text-sm text-muted-foreground">Over 500+ weddings since 2011</p>
              </div>
              <div>
                <h4 className="font-sans font-semibold mb-2">International Acclaim</h4>
                <p className="text-sm text-muted-foreground">Featured in global wedding media</p>
              </div>
              <div>
                <h4 className="font-sans font-semibold mb-2">Industry Trendsetter</h4>
                <p className="text-sm text-muted-foreground">Known for innovation and creativity</p>
              </div>
              <div>
                <h4 className="font-sans font-semibold mb-2">Global Network</h4>
                <p className="text-sm text-muted-foreground">Top-tier vendor connections worldwide</p>
              </div>
              <div>
                <h4 className="font-sans font-semibold mb-2">Personal Approach</h4>
                <p className="text-sm text-muted-foreground">Many past clients become friends</p>
              </div>
              <div>
                <h4 className="font-sans font-semibold mb-2">5-Star Service</h4>
                <p className="text-sm text-muted-foreground">Meeting highest global standards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
