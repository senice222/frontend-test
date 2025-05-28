import { create } from 'zustand';

export const useFiltersStore = create((set, get) => ({
  filters: {
    search: '',
    price: '',
    subscription: undefined,
    page: 1,
    limit: 12,
    sortBy: '',
    order: 'asc',
  },

  setFilter: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
        page: key === 'page' ? value : 1,
      },
    }));
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    }));
  },

  resetFilters: () => {
    set({
      filters: {
        search: '',
        price: '',
        subscription: undefined,
        page: 1,
        limit: 12,
        sortBy: '',
        order: 'asc',
      },
    });
  },

  getActiveFiltersCount: () => {
    const { filters } = get();
    let count = 0;
    if (filters.search) count++;
    if (filters.price) count++;
    if (filters.subscription !== undefined) count++;
    return count;
  },
})); 