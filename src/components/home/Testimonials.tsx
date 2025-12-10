import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-corporate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-spice-turmeric rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-spice-terracotta rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-spice-turmeric uppercase tracking-wide">Client Stories</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white font-serif">
            Trusted by Global Importers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl relative hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="h-10 w-10 text-spice-turmeric/40 mb-6" />
              
              <p className="text-gray-300 mb-8 text-lg italic font-light">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover border-2 border-spice-turmeric"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                  <p className="text-spice-turmeric text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
