import React from 'react';
import { cn } from '../../lib/utils';

interface MapProps {
  className?: string;
}

export const Map: React.FC<MapProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-full bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100 z-0",
      // Explicit height controls for different breakpoints
      "h-[400px] md:h-[450px] lg:h-full lg:min-h-[500px]", 
      className
    )}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62904.36449833534!2d77.45863965820312!3d10.010156900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b076cb08c3561b1%3A0x675c9636660d2680!2sTheni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709827364521!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Location of TamilSpices HQ in Theni, Tamil Nadu"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};
