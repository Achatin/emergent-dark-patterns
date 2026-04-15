import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (categoryFilter) {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    filtered = filtered.filter(p => p.rating >= minRating);

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return filtered;
  }, [categoryFilter, priceRange, minRating, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">
          {categoryFilter ? categoryFilter : 'All Products'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} products found
        </p>
      </div>

      <div className="flex gap-8">
        <aside
          className={`${
            showFilters ? 'block' : 'hidden'
          } md:block fixed md:static inset-0 bg-white z-40 md:z-0 w-64 flex-shrink-0 p-4 md:p-0 overflow-y-auto`}
        >
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-xl">Filters</h2>
            <button onClick={() => setShowFilters(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSearchParams({})}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    !categoryFilter
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => setSearchParams({ category: cat.name })}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      categoryFilter === cat.name
                        ? 'bg-black text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={e =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Minimum Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1, 0].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(rating)}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      minRating === rating
                        ? 'bg-black text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {rating > 0 ? `${rating}+ Stars` : 'All Ratings'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setPriceRange([0, 1000]);
                setMinRating(0);
                setSearchParams({});
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(true)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="featured">Featured</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">
                No products found matching your criteria
              </p>
              <button
                onClick={() => {
                  setPriceRange([0, 1000]);
                  setMinRating(0);
                  setSearchParams({});
                }}
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
