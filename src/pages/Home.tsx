import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { ProductGrid } from '../components/products/ProductGrid';
import { AboutSection } from '../components/about/AboutSection';
import { Testimonials } from '../components/home/Testimonials';
import { Recipes } from '../components/home/Recipes';
import { CTASection } from '../components/home/CTASection';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* Show only first 3 products on home page */}
      <ProductGrid limit={3} />
      <Recipes />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </>
  );
};
