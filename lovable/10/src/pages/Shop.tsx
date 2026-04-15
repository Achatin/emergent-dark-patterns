import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory, type Category } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get("category") as Category) || "All";

  const filtered = getProductsByCategory(activeCategory);

  return (
    <main className="container py-10">
      <h1 className="font-display text-3xl text-foreground mb-2">Shop</h1>
      <p className="text-muted-foreground text-sm mb-8">
        All prices include materials, labor, and our transparent margin.
      </p>

      {/* Category filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              if (cat === "All") {
                setSearchParams({});
              } else {
                setSearchParams({ category: cat });
              }
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
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
