import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <main className="container py-12">
      <h1 className="font-display text-3xl mb-8">
        {activeCategory || "All Products"}
      </h1>

      <div className="flex gap-3 flex-wrap mb-10">
        <button
          onClick={() => setSearchParams({})}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSearchParams({ category: c })}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === c
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-20">
          No products found in this category.
        </p>
      )}
    </main>
  );
};

export default Shop;
