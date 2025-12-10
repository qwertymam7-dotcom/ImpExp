import React from 'react';
import { teamMembers } from '../../data/team';

export const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-spice-terracotta uppercase tracking-wide">The Experts</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-corporate-900 font-serif">
            Meet Our Artisans
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From agronomists to logistics experts, our team is dedicated to delivering the finest spices to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-spice-cream group-hover:border-spice-turmeric transition-colors duration-300 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-corporate-900 text-white text-xs px-3 py-1 rounded-full">
                  {member.role}
                </div>
              </div>
              <h4 className="text-xl font-bold text-corporate-900 font-serif">{member.name}</h4>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
