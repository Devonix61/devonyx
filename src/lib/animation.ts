
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
    "transition-all duration-700 ease-out",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const pulseAnimation = "animate-pulse-slow";

export const hoverScaleAnimation = "transition-transform duration-300 hover:scale-105";

export const shineAnimation = "animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-transparent bg-clip-text";

export const floatAnimation = "animate-float";

export const glowAnimation = "animate-glow";

export const typewriterAnimation = "animate-typewriter";

export const gradientFlow = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 animate-gradient-flow bg-clip-text text-transparent";

export const rotateAnimation = "animate-spin-slow";

export const bounceAnimation = "animate-bounce-slow";

export const blurInAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 blur-sm animate-blur-in",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200",
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400", 
    delay === 500 && "animation-delay-500"
  );

export const scaleInAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 scale-95 animate-scale-in",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200",
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const tiltAnimation = "hover:rotate-1 transition-transform duration-300";

export const borderGlowAnimation = "animate-border-glow";

export const neonPulseAnimation = "animate-neon-pulse";

export const shimmerAnimation = "animate-shimmer";

export const appearAnimation = (delay: number = 0) => 
  cn(
    "opacity-0 animate-fade-in",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const popInAnimation = "animate-pop-in";

export const slideUpAnimation = "opacity-0 translate-y-6 animate-slide-up";

export const slideDownAnimation = "opacity-0 -translate-y-6 animate-slide-down";

export const slideLeftAnimation = "opacity-0 translate-x-6 animate-slide-left";

export const slideRightAnimation = "opacity-0 -translate-x-6 animate-slide-right";

export const jiggleAnimation = "animate-jiggle";

export const flashAnimation = "animate-flash";

export const flipAnimation = "animate-flip";

export const wiggleAnimation = "animate-wiggle";

export const pulseGlowAnimation = "animate-pulse-glow";

// NEW: Advanced animation utilities
export const revealRightAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 -translate-x-full animate-reveal-right",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const revealLeftAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 translate-x-full animate-reveal-left",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const drawLineAnimation = "w-0 animate-draw-line";

export const rotateInAnimation = "opacity-0 -rotate-90 scale-0 animate-rotate-in";

export const elasticScaleAnimation = "opacity-0 scale-0 animate-elastic-scale";

export const textBlurAnimation = "animate-text-blur";

export const floatShadowAnimation = "animate-float-shadow";

export const waveAnimation = "animate-wave";

export const particleFlowAnimation = "animate-particle-flow";

export const perspectiveTiltAnimation = "animate-perspective-tilt";

export const magneticPullAnimation = "animate-magnetic-pull";

export const glitchAnimation = "animate-glitch";

export const hoverGlowAnimation = "transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.6)]";

// Advanced interactive animations
export const interactiveCardAnimation = "transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]";

export const magneticButtonAnimation = "relative transition-transform duration-300 hover:transform hover:translate-y-[-2px] active:translate-y-[1px]";

export const futuristicHoverAnimation = cn(
  "relative overflow-hidden z-10",
  "before:absolute before:inset-0 before:z-[-1]",
  "before:bg-gradient-to-r before:from-brand-500/0 before:via-brand-500/30 before:to-brand-500/0",
  "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700",
  "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
);
