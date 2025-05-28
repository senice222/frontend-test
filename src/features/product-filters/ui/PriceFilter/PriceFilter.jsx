import React from 'react';
import { Input } from '../../../../shared/ui';
import { useFiltersStore } from '../../../../shared/store/filters';

const PriceFilter = () => {
  const { filters, setFilter } = useFiltersStore();

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setFilter('price', value);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Filter by Price
      </label>
      <Input
        type="text"
        placeholder="Enter price (e.g., 42, 42.29)..."
        value={filters.price}
        onChange={handlePriceChange}
        className="w-full"
      />
      {filters.price && (
        <p className="text-xs text-gray-500">
          Searching for prices containing: "{filters.price}"
        </p>
      )}
    </div>
  );
};

export default PriceFilter; 