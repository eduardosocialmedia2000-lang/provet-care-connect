import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "", label }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center space-y-2">
      <span className="font-heading text-4xl md:text-5xl font-extrabold text-primary">
        {prefix}{count}{suffix}
      </span>
      <p className="text-muted-foreground font-medium text-sm">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
