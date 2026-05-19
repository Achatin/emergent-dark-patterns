import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container flex-1 flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h1 className="heading-display text-2xl mb-2">Your Cart is Empty</h1>
            <p className="text-muted-foreground text-sm mb-6">Looks like you haven't added anything yet.</p>
            <Button asChild className="rounded-full">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container py-10">
        <h1 className="heading-display text-3xl md:text-4xl mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 p-4 rounded-lg bg-secondary/50">
                <Link to={`/product/${product.id}`} className="shrink-0">
                  <img src={product.image} alt={product.name} className="h-24 w-20 object-cover rounded-md" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <Link to={`/product/${product.id}`} className="text-sm font-medium hover:text-accent transition-colors truncate">
                      {product.name}
                    </Link>
                    <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-foreground ml-2 shrink-0">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{product.category}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 border rounded-full px-1">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1 hover:text-accent transition-colors">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1 hover:text-accent transition-colors">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold">${product.price * quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/50 rounded-lg p-6 h-fit sticky top-24">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{totalPrice >= 150 ? "Free" : "$12"}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>${totalPrice >= 150 ? totalPrice : totalPrice + 12}</span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full mt-6 rounded-full">
              <Link to="/checkout">Checkout <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
