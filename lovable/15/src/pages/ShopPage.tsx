import { useSearchParams } from "react-router-dom";
import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/store-data";
import { useState, useMemo } from "react";

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filtered = useMemo(() => {
    let result = products;
    if (categoryParam !== "All") {
      result = result.filter((p) => p.category === categoryParam);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [categoryParam, search, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <StoreHeader />
      <main className="flex-1 container py-8">
        <h1 className="font-display text-3xl mb-6">
          {categoryParam === "All" ? "All Products" : categoryParam}
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
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
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  categoryParam === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-3 md:ml-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search products"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Sort products"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} products found</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products match your search.</p>
          </div>
        )}
      </main>
      <StoreFooter />
    </div>
  );
};

export default ShopPage;
