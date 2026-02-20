import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getWeddingBySlug, allWeddings } from "@shared/weddingData";
import { ArrowLeft, Calendar, MapPin, Users, Heart } from "lucide-react";
import { Link } from "wouter";

export default function WeddingArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  
  const wedding = getWeddingBySlug(slug!);

  if (!wedding) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Wedding Not Found</h1>
          <Link href="/gallery" className="text-sm uppercase tracking-widest hover:text-foreground/70 transition-colors" data-testid="link-back-gallery">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Find next wedding for "Read Next" section
  const currentIndex = allWeddings.findIndex(w => w.id === wedding.id);
  const nextWedding = allWeddings[(currentIndex + 1) % allWeddings.length];

  return (
    <article className="min-h-screen">
      {/* Back Navigation */}
      <div className="py-6 px-6 border-b border-border/30">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-back-nav"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Gallery
          </Link>
        </div>
      </div>

      {/* Hero Section - Full Width Cover Image */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <img
            src={wedding.coverImage}
            alt={wedding.names}
            className="w-full h-full object-cover"
            data-testid="img-wedding-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          
          {/* Hero Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-background"
          >
            <div className="max-w-4xl">
              {wedding.category && (
                <p className="text-xs uppercase tracking-widest mb-4 opacity-90" data-testid="text-category">
                  {wedding.category}
                </p>
              )}
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }} data-testid="text-wedding-names">
                {wedding.names}
              </h1>
              <p className="text-lg md:text-xl mb-2 opacity-90" data-testid="text-location">
                {wedding.location}
              </p>
              <p className="text-sm uppercase tracking-wider opacity-80" data-testid="text-photographer">
                Photography by {wedding.photographer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Editorial Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 leading-tight" data-testid="text-excerpt">
              {wedding.excerpt}
            </h2>
            
            {/* Wedding Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/30 mb-12">
              <div className="text-center">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Venue</p>
                <p className="text-sm font-medium" data-testid="text-venue">{wedding.venue}</p>
              </div>
              {wedding.season && (
                <div className="text-center">
                  <Calendar className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Season</p>
                  <p className="text-sm font-medium" data-testid="text-season">{wedding.season}</p>
                </div>
              )}
              {wedding.details.guests && (
                <div className="text-center">
                  <Users className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Guests</p>
                  <p className="text-sm font-medium" data-testid="text-guests">{wedding.details.guests}</p>
                </div>
              )}
              {wedding.details.style && (
                <div className="text-center">
                  <Heart className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Style</p>
                  <p className="text-sm font-medium" data-testid="text-style">{wedding.details.style}</p>
                </div>
              )}
            </div>

            {/* Story Text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid="text-story">
                {wedding.story}
              </p>
            </div>

            {/* Color Palette */}
            {wedding.details.colors && wedding.details.colors.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Color Palette</h3>
                <div className="flex flex-wrap gap-4">
                  {wedding.details.colors.map((color, index) => (
                    <div key={index} className="text-sm" data-testid={`text-color-${index}`}>
                      {color}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Photo Gallery */}
          <div className="space-y-12 mb-16" ref={ref}>
            {wedding.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${
                  index % 3 === 0 
                    ? "w-full" 
                    : index % 3 === 1 
                    ? "w-full md:w-4/5 ml-auto" 
                    : "w-full md:w-4/5 mr-auto"
                }`}
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image}
                  alt={`${wedding.names} - Photo ${index + 1}`}
                  className="w-full h-auto object-cover rounded-sm"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Photographer Credit */}
          <div className="text-center py-12 border-t border-border/30">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Photography</p>
            <p className="text-base font-medium">{wedding.photographer}</p>
          </div>
        </div>
      </section>

      {/* Read Next Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Read Next</h3>
          <Link href={`/weddings/${nextWedding.slug}`} data-testid="link-read-next">
            <div className="group cursor-pointer">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-sm hover-elevate">
                  <img
                    src={nextWedding.coverImage}
                    alt={nextWedding.names}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid="img-next-wedding"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{nextWedding.category}</p>
                  <h4 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-muted-foreground transition-colors" data-testid="text-next-wedding-names">
                    {nextWedding.names}
                  </h4>
                  <p className="text-lg text-muted-foreground mb-6">{nextWedding.excerpt}</p>
                  <p className="text-xs uppercase tracking-widest">
                    Read More →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Back to Gallery CTA */}
      <section className="py-12 px-6 text-center border-t border-border/30">
        <Link 
          href="/gallery" 
          className="inline-block px-8 py-3 border border-foreground/30 text-foreground font-sans text-xs tracking-widest uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
          data-testid="button-back-gallery"
        >
          View All Weddings
        </Link>
      </section>
    </article>
  );
}
