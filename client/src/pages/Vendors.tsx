import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All", "Venues", "Photographers", "Videographers", "Florists", 
  "Planners", "Caterers", "Musicians", "Hair & Makeup"
];

const vendors = [
  {
    name: "Vlasta Photography",
    category: "Photographers",
    location: "Worldwide",
    description: "Editorial-style wedding photography with an artistic eye",
    image: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    featured: true
  },
  {
    name: "Dani Rodriguez Photography",
    category: "Photographers",
    location: "Krabi, Thailand",
    description: "Beach wedding specialists capturing authentic moments",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    featured: true
  },
  {
    name: "The Bliss Weddings",
    category: "Planners",
    location: "Bali & Thailand",
    description: "Luxury destination wedding planning across Asia",
    image: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    featured: true
  },
  {
    name: "Jose Villa Photography",
    category: "Photographers",
    location: "Worldwide",
    description: "Fine art wedding photography with timeless elegance",
    image: "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg"
  },
  {
    name: "Four Seasons Resort",
    category: "Venues",
    location: "Chiang Mai",
    description: "Luxury mountain resort with stunning valley views",
    image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg"
  },
  {
    name: "Tropical Blooms",
    category: "Florists",
    location: "Bali & Phuket",
    description: "Exotic floral design for tropical destination weddings",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg"
  }
];

export default function Vendors() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVendors = selectedCategory === "All"
    ? vendors
    : vendors.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }} data-testid="text-vendors-heading">
              Vendor Directory
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover and connect with the world's finest wedding professionals. 
              Curated vendors trusted by Bali Bliss.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
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

      {/* Vendors Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.map((vendor, index) => (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                data-testid={`card-vendor-${index}`}
              >
                <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {vendor.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider rounded-sm">
                      Featured
                    </div>
                  )}
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {vendor.category} • {vendor.location}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-2">{vendor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {vendor.description}
                </p>
                <a 
                  href="#" 
                  className="inline-block text-xs uppercase tracking-widest hover:text-foreground transition-colors"
                  data-testid={`link-vendor-${index}`}
                >
                  View Profile →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Vendor CTA */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Are You a Wedding Professional?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our curated directory and connect with luxury wedding clients worldwide.
            </p>
            <a 
              href="/advertise" 
              className="inline-block px-10 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
              data-testid="button-advertise"
            >
              Become a Featured Vendor
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
