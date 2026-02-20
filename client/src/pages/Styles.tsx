import { motion } from "framer-motion";

const styleCategories = [
  {
    title: "Tropical Paradise",
    description: "Lush greenery, vibrant florals, and beachside elegance",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    tags: ["Beach", "Tropical", "Colorful"]
  },
  {
    title: "Modern Minimalist",
    description: "Clean lines, neutral palettes, and contemporary sophistication",
    image: "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    tags: ["Modern", "Minimalist", "Elegant"]
  },
  {
    title: "Garden Romance",
    description: "Soft florals, natural beauty, and whimsical details",
    image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    tags: ["Garden", "Romantic", "Floral"]
  },
  {
    title: "Bohemian Luxe",
    description: "Eclectic textures, earthy tones, and free-spirited charm",
    image: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    tags: ["Boho", "Relaxed", "Natural"]
  },
  {
    title: "Classic Elegance",
    description: "Timeless design, refined details, and sophisticated glamour",
    image: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    tags: ["Classic", "Elegant", "Timeless"]
  },
  {
    title: "Cultural Fusion",
    description: "Traditional elements blended with contemporary style",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    tags: ["Cultural", "Unique", "Fusion"]
  }
];

const trendingColors = [
  { name: "Sage & Ivory", colors: ["#8FA88E", "#FAFAF5", "#D4C5B9"] },
  { name: "Terracotta Sunset", colors: ["#E07A5F", "#F4B860", "#F9EAE1"] },
  { name: "Dusty Blue & Mauve", colors: ["#9EADC8", "#C8A9B4", "#F5E6E8"] },
  { name: "Blush & Gold", colors: ["#ECC5C0", "#C9A15E", "#FEFAF6"] }
];

export default function Styles() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }} data-testid="text-styles-heading">
              Wedding Styles & Trends
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the latest trends in destination weddings, from color palettes to decor themes. 
              Find inspiration for your perfect celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Style Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
            Popular Wedding Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styleCategories.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                data-testid={`card-style-${index}`}
              >
                <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{style.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{style.description}</p>
                <div className="flex flex-wrap gap-2">
                  {style.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs uppercase tracking-wider bg-muted/50 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Color Palettes */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center" style={{ letterSpacing: '-0.02em' }}>
            Trending Color Palettes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingColors.map((palette, index) => (
              <motion.div
                key={palette.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                data-testid={`card-palette-${index}`}
              >
                <div className="flex h-32 rounded-sm overflow-hidden mb-4 shadow-md">
                  {palette.colors.map((color, i) => (
                    <div 
                      key={i}
                      className="flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold">{palette.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Ready to Design Your Dream Wedding?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our design team can help you create a cohesive, stunning aesthetic for your celebration.
            </p>
            <a 
              href="/moodboard" 
              className="inline-block px-10 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
              data-testid="button-moodboard"
            >
              Create Your Vision
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
