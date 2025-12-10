import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { recipes } from '../../data/recipes';
import { Button } from '../ui/Button';

export const Recipes = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold text-spice-terracotta uppercase tracking-wide">Culinary Inspiration</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-corporate-900 font-serif">
              Spice Up Your Kitchen
            </h3>
            <p className="mt-4 text-gray-600">
              Discover authentic recipes that showcase the true potential of our premium spices.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex mt-4 md:mt-0">
            View All Recipes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-corporate-900">
                  {recipe.category}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-corporate-900 mb-2 font-serif group-hover:text-spice-terracotta transition-colors">
                  {recipe.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                
                <div className="flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-spice-turmeric" />
                    {recipe.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-spice-turmeric" />
                    {recipe.servings} Servings
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Recipes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
