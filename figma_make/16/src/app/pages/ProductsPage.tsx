import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState<'all' | 'under100' | '100to500' | 'over500'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange === 'under100') {
      filtered = filtered.filter((p) => p.price < 100);
    } else if (priceRange === '100to500') {
      filtered = filtered.filter((p) => p.price >= 100 && p.price <= 500);
    } else if (priceRange === 'over500') {
      filtered = filtered.filter((p) => p.price > 500);
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">All Products</h1>
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="h-5 w-5" />
                <h3>Filters</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-3 text-sm">Category</h4>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handleCategoryChange(category)}
                        className="justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm">Price Range</h4>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    <Button
                      variant={priceRange === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPriceRange('all')}
                      className="justify-start"
                    >
                      All Prices
                    </Button>
                    <Button
                      variant={priceRange === 'under100' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPriceRange('under100')}
                      className="justify-start"
                    >
                      Under $100
                    </Button>
                    <Button
                      variant={priceRange === '100to500' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPriceRange('100to500')}
                      className="justify-start"
                    >
                      $100 - $500
                    </Button>
                    <Button
                      variant={priceRange === 'over500' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setPriceRange('over500')}
                      className="justify-start"
                    >
                      Over $500
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'All' && (
                <Badge variant="secondary" className="gap-2">
                  {selectedCategory}
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className="ml-1 hover:text-red-600"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange('all');
                  setSearchParams({});
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
