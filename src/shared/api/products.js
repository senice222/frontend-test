import { apiClient } from './base';

export const productsApi = {
  getProducts: async (params = {}) => {
    const response = await apiClient.get('/products', { params });
    
    return {
      data: response.data,
      totalCount: response.headers['x-total-count'],
      links: response.headers['link'],
    };
  },

  getProduct: async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  },
};

export const buildProductsParams = (filters = {}) => {
  const params = {};

  if (filters.page) {
    params._page = filters.page;
  }
  if (filters.limit) {
    params._limit = filters.limit;
  }

  if (filters.search) {
    params.tags_like = filters.search;
  }

  if (filters.price) {
    params.price = filters.price;
  }

  if (filters.subscription !== undefined) {
    params.subscription = filters.subscription;
  }

  if (filters.sortBy) {
    params._sort = filters.sortBy;
    params._order = filters.order || 'asc';
  }

  return params;
}; 