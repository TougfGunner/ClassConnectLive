import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function MoodboardCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb,0,0,0),0.05),transparent_50%)]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>New Interactive Tool</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Ready to see how your Bali wedding looks with us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create your instant moodboard and discover your dream wedding budget in minutes
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/moodboard">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover-elevate active-elevate-2"
                data-testid="button-create-moodboard"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Create Your Moodboard
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free • Takes 3 minutes • Instant results
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Venue Options", value: "4+" },
                { label: "Design Tiers", value: "4" },
                { label: "Color Themes", value: "4" },
                { label: "Budget Estimate", value: "Instant" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
