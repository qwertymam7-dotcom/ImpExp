import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, HeartHandshake } from 'lucide-react';

export const Sustainability = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Sourcing */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1621956697415-46792348c403?q=80&w=2070&auto=format&fit=crop" 
              alt="Sustainable Farming" 
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center mb-4">
              <Leaf className="w-6 h-6 text-spice-turmeric mr-3" />
              <h3 className="text-2xl font-bold text-corporate-900 font-serif">Ethical Sourcing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe great spices start with great soil. That's why we work directly with over 500 small-holder farmers in the Western Ghats biodiversity hotspot. By eliminating middlemen, we ensure our farmers receive 20-30% above market rates, allowing them to invest in sustainable farming practices.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-spice-terracotta rounded-full mr-3"></span>
                Zero-pesticide cultivation zones
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-spice-terracotta rounded-full mr-3"></span>
                Rainwater harvesting implementation
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-spice-terracotta rounded-full mr-3"></span>
                Traditional crop rotation methods
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Section 2: Processing (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
              alt="Spice Processing" 
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center mb-4">
              <Droplets className="w-6 h-6 text-spice-turmeric mr-3" />
              <h3 className="text-2xl font-bold text-corporate-900 font-serif">Pure Processing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our state-of-the-art processing facility in Theni combines traditional wisdom with modern technology. We use Cryogenic Grinding technology for our powders, which maintains low temperatures during grinding to prevent the loss of essential volatile oils—preserving the true aroma and flavor of the spice.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-start">
                <HeartHandshake className="w-8 h-8 text-spice-terracotta mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-corporate-900 mb-1">Community Impact</h4>
                  <p className="text-sm text-gray-600">
                    We support local schools and healthcare initiatives in our farming districts, ensuring the prosperity of the entire community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
