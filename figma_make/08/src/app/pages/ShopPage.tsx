import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Filter, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { useCart } from '../hooks/useCart';

export function ShopPage() {
  const { onAddToCart } = useCart();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  // Get category from URL params
  const urlCategory = searchParams.get('category');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply URL category filter
    if (urlCategory && urlCategory !== 'All') {
      if (urlCategory === 'new') {
        filtered = filtered.filter(p => p.tags.includes('new'));
      } else if (urlCategory === 'sale') {
        filtered = filtered.filter(p => p.originalPrice);
      } else {
        filtered = filtered.filter(p => p.category === urlCategory);
      }
    }

    // Apply selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Apply price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(p => selectedTags.some(tag => p.tags.includes(tag)));
    }

    // Apply sorting
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
      default:
        // Featured: prioritize featured products
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategories, priceRange, selectedTags, sortBy, urlCategory]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 2000]);
    setSelectedTags([]);
    setSearchParams({});
  };

  const activeFiltersCount = selectedCategories.length + selectedTags.length + (urlCategory ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-gray-600">Discover our complete collection of quality products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="size-5" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary">{activeFiltersCount}</Badge>
                  )}
                </h2>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear
                  </Button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== 'All').map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category) || urlCategory === category}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    min={0}
                    max={2000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-3">Special Offers</h3>
                <div className="space-y-2">
                  {['new', 'sale', 'popular', 'premium', 'featured'].map((tag) => (
                    <div key={tag} className="flex items-center space-x-2">
                      <Checkbox
                        id={`tag-${tag}`}
                        checked={selectedTags.includes(tag)}
                        onCheckedChange={() => toggleTag(tag)}
                      />
                      <Label htmlFor={`tag-${tag}`} className="text-sm cursor-pointer capitalize">
                        {tag}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="size-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="ml-2">{activeFiltersCount}</Badge>
                  )}
                </Button>
                <p className="text-gray-600">
                  {filteredAndSortedProducts.length} products found
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="text-sm">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort" className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(urlCategory || selectedCategories.length > 0 || selectedTags.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {urlCategory && (
                  <Badge variant="secondary" className="gap-2">
                    {urlCategory}
                    <X
                      className="size-3 cursor-pointer"
                      onClick={() => setSearchParams({})}
                    />
                  </Badge>
                )}
                {selectedCategories.map(cat => (
                  <Badge key={cat} variant="secondary" className="gap-2">
                    {cat}
                    <X
                      className="size-3 cursor-pointer"
                      onClick={() => toggleCategory(cat)}
                    />
                  </Badge>
                ))}
                {selectedTags.map(tag => (
                  <Badge key={tag} variant="secondary" className="gap-2">
                    {tag}
                    <X
                      className="size-3 cursor-pointer"
                      onClick={() => toggleTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}

            {/* Products */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-gray-600 mb-4">No products found matching your filters.</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}