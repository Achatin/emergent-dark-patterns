import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('featured');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, sortBy]);

  return (
    <div className="container py-12">
      <div className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl mb-2">Shop</h1>
        <p className="font-body text-sm text-muted-foreground">{filtered.length} products</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Category filter */}
        <div className="flex gap-1 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSearchParams(cat.id === 'all' ? {} : { category: cat.id })}
              className={`px-4 py-2 rounded-sm font-body text-xs tracking-wide transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="px-3 py-2 bg-background border border-border rounded-sm font-body text-xs focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((p, i) => (
          <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground font-body py-20">No products found in this category.</p>
      )}
    </div>
  );
};

export default Products;
