import React from 'react';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
        <img
          src={product.image_src}
          alt={product.title}
          className="h-48 w-full object-cover object-center"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300.png?text=No+Image';
          }}
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
            {product.title}
          </h3>
          {product.subscription && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
              Subscription
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{product.vendor}</p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {product.tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.subscription && product.subscription_discount && (
              <span className="text-sm text-green-600">
                Save {product.subscription_discount}% with subscription
              </span>
            )}
          </div>
          
          <span className="text-xs text-gray-500">
            SKU: {product.sku}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 