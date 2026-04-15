import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { products } from "../data/products";

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Shop All Products</h1>
        <p className="text-neutral-600">
          {filtered.length} {filtered.length === 1 ? "product" : "products"} • All prices include tax estimates • Free shipping over $50
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 mb-12 pb-6 border-b border-neutral-200 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? "bg-neutral-900 text-white"
                : "border border-neutral-300 text-neutral-700 hover:border-neutral-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={`/product/${product.id}`} className="group block">
              <div className="aspect-square overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-neutral-500">{product.category}</p>
                <h3 className="group-hover:underline">{product.name}</h3>
                <p className="text-lg">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-neutral-500">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
