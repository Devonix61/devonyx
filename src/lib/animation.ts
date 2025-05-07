
import { cn } from "@/lib/utils";

export const fadeInAnimation = (delay: number = 0) => 
  cn("opacity-0 translate-y-4 animate-fade-up", 
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const slideInAnimation = (direction: 'left' | 'right' = 'left', delay: number = 0) => 
  cn(
    direction === 'left' ? "opacity-0 -translate-x-4" : "opacity-0 translate-x-4",
    "transition-all duration-700 ease-out animate-fade-up",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const pulseAnimation = "animate-pulse-slow";

export const hoverScaleAnimation = "transition-transform duration-300 hover:scale-105";

export const shineAnimation = "animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-transparent bg-clip-text";
