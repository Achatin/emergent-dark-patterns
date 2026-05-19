import { Link } from 'react-router';
import { Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-3">
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full z-10">
            {product.badge}
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
            Sale
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-medium mb-1 group-hover:underline">{product.name}</h3>
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-600 ml-2">({product.reviewCount})</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
        )}
      </div>
    </Link>
  );
}
