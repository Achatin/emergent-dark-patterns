import { useState } from "react";
import Layout from "@/components/store/Layout";
import ProductCard from "@/components/store/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-8">Shop</h1>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-sm whitespace-nowrap transition-colors ${
                active === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
