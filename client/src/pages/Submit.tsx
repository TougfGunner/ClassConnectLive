import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const submissionSchema = z.object({
  brideName: z.string().min(2, "Bride's name is required"),
  groomName: z.string().min(2, "Groom's name is required"),
  weddingDate: z.string().min(1, "Wedding date is required"),
  location: z.string().min(2, "Location is required"),
  photographer: z.string().min(2, "Photographer name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  story: z.string().min(50, "Please share more about your wedding (at least 50 characters)"),
  galleryLink: z.string().url("Please provide a valid gallery link (Pixieset, Google Photos, etc.)"),
});

type SubmissionForm = z.infer<typeof submissionSchema>;

export default function Submit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<SubmissionForm>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      brideName: "",
      groomName: "",
      weddingDate: "",
      location: "",
      photographer: "",
      email: "",
      phone: "",
      story: "",
      galleryLink: "",
    },
  });

  const onSubmit = (data: SubmissionForm) => {
    console.log("Wedding submission:", data);
    setIsSubmitted(true);
    toast({
      title: "Thank you for your submission!",
      description: "We'll review your wedding and be in touch within 3-5 business days.",
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }} data-testid="text-submit-heading">
            Submit Your Wedding
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We're always looking for beautiful destination weddings to feature in Bali Bliss. 
            Share your celebration with us and inspire couples around the world.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-muted/30 rounded-sm"
          >
            <h2 className="font-display text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-8">
              Your wedding submission has been received. We'll be in touch soon.
            </p>
            <Button onClick={() => setIsSubmitted(false)} data-testid="button-submit-another">
              Submit Another Wedding
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="brideName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bride's Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-bride-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="groomName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Groom's Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-groom-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="weddingDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Wedding Date *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} data-testid="input-wedding-date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Bali, Indonesia" {...field} data-testid="input-location" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="photographer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photographer Name *</FormLabel>
                      <FormControl>
                        <Input {...field} data-testid="input-photographer" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="galleryLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo Gallery Link *</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourphotographer.pixieset.com/..." {...field} data-testid="input-gallery-link" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Wedding Story *</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={6}
                          placeholder="Tell us about your special day - how you met, why you chose this location, memorable moments..."
                          data-testid="input-story"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto" data-testid="button-submit-form">
                    Submit Wedding
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
