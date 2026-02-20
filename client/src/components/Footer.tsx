import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
            Let's Create Your Perfect Day
          </h2>
          <p className="text-base mb-10 text-background/80 max-w-2xl mx-auto">
            Ready to begin planning your dream wedding? We'd love to hear your story and bring your vision to life.
          </p>
          <motion.a
            href="mailto:hello@baliblissweddings.com"
            className="inline-block px-10 py-4 bg-background text-foreground font-sans text-sm tracking-wide uppercase rounded-sm hover-elevate active-elevate-2 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-testid="button-contact-footer"
          >
            Get In Touch
          </motion.a>
        </div>

        <div className="border-t border-background/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2025 Bali Bliss. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/BaliBlissWeddings" target="_blank" rel="noopener noreferrer" className="text-sm text-background/60 hover:text-background transition-colors">
                Instagram
              </a>
              <a href="https://pinterest.com/baliblissweddings" target="_blank" rel="noopener noreferrer" className="text-sm text-background/60 hover:text-background transition-colors">
                Pinterest
              </a>
              <a href="/contact" className="text-sm text-background/60 hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
