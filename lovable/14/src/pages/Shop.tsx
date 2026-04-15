import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case "price-asc": return [...result].sort((a, b) => a.price - b.price);
      case "price-desc": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [activeCategory, search, sortBy]);

  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl mb-2">Shop All</h1>
      <p className="text-sm text-muted-foreground mb-8">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""} · All prices include applicable taxes
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Search products"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat === "All") {
                  searchParams.delete("category");
                } else {
                  searchParams.set("category", cat);
                }
                setSearchParams(searchParams);
              }}
              className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 text-sm rounded-md border bg-background"
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">No products found. Try adjusting your search or filters.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
