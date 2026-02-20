import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    number: "01",
    title: "Complete Wedding Planning",
    description: "From first consultation to last dance, we handle every aspect of your celebration. Our comprehensive service includes venue selection, vendor management, design concepts, timeline creation, budget management, and day-of coordination for a seamless, stress-free experience.",
  },
  {
    number: "02",
    title: "Event Design & Styling",
    description: "We create custom concepts that reflect your unique love story. Our design team crafts cohesive aesthetics through floral design, custom structures, lighting, furniture selection, and tabletop curation – all aligned with your vision and personality.",
  },
  {
    number: "03",
    title: "Production Management",
    description: "Our expert team manages all technical aspects including floor plans, event layouts, structure setup, logistics coordination, and installation oversight. We ensure every element is perfectly executed and positioned for maximum impact.",
  },
  {
    number: "04",
    title: "Destination Wedding Coordination",
    description: "Specializing in Thailand's most iconic locations and international destinations, we navigate local regulations, arrange guest accommodations, coordinate travel logistics, and create multi-day celebration itineraries that showcase the best of your chosen destination.",
  },
  {
    number: "05",
    title: "Vendor Management & Curation",
    description: "Access our network of world-class professionals including photographers, videographers, florists, caterers, entertainers, and more. We carefully select, coordinate, and manage all vendors to ensure exceptional quality and seamless collaboration.",
  },
  {
    number: "06",
    title: "Day-of Coordination",
    description: "For couples who love to plan but want to relax on their wedding day, our expert coordinators ensure flawless execution. We manage all vendors, handle the timeline, troubleshoot issues, and allow you to be fully present in every moment.",
  },
];

export default function Services() {
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
            data-testid="text-services-page-heading"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Full-service wedding planning and design for unforgettable celebrations
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                data-testid={`card-service-detail-${service.number}`}
              >
                <div className="lg:col-span-3">
                  <div className="font-display text-6xl font-bold text-muted-foreground/20">
                    {service.number}
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">{service.title}</h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">What's Included</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our comprehensive services cover every detail of your celebration, ensuring a seamless and unforgettable experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
              <div className="p-6 border border-border/30 rounded-sm">
                <h3 className="font-sans font-semibold mb-3">Creative Services</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Custom design concepts</li>
                  <li>• Floral arrangements</li>
                  <li>• Lighting design</li>
                  <li>• Custom structures</li>
                </ul>
              </div>
              <div className="p-6 border border-border/30 rounded-sm">
                <h3 className="font-sans font-semibold mb-3">Logistics</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Venue selection & booking</li>
                  <li>• Vendor coordination</li>
                  <li>• Timeline management</li>
                  <li>• Budget oversight</li>
                </ul>
              </div>
              <div className="p-6 border border-border/30 rounded-sm">
                <h3 className="font-sans font-semibold mb-3">Execution</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Day-of coordination</li>
                  <li>• Setup & installation</li>
                  <li>• Guest services</li>
                  <li>• Vendor management</li>
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-foreground text-background font-sans text-sm tracking-wide uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
                data-testid="button-contact-services-page"
              >
                Begin Your Journey
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
