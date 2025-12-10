import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { AboutSection } from '../components/about/AboutSection';
import { Timeline } from '../components/about/Timeline';
import { Sustainability } from '../components/about/Sustainability';
import { Team } from '../components/about/Team';

export const About = () => {
  return (
    <>
      <PageHeader 
        title="Our Heritage" 
        subtitle="A legacy of agriculture passed down through generations in the fertile lands of Tamil Nadu."
        backgroundImage="https://images.unsplash.com/photo-1600626333393-39a7d4096686?q=80&w=2070&auto=format&fit=crop"
      />
      
      <AboutSection />
      <Timeline />
      <Sustainability />
      <Team />
    </>
  );
};
