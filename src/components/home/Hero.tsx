import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // Indian Spice Market Image
          backgroundImage: 'url("https://images.unsplash.com/photo-1533231903808-45c7a2668b85?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-corporate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-spice-turmeric/20 text-spice-turmeric border border-spice-turmeric/30 mb-6 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
            Direct from Tamil Nadu Farms
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-serif">
            The Essence of <br />
            <span className="text-spice-turmeric">India's Spice Coast</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Premium quality spices sourced directly from the fertile lands of Tamil Nadu. 
            We bridge the gap between traditional farmers and the global market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto group">
                Request Export Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:border-white hover:text-white">
                View Product Catalog
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
