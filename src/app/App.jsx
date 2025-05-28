import React from 'react';
import { QueryProvider } from './providers/QueryProvider';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

function App() {
  return (
    <QueryProvider>
      <ProductsPage />
    </QueryProvider>
  );
}

export default App; 