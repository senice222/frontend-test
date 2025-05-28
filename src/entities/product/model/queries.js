import { useQuery } from '@tanstack/react-query';
import { productsApi, buildProductsParams } from '../../../shared/api/products';

export const useProducts = (filters = {}) => {
  const params = buildProductsParams(filters);
  
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productsApi.getProducts(params),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, 
  });
};

export const useProduct = (id, options = {}) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productsApi.getProduct(id),
    enabled: !!id,
    ...options,
  });
}; 