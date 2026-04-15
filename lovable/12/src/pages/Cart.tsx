import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const shipping = subtotal >= 100 ? 0 : 12;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h1 className="font-display text-3xl mb-3">Your Bag is Empty</h1>
        <p className="font-body text-sm text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl mb-8">Your Bag</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-0 divide-y divide-border">
          {items.map(item => (
            <div key={item.product.id} className="flex gap-4 py-6 first:pt-0">
              <Link to={`/product/${item.product.id}`} className="w-24 h-32 bg-card rounded-sm overflow-hidden shrink-0">
                <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/product/${item.product.id}`} className="font-body text-sm font-medium hover:text-accent transition-colors">{item.product.name}</Link>
                    {(item.size || item.color) && (
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {[item.color, item.size].filter(Boolean).join(' / ')}
                      </p>
                    )}
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-border rounded-sm">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 hover:bg-secondary transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 font-body text-xs">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 hover:bg-secondary transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="font-body text-sm font-medium">${item.product.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card rounded-sm p-8 h-fit sticky top-32">
          <h2 className="font-display text-xl mb-6">Order Summary</h2>
          <div className="space-y-3 font-body text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping === 0 ? <span className="text-fresh">Free</span> : `$${shipping.toFixed(2)}`}</span>
            </div>
            {subtotal < 100 && (
              <p className="text-xs text-accent">Add ${(100 - subtotal).toFixed(2)} more for free shipping!</p>
            )}
            <div className="border-t border-border pt-3 flex justify-between font-medium text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button asChild size="lg" className="w-full mt-6">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
          <Link to="/products" className="block text-center font-body text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
