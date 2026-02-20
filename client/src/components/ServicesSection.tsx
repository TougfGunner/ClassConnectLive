import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    number: "01",
    title: "Full-Service Planning",
    description:
      "From the first spark of inspiration to the final farewell, we orchestrate every detail of your celebration. Our comprehensive planning service ensures a seamless, stress-free experience from start to finish.",
  },
  {
    number: "02",
    title: "Destination Weddings",
    description:
      "Specializing in breathtaking locations across Thailand and beyond, we transform dream destinations into unforgettable wedding venues. Expert local knowledge meets global luxury standards.",
  },
  {
    number: "03",
    title: "Design & Styling",
    description:
      "Our design philosophy blends timeless elegance with your unique vision. From florals to tablescapes, lighting to décor, every element is curated to create a cohesive, stunning aesthetic.",
  },
  {
    number: "04",
    title: "Day-of Coordination",
    description:
      "For couples who love to plan but want to relax on their big day, our expert coordinators ensure flawless execution. We handle logistics while you savor every moment.",
  },
  {
    number: "05",
    title: "Luxury Elopements",
    description:
      "Intimate doesn't mean less special. We craft perfectly curated elopements that capture all the romance and elegance of larger celebrations in beautifully intimate settings.",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 px-6 bg-muted/10" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">What We Offer</p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ letterSpacing: '-0.02em' }}
            data-testid="text-services-heading"
          >
            Our Services
          </h2>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              data-testid={`card-service-${service.number}`}
            >
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="font-display text-5xl font-bold mb-6 text-muted-foreground/30">
                  {service.number}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-5">{service.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{service.description}</p>
              </div>
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-[4/5] bg-gradient-to-br from-muted/40 to-muted/10 rounded-sm" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.a
            href="mailto:hello@baliblissweddings.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block px-10 py-4 bg-foreground text-background font-sans text-sm tracking-wide uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
            data-testid="button-contact-services"
          >
            Begin Your Journey
          </motion.a>
        </div>
      </div>
    </section>
  );
}
