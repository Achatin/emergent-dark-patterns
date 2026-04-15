import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="container pt-24 pb-16">
      <h1 className="font-heading text-3xl font-bold text-foreground">
        {activeCategory || "All Products"}
      </h1>

      {/* Category filters */}
      <div className="flex gap-3 mt-6 mb-10 flex-wrap">
        <button
          onClick={() => setSearchParams({})}
          className={`px-4 py-2 rounded text-xs font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-muted"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ category: cat })}
            className={`px-4 py-2 rounded text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-20">No products found.</p>
      )}
    </div>
  );
}
