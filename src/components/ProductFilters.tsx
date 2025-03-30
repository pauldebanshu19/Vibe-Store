'use client';

import { Sliders, X } from 'lucide-react';

interface FilterState {
  category: string;
  priceRange: string;
  sortBy: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

const CATEGORIES = ['Clothing', 'Footwear', 'Accessories', 'Electronics'];
const PRICE_RANGES = [
  { label: 'Under $25', value: '0-25' },
  { label: '$25 - $50', value: '25-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: 'Over $100', value: '100-1000' },
];
const SORT_OPTIONS = [
  { label: 'Name (A-Z)', value: 'name' },
  { label: 'Price (Low to High)', value: 'price-asc' },
  { label: 'Price (High to Low)', value: 'price-desc' },
];

export default function ProductFilters({ filters, onChange }: ProductFiltersProps) {
  const clearFilters = () => {
    onChange({
      category: '',
      priceRange: '',
      sortBy: 'name',
    });
  };

  const hasActiveFilters = filters.category || filters.priceRange;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-gray-900">
          <Sliders className="w-5 h-5" />
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>
      
      <div className="space-y-8">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
          <div className="space-y-2">
            <button
              onClick={() => onChange({ ...filters, category: '' })}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                filters.category === '' 
                  ? 'bg-black text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => onChange({ ...filters, category })}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  filters.category === category 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
          <div className="space-y-2">
            <button
              onClick={() => onChange({ ...filters, priceRange: '' })}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                filters.priceRange === '' 
                  ? 'bg-black text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Any Price
            </button>
            {PRICE_RANGES.map(range => (
              <button
                key={range.value}
                onClick={() => onChange({ ...filters, priceRange: range.value })}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  filters.priceRange === range.value 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
          <select
            value={filters.sortBy}
            onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
          >
            {SORT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 