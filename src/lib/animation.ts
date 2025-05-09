
import { cn } from "@/lib/utils";

// Optimized fade animations with hardware acceleration
export const fadeInAnimation = (delay: number = 0) => 
  cn("opacity-0 translate-y-4 will-change-transform will-change-opacity animate-fade-up", 
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

// Optimized slide animations with better performance
export const slideInAnimation = (direction: 'left' | 'right' = 'left', delay: number = 0) => 
  cn(
    direction === 'left' ? "opacity-0 -translate-x-4" : "opacity-0 translate-x-4",
    "will-change-transform will-change-opacity transition-all duration-700 ease-out",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

// Hardware-accelerated animations
export const pulseAnimation = "animate-pulse-slow";
export const hoverScaleAnimation = "transition-transform duration-300 hover:scale-105 will-change-transform";
export const shineAnimation = "animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-transparent bg-clip-text";
export const floatAnimation = "animate-float will-change-transform";
export const glowAnimation = "animate-glow";
export const typewriterAnimation = "animate-typewriter";
export const gradientFlow = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 animate-gradient-flow bg-clip-text text-transparent";
export const rotateAnimation = "animate-spin-slow will-change-transform";
export const bounceAnimation = "animate-bounce-slow will-change-transform";

export const blurInAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 blur-sm animate-blur-in will-change-opacity will-change-filter",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200",
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400", 
    delay === 500 && "animation-delay-500"
  );

export const scaleInAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 scale-95 animate-scale-in will-change-transform will-change-opacity",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200",
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const tiltAnimation = "hover:rotate-1 transition-transform duration-300 will-change-transform";
export const borderGlowAnimation = "animate-border-glow";
export const neonPulseAnimation = "animate-neon-pulse";
export const shimmerAnimation = "animate-shimmer";

export const appearAnimation = (delay: number = 0) => 
  cn(
    "opacity-0 animate-fade-in will-change-opacity",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const popInAnimation = "animate-pop-in will-change-transform will-change-opacity";
export const slideUpAnimation = "opacity-0 translate-y-6 animate-slide-up will-change-transform";
export const slideDownAnimation = "opacity-0 -translate-y-6 animate-slide-down will-change-transform";
export const slideLeftAnimation = "opacity-0 translate-x-6 animate-slide-left will-change-transform";
export const slideRightAnimation = "opacity-0 -translate-x-6 animate-slide-right will-change-transform";
export const jiggleAnimation = "animate-jiggle will-change-transform";
export const flashAnimation = "animate-flash";
export const flipAnimation = "animate-flip will-change-transform";
export const wiggleAnimation = "animate-wiggle will-change-transform";
export const pulseGlowAnimation = "animate-pulse-glow";

// Advanced animation utilities with performance optimizations
export const revealRightAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 -translate-x-full animate-reveal-right will-change-transform will-change-opacity",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const revealLeftAnimation = (delay: number = 0) =>
  cn(
    "opacity-0 translate-x-full animate-reveal-left will-change-transform will-change-opacity",
    delay === 100 && "animation-delay-100",
    delay === 200 && "animation-delay-200", 
    delay === 300 && "animation-delay-300",
    delay === 400 && "animation-delay-400",
    delay === 500 && "animation-delay-500"
  );

export const drawLineAnimation = "w-0 animate-draw-line will-change-width";

export const rotateInAnimation = "opacity-0 -rotate-90 scale-0 animate-rotate-in will-change-transform will-change-opacity";

export const elasticScaleAnimation = "opacity-0 scale-0 animate-elastic-scale will-change-transform will-change-opacity";

export const textBlurAnimation = "animate-text-blur will-change-filter";

export const floatShadowAnimation = "animate-float-shadow will-change-transform will-change-filter";

export const waveAnimation = "animate-wave will-change-transform";

export const particleFlowAnimation = "animate-particle-flow will-change-transform will-change-opacity";

export const perspectiveTiltAnimation = "animate-perspective-tilt will-change-transform";

export const magneticPullAnimation = "animate-magnetic-pull will-change-transform";

export const glitchAnimation = "animate-glitch will-change-transform";

export const hoverGlowAnimation = "transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.6)] will-change-shadow";

// Advanced interactive animations
export const interactiveCardAnimation = "transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] will-change-transform will-change-shadow";

export const magneticButtonAnimation = "relative transition-transform duration-300 hover:transform hover:translate-y-[-2px] active:translate-y-[1px] will-change-transform";

export const futuristicHoverAnimation = cn(
  "relative overflow-hidden z-10 will-change-opacity will-change-transform",
  "before:absolute before:inset-0 before:z-[-1]",
  "before:bg-gradient-to-r before:from-brand-500/0 before:via-brand-500/30 before:to-brand-500/0",
  "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700",
  "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
);

// NEW: Additional premium animations
export const morphAnimation = "animate-morph will-change-transform";
export const textRevealAnimation = "animate-text-reveal will-change-clip-path";
export const splitTextAnimation = "animate-split-text will-change-transform will-change-opacity";
export const staggeredFadeAnimation = (index: number) => `animate-fade-in will-change-opacity will-change-transform` + 
  ` animation-delay-${index * 100 > 500 ? 500 : index * 100}`;

export const parallaxScroll = (speed: number = 1) => 
  `transition-transform will-change-transform parallax-element data-speed-${speed}`;

export const clipPathReveal = "animate-clip-reveal will-change-clip-path";
export const liquidAnimation = "animate-liquid will-change-transform";
export const noiseAnimation = "animate-noise";
export const charByCharAnimation = "animate-char-by-char";
export const blendModeAnimation = "animate-blend-mode";
export const smartHoverEffect = cn(
  "relative overflow-hidden transition-all duration-500",
  "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-brand-500/0 before:to-purple-500/30",
  "before:translate-y-full before:opacity-0 hover:before:translate-y-0 hover:before:opacity-100",
  "before:transition-all before:ease-out before:duration-500 will-change-transform will-change-opacity"
);

export const svgDrawAnimation = "animate-svg-draw will-change-stroke-dashoffset";
export const imageZoomAnimation = "group-hover:scale-110 transition-transform duration-700 will-change-transform";
export const imageParallaxAnimation = "transition-transform duration-700 group-hover:translate-y-[-10px] will-change-transform";
export const particlesContainerAnimation = "relative overflow-hidden";

// Layout specific animations
export const pageTransitionAnimation = "animate-page-transition will-change-transform will-change-opacity";
export const gridItemAnimation = (index: number) => 
  `opacity-0 translate-y-4 animate-fade-up will-change-transform will-change-opacity animation-delay-${index * 75 > 500 ? 500 : index * 75}`;
