import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../../data/timeline';

export const Timeline = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-spice-terracotta uppercase tracking-wide">Our Journey</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-corporate-900 font-serif">
            7 Decades of Excellence
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                    <span className="text-6xl font-bold text-spice-cream text-stroke-corporate opacity-50 mb-2 font-serif">
                      {event.year}
                    </span>
                    <h4 className="text-xl font-bold text-corporate-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-spice-turmeric rounded-full border-4 border-white shadow-md hidden md:block"></div>

                {/* Empty Side for spacing */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
