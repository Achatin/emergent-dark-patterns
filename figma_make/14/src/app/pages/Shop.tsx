import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { SlidersHorizontal } from 'lucide-react';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory);

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="mb-2">All Products</h1>
        <p className="text-muted-foreground">
          {filteredAndSortedProducts.length} products found
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="w-5 h-5" />
                <h3>Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-sm">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-input-background border border-border rounded text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-border text-xs text-muted-foreground">
                  <p className="mb-2">✓ All prices include taxes</p>
                  <p className="mb-2">✓ Free shipping over $50</p>
                  <p>✓ In stock items ship within 24hrs</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                        <span className="text-sm px-4 py-2 bg-muted rounded">Out of Stock</span>
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="line-clamp-2 flex-1">{product.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">
                        ★ {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
