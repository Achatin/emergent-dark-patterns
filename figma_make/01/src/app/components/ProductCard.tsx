import { Link } from 'react-router';
import { Product } from '../data/products';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success('Added to cart!');
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge === 'bestseller' && (
              <Badge className="bg-yellow-500">Best Seller</Badge>
            )}
            {product.badge === 'new' && (
              <Badge className="bg-green-500">New</Badge>
            )}
            {product.badge === 'limited' && (
              <Badge className="bg-red-500">Limited Stock</Badge>
            )}
            {discountPercent > 0 && (
              <Badge variant="destructive">-{discountPercent}%</Badge>
            )}
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              onClick={handleAddToCart}
              className="shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm ml-1">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Warning */}
          {product.inStock < 20 && (
            <p className="text-sm text-red-500 mt-2">
              Only {product.inStock} left in stock!
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
