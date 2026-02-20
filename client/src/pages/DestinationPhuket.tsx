import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phuketWeddings = [
  {
    id: 1,
    names: "Lita & Calvin",
    image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    photographer: "Ha Nguyen",
  },
  {
    id: 2,
    names: "Artemis & Stephen",
    image: "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    photographer: "La Dichosa",
  },
  {
    id: 3,
    names: "Parama Nam & Dong",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    photographer: "Nawaphon & Peduckk",
    featured: true,
  },
  {
    id: 4,
    names: "Ashley & Michael",
    image: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    photographer: "Shane Sheperd",
    featured: true,
  },
  {
    id: 5,
    names: "Melanie & Brian",
    image: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    photographer: "darinimages",
    featured: true,
  },
  {
    id: 6,
    names: "Anisha & Naj",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    photographer: "Alice Mahran & ProudRad",
    featured: true,
  },
];

export default function DestinationPhuket() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg"
          alt="Phuket"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-background px-6"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }} data-testid="text-phuket-heading">
            Phuket Wedding Planner
          </h1>
          <p className="text-lg md:text-xl">Where The Wedding Bliss Thailand began</p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Phuket, with its stunning beaches and lush landscapes, is where The Wedding Bliss Thailand began, and it remains one of our favorite destinations for luxury weddings. Known for our world-class service and a commitment to crafting unforgettable events, we bring a touch of magic to each celebration in Phuket.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            From exclusive cliffside villas with sweeping ocean views to intimate garden ceremonies, every wedding we plan in Phuket is elegant, memorable, and unique. Our expertise goes beyond logistics; we create multi-sensory experiences that reflect your style, from chic florals and custom menus to mesmerizing entertainment and the perfect ambiance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-20" ref={ref}>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">Featured Phuket Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phuketWeddings.map((wedding, index) => (
              <motion.div
                key={wedding.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                data-testid={`card-phuket-wedding-${wedding.id}`}
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
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{wedding.names}</h3>
                <p className="text-sm text-muted-foreground">photo | {wedding.photographer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">Planning Your Phuket Wedding</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Weather</h3>
              <p className="text-muted-foreground">Phuket enjoys a tropical monsoon climate with warm temperatures year-round. The best weather for a wedding is during the dry season from November to May, where you can expect clear blue skies and sunshine.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Best Time of Year</h3>
              <p className="text-muted-foreground">For ideal wedding conditions, we recommend planning between November and March when temperatures are cooler and skies are clear. March to May can be quite warm but still offer sunny days, perfect for a beachside wedding.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Venue Options</h3>
              <p className="text-muted-foreground">Phuket boasts some of the world's most luxurious venues, from clifftop villas with panoramic sea views to serene beachfront resorts and trendy beach clubs. Whatever your vision, Phuket has a venue to match.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Accessibility</h3>
              <p className="text-muted-foreground">Phuket is easily accessible via its international airport, with direct flights from Europe, Asia, the Middle East, and Australia, making it convenient for you and your guests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
