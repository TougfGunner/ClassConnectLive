import { motion } from "framer-motion";
import { Link } from "wouter";
import { getFeaturedWeddings } from "@shared/weddingData";
import magazineCover from "@assets/Monochrome Couple Photography Wedding Megazine_1760047257760.png";

const featuredWeddingsData = getFeaturedWeddings();
const featuredWeddings = [
  {
    ...featuredWeddingsData.find(w => w.id === 8)!,
    category: "Cover Story",
  },
  {
    ...featuredWeddingsData.find(w => w.id === 10)!,
    category: "Featured",
  },
  {
    ...featuredWeddingsData.find(w => w.id === 1)!,
    category: "Featured",
  }
].map(w => ({
  id: w.id,
  names: w.names,
  location: w.location,
  category: w.category,
  image: w.coverImage,
  photographer: w.photographer,
  excerpt: w.excerpt,
  slug: w.slug
}));

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Magazine Cover Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Wedding Megazine 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              BALI BLISS
            </h1>
            <p className="text-sm tracking-wider text-muted-foreground uppercase mb-8">
              Vol. 1 | Issue Date: 1 February 2026
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <img 
                src={magazineCover} 
                alt="Bali Bliss Magazine Cover 2026" 
                className="w-full max-w-md mx-auto rounded-sm shadow-2xl"
                data-testid="img-magazine-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-muted-foreground">
                Curating the world's most beautiful destination weddings. 
                Submit your wedding to get featured today.
              </p>
              <p className="text-base leading-relaxed mb-10 text-muted-foreground/80">
                From the enchanting beaches of Bali to the lush mountains of Thailand, 
                we showcase extraordinary love stories from around the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/gallery" className="inline-block px-8 py-3 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-view-issue">
                  View This Issue
                </Link>
                <Link href="/submit" className="inline-block px-8 py-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-submit-wedding">
                  Submit Your Wedding
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured In This Issue */}
      <section className="py-20 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Featured In This Issue
            </motion.h2>
            <p className="text-base text-muted-foreground">
              Real weddings from Bali, Thailand, and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWeddings.map((wedding, index) => (
              <Link key={wedding.id} href={`/weddings/${wedding.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  data-testid={`card-featured-${wedding.id}`}
                >
                  <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                    <img
                      src={wedding.image}
                      alt={wedding.names}
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider rounded-sm">
                      {wedding.category}
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {wedding.location}
                  </p>
                  <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                    {wedding.names}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {wedding.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    photo | {wedding.photographer}
                  </p>
                  <span className="inline-block mt-4 text-xs uppercase tracking-widest hover:text-foreground transition-colors" data-testid={`link-read-more-${wedding.id}`}>
                    Read More →
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="inline-block px-8 py-3 border border-foreground/30 text-foreground font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-view-all">
              View All Weddings In This Issue
            </Link>
          </div>
        </div>
      </section>

      {/* Get Featured CTA */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Get Featured in Bali Bliss
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Submit your wedding to be featured in our next issue. 
              We curate the world's most stunning destination celebrations.
            </p>
            <Link href="/submit" className="inline-block px-10 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-submit-cta">
              Submit Your Wedding →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Planning Services Section */}
      <section className="py-20 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Planning Your Destination Wedding?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team specializes in luxury weddings across Bali, Thailand, and beyond. 
              Let us bring your dream celebration to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="inline-block px-8 py-3 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-services">
                Explore Planning Services
              </Link>
              <Link href="/moodboard" className="inline-block px-8 py-3 border border-foreground text-foreground font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-moodboard">
                Get Your Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
