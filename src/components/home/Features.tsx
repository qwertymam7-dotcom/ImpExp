import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, PackageCheck, TrendingUp } from 'lucide-react';
import type { Feature } from '../../types';

const features: Feature[] = [
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'ISO 22000 & HACCP certified processing units ensuring every shipment meets global food safety standards.'
  },
  {
    icon: Globe,
    title: 'Global Logistics',
    description: 'Seamless shipping to 30+ countries with expertise in handling complex customs documentation and freight forwarding.'
  },
  {
    icon: PackageCheck,
    title: 'Custom Packaging',
    description: 'From bulk jute bags to retail-ready private labeling, we offer flexible packaging solutions tailored to your brand.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Direct-from-farm sourcing allows us to offer the most competitive rates without compromising on premium quality.'
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-spice-terracotta uppercase tracking-wide">Why Choose Us</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-corporate-900 font-serif">
            Your Trusted Partner in Spice Exports
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We combine traditional agricultural wisdom with modern supply chain efficiency to deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-stone-50 p-8 rounded-xl border border-stone-100 hover:shadow-lg hover:border-spice-turmeric/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-spice-turmeric transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-spice-terracotta group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-corporate-900 mb-3 font-serif">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
