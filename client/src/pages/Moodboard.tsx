import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PDFDownloadLink } from "@react-pdf/renderer";
import WeddingQuotePDF from "@/components/WeddingQuotePDF";

type VenueType = "tirhta-uluwatu" | "glass-chapel" | "garden-venue" | "beach-venue" | null;
type ThemeType = "serenity-haven" | "beyond-continents" | "dreamy-bloom" | "garden-romance" | "modern-elegance" | null;

interface CoupleDetails {
  brideName: string;
  groomName: string;
  weddingDate: string;
}

interface MoodboardState {
  venue: VenueType;
  theme: ThemeType;
  coupleDetails: CoupleDetails;
}

// Organized image collections by theme
const THEME_IMAGES = {
  "serenity-haven": {
    name: "Serenity Haven",
    description: "Ethereal white & green elegance",
    colors: ["White", "Ivory", "Soft Green", "Gold accents"],
    ceremony: "/attached_assets/16_1759519468674.jpg",
    reception: "/attached_assets/17_1759519468674.jpg", 
    details: "/attached_assets/7_1759519468674.jpg",
    sweetheart: "/attached_assets/8_1759519468674.jpg",
    budget: 15000
  },
  "beyond-continents": {
    name: "Beyond the Continents",
    description: "Romantic fairytale in blush & pink",
    colors: ["Blush Pink", "Dusty Rose", "Champagne", "Gold"],
    ceremony: "/attached_assets/1_1759519568782.jpg",
    reception: "/attached_assets/21_1759519568782.jpg",
    details: "/attached_assets/3_1759519568782.jpg",
    sweetheart: "/attached_assets/22_1759519568782.jpg",
    budget: 18000
  },
  "dreamy-bloom": {
    name: "Dreamy Bloomscape",
    description: "Sophisticated elegance with soft hues",
    colors: ["White", "Beige", "Dusty Pink", "Sage Green"],
    ceremony: "/attached_assets/16_1759519568782.jpg",
    reception: "/attached_assets/12_1759519568782.jpg",
    details: "/attached_assets/11_1759519568782.jpg",
    sweetheart: "/attached_assets/11_1759519568782.jpg",
    budget: 20000
  },
  "garden-romance": {
    name: "Garden Romance",
    description: "Whimsical greenery & natural beauty",
    colors: ["White", "Green", "Soft Peach", "Natural Wood"],
    ceremony: "/attached_assets/12_1759519468674.jpg",
    reception: "/attached_assets/6_1759519468674.jpg",
    details: "/attached_assets/13_1759519468674.jpg",
    sweetheart: "/attached_assets/8_1759519468674.jpg",
    budget: 16000
  },
  "modern-elegance": {
    name: "Modern Elegance",
    description: "Contemporary luxury with clean lines",
    colors: ["White", "Champagne", "Rose Gold", "Soft Gray"],
    ceremony: "/attached_assets/20_1759519568782.jpg",
    reception: "/attached_assets/23_1759519568782.jpg",
    details: "/attached_assets/25_1759519568782.jpg",
    sweetheart: "/attached_assets/22_1759519568782.jpg",
    budget: 22000
  }
};

