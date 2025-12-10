import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { SpiceCard } from '../components/products/SpiceCard';
import { ProductFilters } from '../components/products/ProductFilters';
import { Button } from '../components/ui/Button';
import { spices } from '../data/spices';

export const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'All',
    heatLevel: 'All'
  });

  // Filter Logic
  const filteredSpices = spices.filter(spice => {
    const categoryMatch = filters.category === 'All' || spice.category === filters.category;
    const heatMatch = filters.heatLevel === 'All' || spice.heatLevel === filters.heatLevel;
    return categoryMatch && heatMatch;
  });

  return (
    <>
      <PageHeader 
        title="Our Spice Catalogue" 
        subtitle="Discover the authentic flavors of Tamil Nadu, harvested with care and processed for global export."
        backgroundImage="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={() => setIsFilterOpen(true)}
              className="w-full flex items-center justify-center"
            >
              <Filter className="w-4 h-4 mr-2" /> Filter Products
            </Button>
          </div>

          {/* Sidebar Filters */}
          <ProductFilters 
            filters={filters} 
            setFilters={setFilters} 
            isOpen={isFilterOpen} 
            onClose={() => setIsFilterOpen(false)} 
          />

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-bold text-corporate-900">{filteredSpices.length}</span> products
              </p>
              {/* Sort could go here */}
            </div>

            {filteredSpices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSpices.map((spice, index) => (
                  <SpiceCard key={spice.id} spice={spice} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-50 rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No products match your selected filters.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => setFilters({ category: 'All', heatLevel: 'All' })}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
