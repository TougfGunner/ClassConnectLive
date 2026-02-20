import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const samuiWeddings = [
  { id: 1, names: "Cheeny & Michael", image: "/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg", photographer: "ProudRad" },
  { id: 2, names: "Miranda & Fei", image: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg", photographer: "Ammata's Eyes" },
  { id: 3, names: "Janie & Mikey", image: "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg", photographer: "Alen Karupovic" },
  { id: 4, names: "Emily & Vanya", image: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg", photographer: "Hipster Wedding Asia" },
  { id: 5, names: "Cassandra & Jeffree", image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg", photographer: "ProudRad" },
  { id: 6, names: "Maggie & Yueyang", image: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg", photographer: "Erich Mcvey" },
];

export default function DestinationKohSamui() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src="/attached_assets/stock_images/tropical_beach_weddi_7880adcb.jpg" alt="Koh Samui" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/60" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative text-center text-background px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }} data-testid="text-koh-samui-heading">Koh Samui Wedding Planner</h1>
          <p className="text-lg md:text-xl">Breathtaking Weddings in Paradise</p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
            Koh Samui is a paradise island, known for its serene beaches, lush tropical jungles, and vibrant energy. Our first wedding in Samui was a five-day celebration that incorporated traditions from Indian, Vietnamese and European cultures, setting the tone for the stunning, multi-sensory experiences we continue to create on the island.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            We specialize in creating sophisticated weddings in Koh Samui that blend luxurious elegance with the island's natural charm. From chic beachfront ceremonies to stylish villa celebrations, we ensure that every detail reflects the essence of this beautiful island and your personal style.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-20" ref={ref}>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12">Featured Koh Samui Weddings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samuiWeddings.map((wedding, index) => (
              <motion.div key={wedding.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="group" data-testid={`card-samui-wedding-${wedding.id}`}>
                <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                  <img src={wedding.image} alt={wedding.names} className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{wedding.names}</h3>
                <p className="text-sm text-muted-foreground">photo | {wedding.photographer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">Planning Your Koh Samui Wedding</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Weather</h3>
              <p className="text-muted-foreground">Koh Samui experiences two main seasons: a dry season from February to May and a green season with light, refreshing rains from September to December. February is particularly beautiful, with comfortable temperatures and clear skies.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Best Time of Year</h3>
              <p className="text-muted-foreground">For a Koh Samui wedding, we recommend February to April when the weather is at its best. February offers a cool breeze and lower chances of rain – ideal for outdoor celebrations.</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg mb-2">Venue Options</h3>
              <p className="text-muted-foreground">From cliffside villas to beachfront resorts with sprawling lawns and lush tropical gardens, Koh Samui offers breathtaking views of the Gulf of Thailand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
