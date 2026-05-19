import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, Shield, Truck, Leaf } from "lucide-react";

const Index = () => {
  const featured = products.filter((p) => p.inStock).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-secondary">
        <div className="container py-20 md:py-28">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight tracking-tight">
              Everyday goods,
              <br />
              honestly made.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Thoughtfully sourced products with transparent pricing, full material disclosure, and no hidden costs.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/products">
                Browse Collection <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-b">
        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">No hidden fees</span>
              <span className="text-xs text-muted-foreground">Price = what you pay</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Full material transparency</span>
              <span className="text-xs text-muted-foreground">Know what it's made of</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Free shipping over $75</span>
              <span className="text-xs text-muted-foreground">Flat $5 otherwise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display">Featured</h2>
            <p className="text-sm text-muted-foreground mt-1">Staff picks from our collection</p>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Values section */}
      <section className="bg-secondary">
        <div className="container py-16">
          <h2 className="text-2xl md:text-3xl font-display mb-8 text-center">Our commitments to you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-base font-semibold font-body">Transparent pricing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every price you see is the final price. No surprise fees at checkout. Shipping costs are shown upfront before you enter any personal information.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold font-body">Privacy first</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We collect only what's necessary to ship your order. No tracking pixels, no data brokers, no marketing profiles. Your data stays yours.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold font-body">Informed choices</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full material disclosure, origin information, and honest product descriptions. No manipulative urgency tactics or fake scarcity.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold font-body">Easy returns</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                30-day no-questions-asked returns. Prepaid return label included with every order. We want you to be genuinely happy with your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
