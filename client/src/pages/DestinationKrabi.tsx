import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const krabiWeddings = [
  { id: 1, names: "Jenny & Alex", image: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg", photographer: "Dani Rodriguez", featured: true },
  { id: 2, names: "Emily & Vishal", image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg", photographer: "Cassandra Ladru" },
  { id: 3, names: "Li & Paul", image: "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg", photographer: "Hipster Weddings Asia" },
  { id: 4, names: "Christina & William", image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg", photographer: "Tyler Rye" },
];

export default function DestinationKrabi() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src="/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg" alt="Krabi" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/60" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative text-center text-background px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }} data-testid="text-krabi-heading">Krabi Wedding Planner</h1>
          <p className="text-lg md:text-xl">Romantic and Intimate Beach Weddings</p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Krabi's stunning limestone cliffs, emerald waters, and tranquil beaches make it a top choice for couples seeking a secluded, romantic wedding destination. At The Wedding Bliss Thailand, we bring the natural beauty of Krabi to life through elegantly crafted celebrations that are both luxurious and intimate.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Whether you envision a private beachfront ceremony, a breathtaking clifftop reception, or a laid-back, tropical-inspired celebration, our team is here to create a day that feels like a beautiful extension of you. With extensive experience working in Krabi, we ensure each wedding is flawlessly executed.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-20" ref={ref}>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">Featured Krabi Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {krabiWeddings.map((wedding, index) => (
              <motion.div key={wedding.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="group" data-testid={`card-krabi-wedding-${wedding.id}`}>
                <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                  <img src={wedding.image} alt={wedding.names} className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                  {wedding.featured && <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider rounded-sm">Featured</div>}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{wedding.names}</h3>
                <p className="text-sm text-muted-foreground">photo | {wedding.photographer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">Planning Your Krabi Wedding</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Weather</h3>
              <p className="text-muted-foreground">Krabi's climate is warm year-round, with the dry season from November to March offering the best weather for outdoor weddings. During these months, Krabi's skies are clear, and the waters are calm.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Venue Options</h3>
              <p className="text-muted-foreground">Krabi offers some of Thailand's most serene and picturesque venues, from dreamy seafront resorts with lush green forests to stunning views of limestone cliffs and mysterious caves.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Activities</h3>
              <p className="text-muted-foreground">Krabi offers island-hopping to Phi Phi, Koh Poda, and Koh Hong, beautiful beaches, Railay Caves, Tiger Cave temple, and charming Krabi Town with its markets and local cuisine.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