export default function Moodboard() {
  const [selections, setSelections] = useState<MoodboardState>({
    venue: null,
    theme: null,
    coupleDetails: {
      brideName: "",
      groomName: "",
      weddingDate: ""
    }
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll-tied scale for preview elements (keeping them visible but adding subtle animation)
  const ceremonyScale = useTransform(scrollYProgress, [0.2, 0.35], [0.95, 1]);
  const receptionScale = useTransform(scrollYProgress, [0.45, 0.6], [0.95, 1]);
  const detailsScale = useTransform(scrollYProgress, [0.65, 0.75], [0.95, 1]);

  const venues = [
    { 
      id: "tirhta-uluwatu", 
      name: "Tirtha Uluwatu", 
      image: "/attached_assets/4_1759519568782.jpg",
      description: "Glass chapel with ocean views",
      price: 8000 
    },
    { 
      id: "glass-chapel", 
      name: "Modern Glass Chapel", 
      image: "/attached_assets/5_1759519568782.jpg",
      description: "Contemporary elegance",
      price: 7000 
    },
    { 
      id: "garden-venue", 
      name: "Lush Garden Venue", 
      image: "/attached_assets/9_1759519468674.jpg",
      description: "Natural tropical romance",
      price: 6000 
    },
    { 
      id: "beach-venue", 
      name: "Beachfront Paradise", 
      image: "/attached_assets/8_1759519568782.jpg",
      description: "Oceanside celebration",
      price: 9000 
    }
  ];

  const themes = Object.entries(THEME_IMAGES).map(([id, data]) => ({
    id,
    ...data
  }));

  const calculateTotal = () => {
    let total = 0;
    const selectedVenue = venues.find(v => v.id === selections.venue);
    const selectedTheme = themes.find(t => t.id === selections.theme);

    if (selectedVenue) total += selectedVenue.price;
    if (selectedTheme) total += selectedTheme.budget;

    return total;
  };

  const selectedThemeData = selections.theme ? THEME_IMAGES[selections.theme] : null;
  const selectedVenueData = selections.venue ? venues.find(v => v.id === selections.venue) : null;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            className="font-serif text-6xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            Design Your Dream
          </motion.h1>
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
          >
            Build your perfect Bali wedding vision as you scroll
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.6 }}
          >
            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-primary" />
          </motion.div>
        </div>
      </section>

      {/* Couple Details Form Section */}
      <section ref={formSectionRef} className="min-h-screen flex items-center justify-center py-20 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl mb-4">Let's Personalize Your Quote</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your celebration
            </p>
          </motion.div>

          <Card className="p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="bride-name">Bride's Name</Label>
                  <Input
                    id="bride-name"
                    placeholder="Enter bride's name"
                    value={selections.coupleDetails.brideName}
                    onChange={(e) => setSelections({
                      ...selections,
                      coupleDetails: { ...selections.coupleDetails, brideName: e.target.value }
                    })}
                    data-testid="input-bride-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groom-name">Groom's Name</Label>
                  <Input
                    id="groom-name"
                    placeholder="Enter groom's name"
                    value={selections.coupleDetails.groomName}
                    onChange={(e) => setSelections({
                      ...selections,
                      coupleDetails: { ...selections.coupleDetails, groomName: e.target.value }
                    })}
                    data-testid="input-groom-name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="wedding-date">Wedding Date</Label>
                <Input
                  id="wedding-date"
                  type="date"
                  value={selections.coupleDetails.weddingDate}
                  onChange={(e) => setSelections({
                    ...selections,
                    coupleDetails: { ...selections.coupleDetails, weddingDate: e.target.value }
                  })}
                  data-testid="input-wedding-date"
                />
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Scroll down to explore venues and themes ↓
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Venue Selection Section */}
      <VenueSection 
        venues={venues} 
        selected={selections.venue}
        onSelect={(id: string) => setSelections({ ...selections, venue: id as VenueType })}
      />

      {/* Theme/Vision Board Selection Section */}
      <ThemeSection 
        themes={themes}
        selected={selections.theme}
        onSelect={(id: string) => setSelections({ ...selections, theme: id as ThemeType })}
      />

      {/* Scroll-Tied Sticky Preview */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 w-80 z-40 hidden lg:block pointer-events-none">
        <Card className="p-4 bg-background/95 backdrop-blur-sm">
          <h3 className="font-semibold mb-4 text-sm">Your Vision</h3>
          <div className="relative aspect-[3/4] bg-secondary/20 rounded-lg overflow-hidden mb-4">
            {/* Venue base layer */}
            {selections.venue && selectedVenueData && (
              <motion.img 
                src={selectedVenueData.image}
                alt="Venue"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
              />
            )}
            
            {/* Theme layers - always visible with subtle scroll animation */}
            {selections.theme && selectedThemeData && (
              <>
                {/* Ceremony layer */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ scale: prefersReducedMotion ? 1 : ceremonyScale }}
                >
                  <img 
                    src={selectedThemeData.ceremony}
                    alt="Ceremony"
                    className="w-full h-full object-cover rounded-md"
                  />
                </motion.div>

                {/* Reception layer */}
                <motion.div 
                  className="absolute inset-x-4 bottom-4 h-1/3 rounded-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ scale: prefersReducedMotion ? 1 : receptionScale }}
                >
                  <img 
                    src={selectedThemeData.reception}
                    alt="Reception"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Details layer */}
                <motion.div 
                  className="absolute top-4 right-4 w-20 h-20 rounded-md overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ scale: prefersReducedMotion ? 1 : detailsScale }}
                >
                  <img 
                    src={selectedThemeData.details}
                    alt="Details"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </>
            )}

            {!selections.venue && !selections.theme && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Scroll to build your vision
              </div>
            )}
          </div>
          
          {calculateTotal() > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <p className="text-xs text-muted-foreground mb-1">Estimated Budget</p>
              <p className="text-2xl font-bold text-primary" data-testid="text-budget-preview">
                ${calculateTotal().toLocaleString()}
              </p>
            </motion.div>
          )}
        </Card>
      </div>

      {/* Final Summary Section */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="font-serif text-5xl mb-6">Your Dream Wedding</h2>
            <p className="text-xl text-muted-foreground mb-12">
              A personalized vision of your perfect Bali celebration
            </p>

            {/* Theme Details */}
            {selectedThemeData && (
              <Card className="p-8 mb-8 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">{selectedThemeData.name}</h3>
                    <p className="text-muted-foreground mb-6">{selectedThemeData.description}</p>
                    
                    <h4 className="font-medium mb-3">Color Palette</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedThemeData.colors.map((color: string) => (
                        <span key={color} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Your Wedding Vision</h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex-1 min-w-[120px]">
                        <img 
                          key={`ceremony-${selections.theme}`}
                          src={selectedThemeData.ceremony} 
                          alt="Ceremony" 
                          className="w-full h-40 object-cover rounded-md"
                          loading="eager"
                          data-testid="img-summary-ceremony"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Ceremony</p>
                      </div>
                      <div className="flex-1 min-w-[120px]">
                        <img 
                          key={`reception-${selections.theme}`}
                          src={selectedThemeData.reception} 
                          alt="Reception" 
                          className="w-full h-40 object-cover rounded-md"
                          loading="eager"
                          data-testid="img-summary-reception"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Reception</p>
                      </div>
                      <div className="flex-1 min-w-[120px]">
                        <img 
                          key={`details-${selections.theme}`}
                          src={selectedThemeData.details} 
                          alt="Details" 
                          className="w-full h-40 object-cover rounded-md"
                          loading="eager"
                          data-testid="img-summary-details"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Details</p>
                      </div>
                      <div className="flex-1 min-w-[120px]">
                        <img 
                          key={`sweetheart-${selections.theme}`}
                          src={selectedThemeData.sweetheart} 
                          alt="Sweetheart" 
                          className="w-full h-40 object-cover rounded-md"
                          loading="eager"
                          data-testid="img-summary-sweetheart"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Sweetheart Table</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Budget Breakdown */}
            <Card className="p-8 mb-8">
              <h3 className="font-semibold text-lg mb-6">Budget Breakdown</h3>
              <div className="space-y-4">
                {selections.venue && selectedVenueData && (
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <span className="font-medium">{selectedVenueData.name}</span>
                      <p className="text-sm text-muted-foreground">{selectedVenueData.description}</p>
                    </div>
                    <span className="font-medium">
                      ${selectedVenueData.price.toLocaleString()}
                    </span>
                  </div>
                )}
                {selections.theme && selectedThemeData && (
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <span className="font-medium">{selectedThemeData.name}</span>
                      <p className="text-sm text-muted-foreground">Complete styling package</p>
                    </div>
                    <span className="font-medium">
                      ${selectedThemeData.budget.toLocaleString()}
                    </span>
                  </div>
                )}
                {calculateTotal() > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold">Total Estimate</span>
                      <span className="font-bold text-primary">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {selections.venue && selections.theme && selections.coupleDetails.brideName && selections.coupleDetails.groomName ? (
                <PDFDownloadLink
                  document={
                    <WeddingQuotePDF
                      coupleDetails={selections.coupleDetails}
                      venue={selectedVenueData!}
                      theme={{
                        ...selectedThemeData!,
                        id: selections.theme
                      }}
                      total={calculateTotal()}
                    />
                  }
                  fileName={`${selections.coupleDetails.brideName}-${selections.coupleDetails.groomName}-Wedding-Quote.pdf`}
                  className="inline-block"
                >
                  {({ loading }) => (
                    <Button size="lg" className="w-full sm:w-auto" data-testid="button-download-moodboard" disabled={loading}>
                      <Download className="w-5 h-5 mr-2" />
                      {loading ? 'Preparing PDF...' : 'Download Your Quote'}
                    </Button>
                  )}
                </PDFDownloadLink>
              ) : (
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-download-moodboard" disabled>
                  <Download className="w-5 h-5 mr-2" />
                  Complete selections to download
                </Button>
              )}
              <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-book-consultation">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Venue Section Component
function VenueSection({ venues, selected, onSelect }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        >
          <h2 className="font-serif text-5xl mb-4 text-center">Choose Your Venue</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Where will your story unfold?
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {venues.map((venue: any, index: number) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer overflow-hidden hover-elevate active-elevate-2 transition-all ${
                    selected === venue.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => onSelect(venue.id)}
                  data-testid={`card-venue-${venue.id}`}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <motion.img 
                      src={venue.image} 
                      alt={venue.name}
                      className="w-full h-full object-cover"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{venue.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{venue.description}</p>
                    <p className="text-sm font-medium">
                      ${venue.price.toLocaleString()}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Theme/Vision Board Section Component
function ThemeSection({ themes, selected, onSelect }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        >
          <h2 className="font-serif text-5xl mb-4 text-center">Select Your Wedding Theme</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Each vision board includes ceremony, reception & styling details
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {themes.map((theme: any, index: number) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              >
                <Card
                  className={`cursor-pointer overflow-hidden hover-elevate active-elevate-2 transition-all ${
                    selected === theme.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => onSelect(theme.id)}
                  data-testid={`card-theme-${theme.id}`}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <motion.img 
                      src={theme.ceremony} 
                      alt={theme.name}
                      className="w-full h-full object-cover"
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">{theme.name}</h3>
                      <p className="text-sm text-white/90 mb-3">{theme.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {theme.colors.slice(0, 3).map((color: string) => (
                          <span key={color} className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-2">
                      <img src={theme.reception} alt="Reception" className="w-full h-16 object-cover rounded" />
                      <img src={theme.details} alt="Details" className="w-full h-16 object-cover rounded" />
                      <img src={theme.sweetheart} alt="Sweetheart" className="w-full h-16 object-cover rounded" />
                    </div>
                    <p className="text-sm font-medium mt-3 text-center">
                      From ${theme.budget.toLocaleString()}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
