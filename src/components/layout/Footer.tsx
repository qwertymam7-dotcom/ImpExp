import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-corporate-900 text-gray-300 border-t border-corporate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-spice-turmeric" />
              <span className="text-2xl font-bold text-white font-serif">
                Tamil<span className="text-spice-turmeric">Spices</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Exporting the finest spices from the heart of Tamil Nadu to the world. Committed to quality, authenticity, and sustainable farming since 1995.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-spice-turmeric transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-spice-turmeric transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-spice-turmeric transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-spice-turmeric transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-serif relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-spice-turmeric rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-spice-turmeric transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Home</Link></li>
              <li><Link to="/products" className="hover:text-spice-turmeric transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Our Products</Link></li>
              <li><Link to="/about" className="hover:text-spice-turmeric transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Heritage & Quality</Link></li>
              <li><Link to="/contact" className="hover:text-spice-turmeric transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Export Inquiry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-serif relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-spice-turmeric rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-spice-turmeric shrink-0 mt-1" />
                <span>42 Spice Bazaar Rd,<br />Theni, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-spice-turmeric shrink-0" />
                <span>+91 4546 255 123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-spice-turmeric shrink-0" />
                <span>exports@tamilspices.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-serif relative inline-block">
              Market Updates
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-spice-turmeric rounded-full"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest spice market trends and price updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-corporate-800 border border-corporate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-spice-turmeric"
              />
              <Button size="sm" className="w-full bg-spice-turmeric text-corporate-900 hover:bg-white font-bold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-corporate-800 mt-16 pt-8 text-sm text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} TamilSpices Exports Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
