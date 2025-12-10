import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { FAQAccordion } from '../components/contact/FAQAccordion';
import { Map } from '../components/contact/Map';
import type { ContactFormData } from '../types';
import { cn } from '../lib/utils';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-corporate-900 mb-4 font-serif">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a bulk importer or a home chef, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-serif font-bold text-corporate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-spice-cream p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-spice-terracotta" />
                  </div>
                  <div>
                    <p className="font-medium text-corporate-900">Headquarters</p>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      42, Spice Bazaar Road,<br />
                      Theni, Tamil Nadu 625531<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-spice-cream p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-spice-terracotta" />
                  </div>
                  <div>
                    <p className="font-medium text-corporate-900">Phone Support</p>
                    <p className="text-gray-600 text-sm mt-1">+91 4546 255 123</p>
                    <p className="text-gray-600 text-sm">Mon-Fri, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-spice-cream p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-spice-terracotta" />
                  </div>
                  <div>
                    <p className="font-medium text-corporate-900">Email Us</p>
                    <p className="text-gray-600 text-sm mt-1">exports@tamilspices.com</p>
                    <p className="text-gray-600 text-sm">sales@tamilspices.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-8">Thank you for contacting us. We will get back to you within 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input
                        id="name"
                        type="text"
                        className={cn(
                          "w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-spice-turmeric focus:border-transparent outline-none transition-all",
                          errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                        )}
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        className={cn(
                          "w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-spice-turmeric focus:border-transparent outline-none transition-all",
                          errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                        )}
                        placeholder="john@example.com"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-spice-turmeric focus:border-transparent outline-none transition-all"
                        placeholder="Your Company Ltd."
                        {...register("company")}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-spice-turmeric focus:border-transparent outline-none transition-all bg-white"
                        {...register("productInterest")}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="bulk">Bulk Export Quote</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Order Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-spice-turmeric focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map & FAQ Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Map />
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};
