import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { cn } from '../../lib/utils';

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center mb-8">
        <HelpCircle className="w-6 h-6 text-spice-turmeric mr-3" />
        <h3 className="text-2xl font-serif font-bold text-corporate-900">Frequently Asked Questions</h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
            >
              <span className={cn(
                "font-medium text-lg transition-colors",
                activeIndex === index ? "text-spice-terracotta" : "text-corporate-900 group-hover:text-spice-terracotta"
              )}>
                {faq.question}
              </span>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 text-gray-400 transition-transform duration-300",
                  activeIndex === index ? "transform rotate-180 text-spice-terracotta" : ""
                )} 
              />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-2 pb-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
