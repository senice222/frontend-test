import React from 'react';
import { Button } from '../../../../shared/ui';
import { useFiltersStore } from '../../../../shared/store/filters';
import SearchFilter from '../SearchFilter/SearchFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import SubscriptionFilter from '../SubscriptionFilter/SubscriptionFilter';

const FiltersSidebar = () => {
  const { resetFilters, getActiveFiltersCount } = useFiltersStore();
  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        {activeFiltersCount > 0 && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {activeFiltersCount} active
          </span>
        )}
      </div>

      <div className="space-y-6">
        <SearchFilter />
          <PriceFilter />
        <SubscriptionFilter />
      </div>

      {activeFiltersCount > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={resetFilters}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FiltersSidebar; 