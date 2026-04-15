import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Star, Filter, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const categoryFilter = searchParams.get('category') || '';
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showFilters, setShowFilters] = useState(true);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...PRODUCTS];

    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by rating
    if (ratingFilter > 0) {
      filtered = filtered.filter(p => p.rating >= ratingFilter);
    }

    // Sort
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
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [categoryFilter, sortBy, priceRange, ratingFilter]);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleCategoryChange = (category: string) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {categoryFilter ? `${categoryFilter}` : 'All Products'}
          </h1>
          <p className="text-gray-600">{filteredAndSortedProducts.length} products found</p>
        </div>

        <div className="flex gap-8">
          {/* Filters sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0`}>
            <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </h2>
                <button
                  onClick={() => {
                    handleCategoryChange('');
                    setSortBy('featured');
                    setPriceRange([0, 2000]);
                    setRatingFilter(0);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={!categoryFilter}
                      onChange={() => handleCategoryChange('')}
                      className="mr-2"
                    />
                    <span className="text-sm">All Categories</span>
                  </label>
                  {CATEGORIES.map((cat) => (
                    <label key={cat.name} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === cat.name}
                        onChange={() => handleCategoryChange(cat.name)}
                        className="mr-2"
                      />
                      <span className="text-sm">{cat.name} ({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating filter */}
              <div>
                <h3 className="font-semibold mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4.5, 4, 3.5, 3].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={ratingFilter === rating}
                        onChange={() => setRatingFilter(rating)}
                        className="mr-2"
                      />
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{rating} & up</span>
                      </div>
                    </label>
                  ))}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      checked={ratingFilter === 0}
                      onChange={() => setRatingFilter(0)}
                      className="mr-2"
                    />
                    <span className="text-sm">All Ratings</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <main className="flex-1">
            {/* Sort and filter toggle */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>

              <div className="flex items-center space-x-2 ml-auto">
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition group">
                    <Link to={`/product/${product.id}`} className="block relative">
                      {product.price < 100 && (
                        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                          Hot Deal
                        </div>
                      )}
                      {product.stock < 20 && (
                        <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                          Low Stock
                        </div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                      />
                    </Link>
                    <div className="p-4">
                      <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold mb-2 hover:text-blue-600 transition line-clamp-2">{product.name}</h3>
                      </Link>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm ml-1 font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                          {product.price < 100 && (
                            <span className="text-sm text-gray-500 line-through ml-2">${(product.price * 1.4).toFixed(2)}</span>
                          )}
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('');
                    setPriceRange([0, 2000]);
                    setRatingFilter(0);
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
