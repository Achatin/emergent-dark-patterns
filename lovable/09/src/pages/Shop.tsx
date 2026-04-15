import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS, CATEGORIES } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [sort, setSort] = useState<SortOption>("featured");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = PRODUCTS;
    if (categoryParam !== "All") {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    switch (sort) {
      case "price-asc": return [...result].sort((a, b) => a.price - b.price);
      case "price-desc": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [categoryParam, sort, search]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl md:text-4xl text-foreground">
          {categoryParam === "All" ? "All Products" : categoryParam}
        </h1>
        <p className="text-muted-foreground mt-1">{filtered.length} products</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8 mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="h-10 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent w-full md:w-64"
        />

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams(cat === "All" ? {} : { category: cat })}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                categoryParam === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="md:ml-auto flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm bg-background border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Products grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No products found</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
