
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Index from "./pages/Index";

// Lazy-loaded components for performance
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="h-16 w-16 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin"></div>
      <div className="mt-4 text-center text-brand-700 dark:text-brand-300">Loading...</div>
    </div>
  </div>
);

// Configure query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30000
    },
  },
});

const App = () => {
  // Performance monitoring
  useEffect(() => {
    // Report performance metrics
    const reportWebVitals = () => {
      if ('performance' in window) {
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navEntry) {
          console.log(`DOM Content Loaded: ${Math.round(navEntry.domContentLoadedEventStart)}ms`);
          console.log(`First Paint: ${Math.round(performance.getEntriesByName('first-paint')[0]?.startTime || 0)}ms`);
          console.log(`First Contentful Paint: ${Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0)}ms`);
        }
      }
    };

    // Wait for page to be fully loaded
    window.addEventListener('load', reportWebVitals);
    return () => window.removeEventListener('load', reportWebVitals);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
