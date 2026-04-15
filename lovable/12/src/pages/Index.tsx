import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const featured = products.slice(0, 4);
  const bestseller = products.find(p => p.id === '3')!;

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center" style={{ background: 'var(--hero-gradient)' }}>
        <div className="container relative z-10 text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 animate-fade-in-up">
            New Season Collection
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Intentional<br />by Design
          </h1>
          <p className="font-body text-primary-foreground/70 max-w-md mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Thoughtfully crafted essentials that stand the test of time. Made with care, priced with integrity.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/products">
                Shop the Collection <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border py-6">
        <div className="container flex flex-wrap justify-center gap-8 md:gap-16 text-xs font-body tracking-widest uppercase text-muted-foreground">
          <span>Free Shipping 100+</span>
          <span>30-Day Returns</span>
          <span>Sustainably Made</span>
          <span>Ethically Sourced</span>
        </div>
      </section>

      {/* Featured products */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Curated Selection</p>
            <h2 className="font-display text-3xl md:text-4xl">New Arrivals</h2>
          </div>
          <Link to="/products" className="font-body text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="container pb-20">
        <div className="grid md:grid-cols-2 gap-0 bg-card rounded-sm overflow-hidden">
          <div className="aspect-square md:aspect-auto">
            <img src={bestseller.images[0]} alt={bestseller.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-10 md:p-16">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Editor's Pick</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">{bestseller.name}</h2>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(bestseller.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
              ))}
              <span className="font-body text-xs text-muted-foreground ml-1">({bestseller.reviewCount})</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              {bestseller.description}
            </p>
            <Button asChild variant="default" size="lg" className="w-fit">
              <Link to={`/product/${bestseller.id}`}>
                Shop Now — ${bestseller.price}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary py-20">
        <div className="container text-center max-w-lg">
          <h2 className="font-display text-3xl mb-3">Stay in the Loop</h2>
          <p className="font-body text-sm text-muted-foreground mb-6">Get early access to new arrivals, exclusive sales, and stories from our studio.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <Button variant="default">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
