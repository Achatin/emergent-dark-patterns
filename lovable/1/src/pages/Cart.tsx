import { Link } from "react-router-dom";
import Layout from "@/components/store/Layout";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-24 text-center space-y-4">
          <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground/40" />
          <h1 className="font-heading text-3xl">Your cart is empty</h1>
          <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm mt-4"
          >
            Continue Shopping <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <h1 className="font-heading text-4xl mb-10">Cart</h1>

        <div className="space-y-0 divide-y divide-border">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 py-6 animate-fade-in">
              <Link to={`/product/${product.id}`} className="w-20 h-24 rounded-sm overflow-hidden bg-secondary shrink-0">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <Link to={`/product/${product.id}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                  <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-foreground" aria-label="Remove">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">${product.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="h-7 w-7 flex items-center justify-center border border-border rounded-sm hover:bg-secondary"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="h-7 w-7 flex items-center justify-center border border-border rounded-sm hover:bg-secondary"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <p className="text-sm font-medium self-end">${product.price * quantity}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 mt-2 space-y-4">
          <div className="flex justify-between text-lg">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-heading text-foreground">${totalPrice}</span>
          </div>
          <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout.</p>
          <Link
            to="/checkout"
            className="flex items-center justify-center gap-2 bg-foreground text-background w-full py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            Checkout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
