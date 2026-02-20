import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  description: string;
}

function StatItem({ value, suffix = "+", label, sublabel, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center border-l first:border-l-0 border-border/30 px-8" data-testid={`stat-${label.toLowerCase()}`}>
      <div className="font-display text-5xl md:text-6xl font-bold mb-3" data-testid={`text-stat-value-${label.toLowerCase()}`}>
        {count}{suffix}
      </div>
      <div className="font-sans text-base font-semibold mb-2 tracking-wide" data-testid={`text-stat-label-${label.toLowerCase()}`}>
        {label}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{sublabel}</div>
      <div className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
        {description}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <StatItem
            value={150}
            suffix="+"
            label="Weddings"
            sublabel="Luxury Celebrations"
            description="Unforgettable moments across breathtaking destinations worldwide"
          />
          <StatItem
            value={100}
            suffix="%"
            label="Satisfaction"
            sublabel="Happy Couples"
            description="Building lasting memories with proven excellence and care"
          />
          <StatItem
            value={10}
            suffix="+"
            label="Years"
            sublabel="Expert Planning"
            description="A decade of expertise in creating timeless celebrations"
          />
          <StatItem
            value={25}
            suffix="+"
            label="Awards"
            sublabel="Industry Recognition"
            description="Featured in Vogue, Brides, and world-renowned publications"
          />
        </div>
      </div>
    </section>
  );
}
