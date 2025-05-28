import React from 'react';
import { useFiltersStore } from '../../../../shared/store/filters';

const SubscriptionFilter = () => {
  const { filters, setFilter } = useFiltersStore();

  const handleSubscriptionChange = (e) => {
    const value = e.target.value;
    if (value === 'all') {
      setFilter('subscription', undefined);
    } else {
      setFilter('subscription', value === 'true');
    }
  };

  const getSelectedValue = () => {
    if (filters.subscription === undefined) return 'all';
    return filters.subscription.toString();
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Subscription
      </label>
      <select
        value={getSelectedValue()}
        onChange={handleSubscriptionChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        <option value="all">All Products</option>
        <option value="true">Subscription Available</option>
        <option value="false">No Subscription</option>
      </select>
      {filters.subscription !== undefined && (
        <p className="text-xs text-gray-500">
          {filters.subscription ? 'Subscription: Yes' : 'Subscription: No'}
        </p>
      )}
    </div>
  );
};

export default SubscriptionFilter; 