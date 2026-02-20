import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const weddings = [
  {
    id: 1,
    names: "Proud & Jan",
    location: "Chiang Mai",
    image: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    photographer: "Vlasta",
  },
  {
    id: 2,
    names: "Jenny & Alex",
    location: "Krabi",
    image: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    photographer: "Dani Rodriguez",
  },
  {
    id: 3,
    names: "Parama Nam & Dong",
    location: "Phuket",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    photographer: "Nawaphon & Peduckk",
  },
  {
    id: 4,
    names: "Ashley & Michael",
    location: "Phuket",
    image: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    photographer: "Shane Sheperd",
  },
  {
    id: 5,
    names: "Melanie & Brian",
    location: "Phuket",
    image: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    photographer: "darinimages",
  },
  {
    id: 6,
    names: "Anisha & Naj",
    location: "Phuket",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    photographer: "Alice Mahran",
  },
];

export default function PortfolioSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 px-6 bg-muted/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Featured Works</p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ letterSpacing: '-0.02em' }}
            data-testid="text-portfolio-heading"
          >
            Celebrations That Inspire
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our portfolio where love meets artistry, creating timeless moments across breathtaking destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {weddings.map((wedding, index) => (
            <motion.div
              key={wedding.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              data-testid={`card-wedding-${wedding.id}`}
            >
              <div className="relative overflow-hidden rounded-sm mb-6 hover-elevate">
                <img
                  src={wedding.image}
                  alt={wedding.names}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  data-testid={`img-wedding-${wedding.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {wedding.location}
              </p>
              <h3 className="font-display text-2xl font-semibold mb-2" data-testid={`text-wedding-names-${wedding.id}`}>
                {wedding.names}
              </h3>
              <p className="text-sm text-muted-foreground">photo | {wedding.photographer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
