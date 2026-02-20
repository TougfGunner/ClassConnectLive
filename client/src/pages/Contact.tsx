import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    brideName: "",
    groomName: "",
    email: "",
    guests: "",
    date: "",
    destination: "",
    venue: "",
    setting: "",
    budget: "",
    nationalities: "",
    residence: "",
    source: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <img
          src="/attached_assets/stock_images/elegant_wedding_coup_182134fc.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 to-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-background px-6"
        >
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ letterSpacing: "-0.02em" }}
            data-testid="text-contact-heading"
          >
            Contact Us
          </h1>
          <p className="text-lg md:text-xl">
            Let's start planning your dream wedding
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-sans font-semibold mb-2">
                    For Wedding Planning Enquiries
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <a
                      href="mailto:hello@baliblissweddings.com"
                      className="hover:underline"
                    >
                      hello@baliblissweddings.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+6285821546132" className="hover:underline">
                      +62 858 2154 6132
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold mb-2">
                    For Wedding Submissions
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <a
                      href="mailto:submissions@baliblissweddings.com"
                      className="hover:underline"
                    >
                      submissions@baliblissweddings.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+6285821546132" className="hover:underline">
                      +62 858 2154 6132
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-sans font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/BaliBlissWeddings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/BaliBlissWeddings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://pinterest.com/baliblissweddings/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Pinterest
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Wedding Enquiry
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Bride's Name *</label>
                    <Input
                      required
                      value={formData.brideName}
                      onChange={(e) =>
                        setFormData({ ...formData, brideName: e.target.value })
                      }
                      data-testid="input-bride-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Groom's Name *</label>
                    <Input
                      required
                      value={formData.groomName}
                      onChange={(e) =>
                        setFormData({ ...formData, groomName: e.target.value })
                      }
                      data-testid="input-groom-name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    data-testid="input-email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">
                      Estimated Guests *
                    </label>
                    <Input
                      type="number"
                      required
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      data-testid="input-guests"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      Expected Date *
                    </label>
                    <Input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      data-testid="input-date"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Preferred Wedding Destination *
                  </label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) =>
                      setFormData({ ...formData, destination: value })
                    }
                  >
                    <SelectTrigger data-testid="select-destination">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bali">Bali</SelectItem>
                      <SelectItem value="labuan bajo">Labuan Bajo</SelectItem>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="sri lanka">Sri Lanka</SelectItem>
                      <SelectItem value="italy">Italy</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Preferred Venue *
                  </label>
                  <Select
                    value={formData.venue}
                    onValueChange={(value) =>
                      setFormData({ ...formData, venue: value })
                    }
                  >
                    <SelectTrigger data-testid="select-venue">
                      <SelectValue placeholder="Select venue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private-villa">
                        Private Villa
                      </SelectItem>
                      <SelectItem value="chapel">Chapel</SelectItem>
                      <SelectItem value="cliff-side-resort">
                        Cliff Side Resort
                      </SelectItem>
                      <SelectItem value="forest-resort">
                        Forest Resort
                      </SelectItem>
                      <SelectItem value="5-star-hotel">5-Star Hotel</SelectItem>
                      <SelectItem value="beach-club">Beach Club</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Estimated Budget (USD) *
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger data-testid="select-budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                      <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                      <SelectItem value="50k-70k">$50,000 - $70,000</SelectItem>
                      <SelectItem value="70k-100k">
                        $70,000 - $100,000
                      </SelectItem>
                      <SelectItem value="100k-200k">
                        $100,000 - $200,000
                      </SelectItem>
                      <SelectItem value="200k+">Over $200,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Tell Us About Your Vision *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share your dream wedding vision with us..."
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  data-testid="button-submit-enquiry"
                >
                  Submit Enquiry
                </Button>

                <p className="text-xs text-muted-foreground">
                  We will respond to your inquiry within 1–2 business days. If
                  you do not see our reply in your inbox, kindly check your spam
                  or junk folder.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
