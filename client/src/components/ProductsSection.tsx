import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const products = [
  {
    id: 1,
    title: "AxisFolio",
    subtitle: "Framer Portfolio Template",
    image: "https://framerusercontent.com/images/LxW55R5zY0zkWbMG1qjsjGjTI.jpg",
    link: "https://basitdesign.lemonsqueezy.com/buy/db4b6676-385e-402d-8bfc-3ee410cbaeae",
  },
  {
    id: 2,
    title: "Peter kenworth",
    subtitle: "Creative Framer Template",
    image: "https://framerusercontent.com/images/KpwueXUWojLJQOynrSZGS6qtqxA.jpg",
    link: "https://basitdesign.lemonsqueezy.com/buy/49e37b26-a875-44bf-902f-32ed686fc810",
  },
  {
    id: 3,
    title: "Troscan",
    subtitle: "Carpenter Framer Template",
    image: "https://framerusercontent.com/images/UTAhGQm2iPERKhLLPoXOFQq0K78.jpg",
    link: "https://basitdesign.lemonsqueezy.com/buy/5b1c20ff-509e-4143-bb10-e2d4f02b8e3e",
  },
];

export default function ProductsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="overflow-hidden py-8 mb-12">
        <div className="flex animate-marquee">
          <div className="flex whitespace-nowrap">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="text-sm font-medium tracking-ultra-wide mx-8"
                data-testid={`text-products-marquee-${i}`}
              >
                - STORE
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          data-testid="text-products-heading"
        >
          Products & Templates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              data-testid={`card-product-${product.id}`}
            >
              <div className="relative overflow-hidden rounded-md mb-4 hover-elevate">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-product-${product.id}`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
              <p className="text-sm text-muted-foreground">{product.subtitle}</p>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="https://archar.framer.website/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-foreground text-background rounded-md hover-elevate active-elevate-2 font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-testid="button-explore-store"
          >
            Explore Store
          </motion.a>
        </div>
      </div>
    </section>
  );
}
