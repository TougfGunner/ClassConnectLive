import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Destinations from "@/pages/Destinations";
import DestinationPhuket from "@/pages/DestinationPhuket";
import DestinationKohSamui from "@/pages/DestinationKohSamui";
import DestinationKrabi from "@/pages/DestinationKrabi";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import WeddingArticle from "@/pages/WeddingArticle";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Moodboard from "@/pages/Moodboard";
import Submit from "@/pages/Submit";
import Advertise from "@/pages/Advertise";
import Plan from "@/pages/Plan";
import Styles from "@/pages/Styles";
import Vendors from "@/pages/Vendors";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/destinations/phuket" component={DestinationPhuket} />
        <Route path="/destinations/koh-samui" component={DestinationKohSamui} />
        <Route path="/destinations/krabi" component={DestinationKrabi} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/weddings/:slug" component={WeddingArticle} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/moodboard" component={Moodboard} />
        <Route path="/submit" component={Submit} />
        <Route path="/advertise" component={Advertise} />
        <Route path="/plan" component={Plan} />
        <Route path="/styles" component={Styles} />
        <Route path="/vendors" component={Vendors} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
