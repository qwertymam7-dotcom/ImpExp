import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface FilterState {
  category: string;
  heatLevel: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, setFilters, isOpen, onClose }) => {
  const categories = ['All', 'Whole Spices', 'Powders', 'Blends'];
  const heatLevels = ['All', 'Mild', 'Medium', 'Hot', 'Extra Hot'];

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-100 lg:block lg:h-auto lg:z-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-6 h-full overflow-y-auto">
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h3 className="text-lg font-bold text-corporate-900">Filters</h3>
          <button onClick={onClose}><X className="h-5 w-5 text-gray-500" /></button>
        </div>

        <div className="space-y-8">
          {/* Category Filter */}
          <div>
            <h4 className="text-sm font-semibold text-spice-terracotta uppercase tracking-wider mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={filters.category === cat}
                    onChange={() => setFilters(prev => ({ ...prev, category: cat }))}
                    className="form-radio h-4 w-4 text-spice-turmeric border-gray-300 focus:ring-spice-turmeric"
                  />
                  <span className={cn("text-sm group-hover:text-spice-terracotta transition-colors", filters.category === cat ? "text-corporate-900 font-medium" : "text-gray-600")}>
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Heat Level Filter */}
          <div>
            <h4 className="text-sm font-semibold text-spice-terracotta uppercase tracking-wider mb-3">Heat Level</h4>
            <div className="space-y-2">
              {heatLevels.map((level) => (
                <label key={level} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="heatLevel" 
                    checked={filters.heatLevel === level}
                    onChange={() => setFilters(prev => ({ ...prev, heatLevel: level }))}
                    className="form-radio h-4 w-4 text-spice-turmeric border-gray-300 focus:ring-spice-turmeric"
                  />
                  <span className={cn("text-sm group-hover:text-spice-terracotta transition-colors", filters.heatLevel === level ? "text-corporate-900 font-medium" : "text-gray-600")}>
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-4"
            onClick={() => setFilters({ category: 'All', heatLevel: 'All' })}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};
