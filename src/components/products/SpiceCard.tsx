import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Flame } from 'lucide-react';
import type { Spice } from '../../types';
import { Button } from '../ui/Button';

interface SpiceCardProps {
  spice: Spice;
  index: number;
}

export const SpiceCard: React.FC<SpiceCardProps> = ({ spice, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative"
    >
      {/* Organic Badge */}
      {spice.isOrganic && (
        <div className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          ORGANIC
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={spice.image} 
          alt={spice.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover Overlay with Add to Cart */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-white text-corporate-900 hover:bg-spice-turmeric hover:text-white border-none transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-serif font-bold text-corporate-900">{spice.name}</h3>
            <p className="text-xs text-gray-500 italic">{spice.botanicalName}</p>
          </div>
          <div className="flex items-center bg-spice-cream px-2 py-1 rounded-md">
            <Star className="w-3 h-3 text-spice-turmeric fill-current" />
            <span className="text-xs font-bold text-corporate-900 ml-1">{spice.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {spice.description}
        </p>

        {/* Heat Level */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-0.5">
            {[...Array(4)].map((_, i) => (
              <Flame 
                key={i} 
                className={`w-3 h-3 ${
                  i < (spice.heatLevel === 'Mild' ? 1 : spice.heatLevel === 'Medium' ? 2 : spice.heatLevel === 'Hot' ? 3 : 4) 
                  ? 'text-spice-terracotta fill-current' 
                  : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">{spice.heatLevel}</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 block">Price per kg</span>
            <span className="text-lg font-bold text-corporate-900">${spice.price.toFixed(2)}</span>
          </div>
          <div className="text-right">
             <span className="text-xs text-gray-400">{spice.reviews} reviews</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
