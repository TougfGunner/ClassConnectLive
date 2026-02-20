import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";

const destinations = [
  {
    id: "phuket",
    name: "Phuket",
    description: "Stunning beaches and lush landscapes where The Wedding Bliss Thailand began",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    path: "/destinations/phuket",
  },
  {
    id: "koh-samui",
    name: "Koh Samui",
    description: "Paradise island with serene beaches and vibrant tropical energy",
    image: "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg",
    path: "/destinations/koh-samui",
  },
  {
    id: "krabi",
    name: "Krabi",
    description: "Stunning limestone cliffs, emerald waters, and tranquil beaches",
    image: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    path: "/destinations/krabi",
  },
  {
    id: "chiang-mai",
    name: "Chiang Mai",
    description: "Mountain beauty with cultural richness and lush northern landscapes",
    image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    path: "/destinations/chiang-mai",
  },
  {
    id: "hua-hin",
    name: "Hua Hin",
    description: "Royal beach resort with elegant venues and sophisticated charm",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    path: "/destinations/hua-hin",
  },
  {
    id: "bangkok",
    name: "Bangkok",
    description: "Cosmopolitan energy with world-class venues and urban sophistication",
    image: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    path: "/destinations/bangkok",
  },
];

export default function Destinations() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
            data-testid="text-destinations-heading"
          >
            Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            From breathtaking beaches to mountain retreats, we specialize in Thailand's most iconic destinations and beyond
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link key={destination.id} href={destination.path}>
                <motion.a
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group block cursor-pointer"
                  data-testid={`card-destination-${destination.id}`}
                >
                  <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      data-testid={`img-destination-${destination.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2" data-testid={`text-destination-name-${destination.id}`}>
                    {destination.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {destination.description}
                  </p>
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
