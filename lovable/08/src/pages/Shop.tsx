import { useSearchParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories, products } from "@/data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let items = getProductsByCategory(categoryParam);
    switch (sort) {
      case "price-asc": return [...items].sort((a, b) => a.price - b.price);
      case "price-desc": return [...items].sort((a, b) => b.price - a.price);
      case "rating": return [...items].sort((a, b) => b.rating - a.rating);
      case "newest": return [...items].sort((a, b) => (b.tags.includes("new") ? 1 : 0) - (a.tags.includes("new") ? 1 : 0));
      default: return items;
    }
  }, [categoryParam, sort]);

  const currentCategory = categories.find(c => c.id === categoryParam);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{currentCategory?.name || "Shop"}</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl">{currentCategory?.name || "All Products"}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground font-body">{filtered.length} products</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-sm font-body border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-1 focus:ring-accent"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={cat.id === "all" ? "/shop" : `/shop?category=${cat.id}`}
            className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
              categoryParam === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground font-body">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
