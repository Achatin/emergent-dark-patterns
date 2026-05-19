import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImg from "@/assets/hero-lifestyle.jpg";

const featuredProducts = products.slice(0, 4);

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-shop grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Everyday essentials, made to last
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">
            Thoughtfully curated goods for mindful living. Quality materials, timeless design, fair prices.
          </p>
          <Link to="/shop">
            <Button size="lg" className="mt-2 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Shop Collection <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src={heroImg}
            alt="Curated lifestyle goods flatlay"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="container-shop py-16">
      <h2 className="mb-8 text-center text-3xl text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {["Bags", "Home", "Accessories", "Lifestyle"].map((cat) => (
          <Link
            key={cat}
            to={`/shop?category=${cat}`}
            className="group flex h-28 items-center justify-center rounded-lg bg-secondary transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span className="font-display text-xl">{cat}</span>
          </Link>
        ))}
      </div>
    </section>

    {/* Featured */}
    <section className="container-shop pb-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl text-foreground">Trending Now</h2>
        <Link to="/shop" className="text-sm font-medium text-accent hover:underline">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {featuredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
