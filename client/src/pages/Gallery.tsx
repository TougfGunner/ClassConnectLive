import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";
import { allWeddings as weddingsData } from "@shared/weddingData";

const allWeddings = weddingsData.map(w => ({
  id: w.id,
  names: w.names,
  location: w.location,
  category: w.category,
  image: w.coverImage,
  photographer: w.photographer,
  featured: w.featured,
  slug: w.slug
}));

const categories = ["All", "Phuket", "Koh Samui", "Krabi", "Chiang Mai", "Hua Hin", "Bangkok", "Khao Yai", "Overseas"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filteredWeddings = selectedCategory === "All" 
    ? allWeddings 
    : allWeddings.filter(w => w.category === selectedCategory);

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
            data-testid="text-gallery-heading"
          >
            Wedding Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Explore our portfolio of beautiful celebrations across breathtaking destinations
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6 border-b border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-xs uppercase tracking-widest rounded-sm transition-all ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-muted/30 text-muted-foreground hover-elevate"
                }`}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWeddings.map((wedding, index) => (
              <Link key={wedding.id} href={`/weddings/${wedding.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  data-testid={`card-gallery-wedding-${wedding.id}`}
                >
                  <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                    <img
                      src={wedding.image}
                      alt={wedding.names}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {wedding.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider rounded-sm">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-xs uppercase tracking-wider mb-1">{wedding.location}</p>
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{wedding.category}</p>
                  <h3 className="font-display text-2xl font-semibold mb-1 group-hover:text-muted-foreground transition-colors">{wedding.names}</h3>
                  <p className="text-sm text-muted-foreground">photo | {wedding.photographer}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
