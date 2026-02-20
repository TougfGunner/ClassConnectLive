import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
  {
    id: 1,
    title: "Our Favourite Wedding Trends in 2025",
    category: "Destination Wedding",
    date: "August 5, 2025",
    image: "/attached_assets/stock_images/romantic_wedding_cel_e94bb5cc.jpg",
    excerpt: "Discover the latest trends shaping luxury destination weddings in 2025, from design aesthetics to celebration styles.",
  },
  {
    id: 2,
    title: "Why Thailand is One of the World's Most Exclusive Wedding Destinations",
    category: "Destination Wedding",
    date: "August 5, 2025",
    image: "/attached_assets/stock_images/tropical_beach_weddi_f401ee78.jpg",
    excerpt: "Explore what makes Thailand a premier destination for luxury weddings, from stunning venues to world-class hospitality.",
  },
  {
    id: 3,
    title: "Creating the Perfect Summertime Wedding Design in Thailand",
    category: "Wedding Planning",
    date: "July 17, 2024",
    image: "/attached_assets/stock_images/garden_wedding_recep_53267de0.jpg",
    excerpt: "Thailand, with its stunning landscapes and vibrant culture, is the perfect destination for a dream summertime wedding.",
  },
  {
    id: 4,
    title: "How to Choose Your Wedding Photographer",
    category: "Event Planning",
    date: "June 5, 2024",
    image: "/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg",
    excerpt: "A comprehensive guide for discerning couples on selecting the perfect photographer to capture your special day.",
  },
  {
    id: 5,
    title: "The Rosé Renaissance with Whispering Angel",
    category: "Event Planning",
    date: "March 2, 2023",
    image: "/attached_assets/stock_images/luxury_wedding_venue_93931add.jpg",
    excerpt: "Discover how rosé wines are making a sophisticated comeback in luxury wedding celebrations.",
  },
  {
    id: 6,
    title: "From Tabletops to Marquees: Our Favorite Wedding Reception Décor Trends of 2023",
    category: "Wedding Decorations",
    date: "October 26, 2022",
    image: "/attached_assets/stock_images/luxury_wedding_venue_9431b021.jpg",
    excerpt: "Explore the most stunning reception décor trends that shaped weddings in 2023.",
  },
  {
    id: 7,
    title: "Cassandra & Jeffree: Love in Full Bloom",
    category: "Destination Wedding",
    date: "October 12, 2022",
    image: "/attached_assets/stock_images/garden_wedding_recep_32cd9dd5.jpg",
    excerpt: "A breathtaking celebration at a luxury Koh Samui resort with stunning floral design.",
  },
  {
    id: 8,
    title: "Lena & Charyl Chappuis: A Fantasy Wedding in the Tuscan Countryside",
    category: "Destination Wedding",
    date: "August 30, 2022",
    image: "/attached_assets/stock_images/elegant_wedding_coup_39239bd8.jpg",
    excerpt: "An enchanting destination wedding in the rolling hills of Tuscany, Italy.",
  },
  {
    id: 9,
    title: "Magical Dream in the North: Sasi & Suchote Chiang Mai Wedding",
    category: "Destination Wedding",
    date: "December 23, 2020",
    image: "/attached_assets/stock_images/romantic_wedding_cel_1d0400c0.jpg",
    excerpt: "A romantic celebration in the cultural heart of Northern Thailand.",
  },
];

const categories = ["All", "Destination Wedding", "Wedding Planning", "Event Planning", "Wedding Decorations", "Press Release"];

export default function Blog() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

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
            data-testid="text-blog-heading"
          >
            Blog & Press
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Wedding inspiration, planning tips, and featured celebrations
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                data-testid={`card-blog-post-${post.id}`}
              >
                <div className="relative overflow-hidden rounded-sm mb-6 hover-elevate">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {post.category} · {post.date}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="text-sm font-sans uppercase tracking-wide hover:underline">
                  Read More
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
