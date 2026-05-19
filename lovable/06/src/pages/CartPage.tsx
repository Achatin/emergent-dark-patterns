import { Link, useNavigate } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground/40" />
            <h1 className="text-2xl tracking-tight">Your cart is empty</h1>
            <p className="text-muted-foreground">Discover our collection and find something you love.</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl tracking-tight mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground mb-8">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map(({ product, quantity }) => (
                <motion.div
                  key={product.id}
                  layout
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-4 p-4 rounded-lg border bg-card"
                >
                  <Link to={`/product/${product.id}`} className="shrink-0">
                    <img src={product.image} alt={product.name} className="h-24 w-24 rounded-md object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${product.id}`} className="text-sm font-medium hover:text-accent transition-colors line-clamp-2">
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-0.5">{product.category}</p>
                    <p className="text-sm font-semibold mt-2">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-destructive transition-colors p-1" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-1 border rounded-md">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 hover:bg-secondary transition-colors" disabled={quantity <= 1}>
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium px-2">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 hover:bg-secondary transition-colors">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card p-6 space-y-4 sticky top-24">
              <h2 className="font-display text-lg">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? <span className="text-success font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
                </div>
                {subtotal < 100 && (
                  <p className="text-xs text-accent">Add ${(100 - subtotal).toFixed(2)} more for free shipping!</p>
                )}
              </div>
              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button onClick={() => navigate("/checkout")} className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/shop" className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
