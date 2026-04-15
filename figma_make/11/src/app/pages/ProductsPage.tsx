import { useState } from 'react';
import { Link } from 'react-router';
import { products, categories } from '../data/products';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = products.filter((product) =>
    selectedCategory === 'All' ? true : product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-gray-600">
          Browse our collection of quality products. All prices include taxes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-6 border-b">
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-2">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:w-48">
          <label htmlFor="sort" className="block text-sm font-semibold mb-2">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group"
          >
            <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-lg font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-semibold group-hover:underline">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.category}</p>
              </div>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </Link>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
