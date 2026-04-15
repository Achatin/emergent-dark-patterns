import { Link } from "react-router-dom";
import { Trash2, ArrowLeft, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, totalSavings } = useCart();

  const shipping = totalPrice >= 75 ? 0 : 9.99;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <div className="container py-8 flex-1">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-serif mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Discover something you love.</p>
            <Button variant="hero" asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-4 p-4 rounded-xl border bg-card"
                >
                  <Link to={`/product/${item.product.id}`} className="shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold truncate hover:text-primary transition-colors">{item.product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.product.category}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-sm hover:bg-muted transition-colors"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 text-sm font-medium border-x">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-sm hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                    {item.product.originalPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                        ${(item.product.originalPrice * item.quantity).toFixed(2)}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-4">
                <ArrowLeft className="h-4 w-4" /> Continue Shopping
              </Link>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-xl border bg-card p-6 sticky top-24">
                <h2 className="text-lg font-serif mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-success">
                      <span>You Save</span>
                      <span className="font-medium">-${totalSavings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-primary">
                      Add ${(75 - totalPrice).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="border-t pt-3 flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="w-full mt-6" asChild>
                  <Link to="/checkout">
                    Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Secure checkout • SSL encrypted
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
