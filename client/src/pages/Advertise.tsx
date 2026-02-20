import { motion } from "framer-motion";

const packages = [
  {
    name: "Featured Vendor",
    price: "$500",
    period: "per issue",
    features: [
      "Full-page vendor profile",
      "Logo placement on website",
      "Social media feature",
      "Vendor directory listing",
      "Direct inquiry link"
    ]
  },
  {
    name: "Premium Ad",
    price: "$1,000",
    period: "per issue",
    features: [
      "Full-page advertisement",
      "Premium placement",
      "Website banner ad (1 month)",
      "Newsletter feature",
      "Social media promotion"
    ],
    featured: true
  },
  {
    name: "Editorial Feature",
    price: "$2,500",
    period: "per issue",
    features: [
      "2-4 page editorial spread",
      "Professional photography credit",
      "Website homepage feature",
      "Social media campaign",
      "Newsletter dedicated section"
    ]
  }
];

export default function Advertise() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }} data-testid="text-advertise-heading">
              Advertise With Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reach thousands of engaged couples planning their dream destination weddings. 
              Bali Bliss connects you with high-end clients seeking luxury wedding services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-sm border ${
                  pkg.featured 
                    ? "border-foreground bg-muted/30" 
                    : "border-border/30"
                }`}
                data-testid={`card-package-${index}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs uppercase tracking-wider rounded-sm">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-4xl font-bold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-foreground mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="mailto:advertising@baliblissweddings.com" 
                  className={`block text-center py-3 px-6 rounded-sm text-sm uppercase tracking-wider transition-all ${
                    pkg.featured
                      ? "bg-foreground text-background hover-elevate active-elevate-2"
                      : "border border-foreground text-foreground hover-elevate active-elevate-2"
                  }`}
                  data-testid={`button-contact-${index}`}
                >
                  Get Started
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
              Why Advertise With Bali Bliss?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-foreground mb-4">10K+</div>
                <p className="text-sm text-muted-foreground">Monthly readers actively planning weddings</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-foreground mb-4">85%</div>
                <p className="text-sm text-muted-foreground">Destination wedding bookings</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-foreground mb-4">$50K+</div>
                <p className="text-sm text-muted-foreground">Average wedding budget</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our advertising team to discuss custom packages and editorial opportunities.
          </p>
          <a 
            href="mailto:advertising@baliblissweddings.com" 
            className="inline-block px-10 py-4 bg-foreground text-background font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
            data-testid="button-contact-sales"
          >
            Contact Advertising Team
          </a>
        </div>
      </section>
    </div>
  );
}
