
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Expertise from "@/components/Expertise";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Payment from "@/components/Payment";

const Index = () => {
  const location = useLocation();
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scrolling when navigating from other pages
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="features" ref={featuresRef}>
          <Features />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="services" ref={servicesRef}>
          <Services />
        </div>
        <Expertise />
        <WhyUs />
        <div id="pricing" ref={pricingRef}>
          <Pricing />
        </div>
        <div id="testimonials" ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div id="payment">
          <Payment />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
