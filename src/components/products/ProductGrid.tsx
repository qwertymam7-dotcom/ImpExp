import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SpiceCard } from './SpiceCard';
import { spices } from '../../data/spices';
import { Button } from '../ui/Button';

interface ProductGridProps {
  limit?: number;
  showTitle?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ limit, showTitle = true }) => {
  const displayedSpices = limit ? spices.slice(0, limit) : spices;

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-spice-terracotta uppercase tracking-wide">Our Catalogue</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-corporate-900 font-serif">
              Premium Spices from Tamil Nadu
            </h3>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in high-grade spices cultivated with traditional methods and processed to meet international export standards.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSpices.map((spice, index) => (
            <SpiceCard key={spice.id} spice={spice} index={index} />
          ))}
        </div>

        {limit && limit < spices.length && (
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View Full Catalogue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
