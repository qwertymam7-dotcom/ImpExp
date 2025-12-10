import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const CTASection = () => {
  return (
    <section className="bg-spice-cream py-20 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#C2410C 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-6 font-serif">
          Ready to Place an Order?
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          We handle large-scale export orders with customized packaging and logistics solutions. 
          Get a competitive quote tailored to your destination.
        </p>
        <Link to="/contact">
          <Button 
            size="lg" 
            className="bg-spice-terracotta text-white hover:bg-spice-ochre shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Start Your Order
          </Button>
        </Link>
      </div>
    </section>
  );
};
