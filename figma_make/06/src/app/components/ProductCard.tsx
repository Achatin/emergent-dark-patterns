import React from 'react';
import { Link } from 'react-router';
import { Product } from '../types/product';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.badge && (
            <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              product.badge === 'bestseller' ? 'bg-yellow-500' :
              product.badge === 'new' ? 'bg-green-500' :
              product.badge === 'sale' ? 'bg-red-500' :
              'bg-purple-500'
            }`}>
              {product.badge === 'bestseller' ? 'Bestseller' :
               product.badge === 'new' ? 'New' :
               product.badge === 'sale' ? 'Sale' :
               'Limited'}
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 rounded text-sm font-semibold">
              -{discount}%
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{product.category}</div>
          <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <Button
              size="sm"
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
