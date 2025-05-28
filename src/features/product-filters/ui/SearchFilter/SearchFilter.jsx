import React from 'react';
import { Input } from '../../../../shared/ui';
import { useFiltersStore } from '../../../../shared/store/filters';

const SearchFilter = () => {
  const { filters, setFilter } = useFiltersStore();

  const handleSearchChange = (e) => {
    setFilter('search', e.target.value);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Search by Tags
      </label>
      <Input
        type="text"
        placeholder="Search tags (e.g., Dog, Cat)..."
        value={filters.search}
        onChange={handleSearchChange}
        className="w-full"
      />
      {filters.search && (
        <p className="text-xs text-gray-500">
          Searching for: "{filters.search}"
        </p>
      )}
    </div>
  );
};

export default SearchFilter; 