import React from 'react';
import { FiltersSidebar } from '../../features/product-filters';
import ProductsGrid from '../../widgets/ProductsGrid/ProductsGrid';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <FiltersSidebar />
            </div>
          </div>
          <div className="lg:col-span-3">
            <ProductsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 