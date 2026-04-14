import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

type SortOption = "featured" | "price-low" | "price-high" | "rating";

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = (searchParams.get("category") || "All") as Category;
  const [sort, setSort] = useState<SortOption>("featured");
  const [search, setSearch] = useState("");

  let filtered = categoryParam === "All" ? [...products] : products.filter((p) => p.category === categoryParam);

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  switch (sort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  return (
    <main className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-serif mb-2">Shop{categoryParam !== "All" ? ` ${categoryParam}` : " All"}</h1>
        <p className="text-sm text-muted-foreground">{filtered.length} products</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                const params = new URLSearchParams(searchParams);
                if (cat === "All") params.delete("category");
                else params.set("category", cat);
                setSearchParams(params);
              }}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wide rounded-full border transition-colors ${
                categoryParam === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-ring w-40"
          />
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm bg-background border border-border rounded-md px-2 py-2 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-20">No products found. Try adjusting your filters.</p>
      )}
    </main>
  );
}
