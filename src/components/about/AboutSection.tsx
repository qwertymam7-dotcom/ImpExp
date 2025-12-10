import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sprout, Scale, Truck } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: "Sustainable Farming",
    description: "We partner directly with farmers in the Western Ghats who practice organic and sustainable agriculture."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every batch undergoes rigorous lab testing for purity, moisture content, and essential oil levels."
  },
  {
    icon: Scale,
    title: "Fair Trade",
    description: "Ensuring fair prices for our farming communities while delivering competitive rates to global buyers."
  },
  {
    icon: Truck,
    title: "Global Logistics",
    description: "Efficient export handling with proper phytosanitary certification and secure packaging."
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold text-spice-terracotta uppercase tracking-wide mb-2">Our Heritage</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 font-serif mb-6">
              Rooted in Tradition, <br />Delivered with Excellence
            </h3>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Tamil Nadu has been the heart of the spice trade for centuries. From the ancient ports of the Chola dynasty to modern global commerce, our land is renowned for producing spices with unmatched flavor profiles.
              </p>
              <p>
                At TamilSpices, we preserve this legacy. We don't just trade; we curate. By maintaining close relationships with cultivation communities in Theni, Kanyakumari, and the Nilgiris, we ensure that the spice you receive is as authentic as the soil it grew in.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-spice-turmeric" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-corporate-900">{feature.title}</h4>
                    <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-spice-cream rounded-2xl -z-10 transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" 
              alt="Farmer drying spices" 
              className="rounded-xl shadow-lg w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-spice-turmeric">
              <p className="text-corporate-900 font-serif italic text-lg">
                "Quality is not an act, it is a habit. We bring the finest harvest to your doorstep."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
