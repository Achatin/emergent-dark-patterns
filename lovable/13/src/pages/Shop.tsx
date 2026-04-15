import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, type Category } from "@/data/products";
import { Button } from "@/components/ui/button";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get("category") || "All") as Category;

  const [category, setCategory] = useState<Category>(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let result = products;
    if (category !== "All") result = result.filter((p) => p.category === category);
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
  }, [category, search, sort]);

  const handleCategory = (c: Category) => {
    setCategory(c);
    if (c === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", c);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <div className="container py-8">
        <h1 className="text-3xl md:text-4xl font-serif mb-2">Shop</h1>
        <p className="text-muted-foreground mb-8">Browse our curated collection of quality goods.</p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <Button
              key={c}
              variant={category === c ? "hero" : "outline"}
              size="sm"
              onClick={() => handleCategory(c)}
              className="rounded-full"
            >
              {c}
            </Button>
          ))}
        </div>

        {/* Results */}
        <p className="text-sm text-muted-foreground mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={category + sort + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg font-medium text-muted-foreground">No products found</p>
            <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
