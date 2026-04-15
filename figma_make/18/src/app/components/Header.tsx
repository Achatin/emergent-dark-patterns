import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Shop
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              to="/shop"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Browse
            </Link>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
