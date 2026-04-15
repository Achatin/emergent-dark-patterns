import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Star, Minus, Plus, ChevronLeft, Check, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl mb-4">Product Not Found</h1>
        <Link to="/products" className="font-body text-accent">← Back to shop</Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addItem(product, quantity, selectedSize, selectedColor);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-xs text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-foreground transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-card rounded-sm overflow-hidden">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          {product.badge && (
            <span className={`absolute top-4 left-4 px-3 py-1.5 text-[10px] font-body font-semibold tracking-widest uppercase rounded-sm ${product.badge === 'sale' ? 'bg-sale text-accent-foreground' : 'bg-fresh text-accent-foreground'}`}>
              {product.badge === 'sale' ? 'Sale' : 'New'}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{product.category}</p>
          <h1 className="font-display text-3xl md:text-4xl mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
            ))}
            <span className="font-body text-xs text-muted-foreground ml-1">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-body text-2xl font-medium">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="font-body text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="bg-sale text-accent-foreground text-[10px] font-body font-semibold px-2 py-0.5 rounded-sm">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          {/* Colors */}
          {product.colors && (
            <div className="mb-5">
              <p className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-2">
                Color{selectedColor ? `: ${selectedColor}` : ''}
              </p>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === c.name ? 'border-accent scale-110' : 'border-border'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && (
            <div className="mb-6">
              <p className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-10 rounded-sm font-body text-xs border transition-colors ${
                      selectedSize === s
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:border-foreground/30'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-sm">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2.5 hover:bg-secondary transition-colors">
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-4 font-body text-sm min-w-[40px] text-center">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="p-2.5 hover:bg-secondary transition-colors">
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
            <Button onClick={handleAdd} size="lg" className="flex-1">
              Add to Bag — ${product.price * quantity}
            </Button>
          </div>

          {/* Trust signals */}
          <div className="space-y-3 pt-6 border-t border-border">
            <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
              <Truck className="w-4 h-4" /> Free shipping on orders over $100
            </div>
            <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
              <RotateCcw className="w-4 h-4" /> Free 30-day returns
            </div>
            <div className="flex items-center gap-3 font-body text-xs text-muted-foreground">
              <Check className="w-4 h-4" /> In stock — ships within 2 business days
            </div>
          </div>

          {/* Details accordion */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">Product Details</h3>
            <ul className="space-y-1.5">
              {product.details.map((d, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">·</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
