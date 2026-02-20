import { motion } from "framer-motion";
import { Link } from "wouter";

const guides = [
  {
    title: "Ultimate Wedding Planning Timeline",
    description: "A comprehensive 12-month checklist for your destination wedding",
    image: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    link: "#"
  },
  {
    title: "Destination Wedding Budget Guide",
    description: "How to plan and allocate your wedding budget for maximum impact",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    link: "#"
  },
  {
    title: "Choosing Your Perfect Venue",
    description: "Expert tips for selecting the right location for your celebration",
    image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    link: "#"
  },
  {
    title: "Guest Management & Travel Tips",
    description: "Coordinating travel and accommodations for destination guests",
    image: "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    link: "#"
  },
  {
    title: "Legal Requirements by Country",
    description: "Marriage documentation and legal requirements for popular destinations",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    link: "#"
  },
  {
    title: "Weather & Seasonal Planning",
    description: "Best times to marry in top destination wedding locations",
    image: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    link: "#"
  }
];

export default function Plan() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }} data-testid="text-plan-heading">
              Wedding Planning Guides
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert advice and comprehensive guides to help you plan the perfect destination wedding.
              From budgeting to timelines, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                data-testid={`card-guide-${index}`}
              >
                <div className="relative overflow-hidden rounded-sm mb-4 hover-elevate">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/90 to-transparent">
                    <h3 className="font-display text-xl font-semibold text-background">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {guide.description}
                </p>
                <a 
                  href={guide.link} 
                  className="inline-block text-xs uppercase tracking-widest hover:text-foreground transition-colors"
                  data-testid={`link-guide-${index}`}
                >
                  Read Guide →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
              Need Personalized Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our planning team can handle every detail of your destination wedding, 
              from venue selection to day-of coordination.
            </p>
            <Link href="/services" className="inline-block px-10 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all" data-testid="button-services">
              Explore Planning Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
