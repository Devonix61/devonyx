
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/f169a14a-ea9f-4ae4-9059-81b8ad112365.png"
                alt="Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-brand-300 mb-6">
              Enterprise-grade SaaS solutions for modern businesses. Scale with confidence.
            </p>
            <div className="flex">
              <a 
                href="https://www.linkedin.com/company/devonyxin/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-300 hover:text-white hover:bg-brand-800 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Automation</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">DevonΩ AI</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">API Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-brand-300 hover:text-white transition-colors">About Us</button></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Partners</a></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-brand-300 hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="text-brand-300 hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Devonyx. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-brand-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
