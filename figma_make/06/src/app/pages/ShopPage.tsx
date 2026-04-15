import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState<[number]>([500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';
  const saleParam = searchParams.get('sale');

  const categories = [...new Set(products.map(p => p.category))];
  const badges = ['bestseller', 'new', 'sale', 'limited'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (categoryParam) {
      filtered = filtered.filter(p => p.category === categoryParam);
    }

    if (selectedCategories.length > 0 && !categoryParam) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedBadges.length > 0) {
      filtered = filtered.filter(p => p.badge && selectedBadges.includes(p.badge));
    }

    if (saleParam) {
      filtered = filtered.filter(p => p.originalPrice);
    }

    filtered = filtered.filter(p => p.price <= priceRange[0]);

    switch (sortParam) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.badge === 'bestseller' ? 1 : 0) - (a.badge === 'bestseller' ? 1 : 0));
    }

    return filtered;
  }, [categoryParam, selectedCategories, selectedBadges, priceRange, sortParam, saleParam]);

  const handleSortChange = (value: string) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('sort', value);
      return newParams;
    });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBadge = (badge: string) => {
    setSelectedBadges(prev =>
      prev.includes(badge)
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBadges([]);
    setPriceRange([500]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            {categoryParam ? categoryParam : saleParam ? 'Sale Items' : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} products found
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden flex-shrink-0`}>
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear
                </Button>
              </div>

              {/* Categories */}
              {!categoryParam && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center gap-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={category} className="cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number])}
                    max={500}
                    step={10}
                    className="mb-2"
                  />
                  <div className="text-sm text-gray-600">
                    Up to ${priceRange[0]}
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Special Offers</h3>
                <div className="space-y-2">
                  {badges.map(badge => (
                    <div key={badge} className="flex items-center gap-2">
                      <Checkbox
                        id={badge}
                        checked={selectedBadges.includes(badge)}
                        onCheckedChange={() => toggleBadge(badge)}
                      />
                      <Label htmlFor={badge} className="cursor-pointer capitalize">
                        {badge}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <div className="flex items-center gap-4 ml-auto">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select value={sortParam} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No products found</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
