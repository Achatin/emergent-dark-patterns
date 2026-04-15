import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { Lock } from 'lucide-react';

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal >= 100 ? 0 : 12;
  const total = subtotal + shipping;
  const [loading, setLoading] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl mb-4">No items to checkout</h1>
        <Button asChild><Link to="/products">Continue Shopping</Link></Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="font-display text-4xl mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-5 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          {/* Contact */}
          <div>
            <h2 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">Contact</h2>
            <input required type="email" placeholder="Email address" className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
          </div>

          {/* Shipping */}
          <div>
            <h2 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-3">
              <input required placeholder="First name" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              <input required placeholder="Last name" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
            <input required placeholder="Address" className="w-full mt-3 px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <input required placeholder="City" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              <input required placeholder="State" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              <input required placeholder="ZIP" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">Payment</h2>
            <input required placeholder="Card number" className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input required placeholder="MM / YY" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              <input required placeholder="CVC" className="px-4 py-3 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            <Lock className="w-4 h-4 mr-2" />
            {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </Button>

          <p className="font-body text-[10px] text-muted-foreground text-center">
            Your payment information is encrypted and secure.
          </p>
        </form>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-sm p-6 sticky top-32">
            <h2 className="font-display text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-secondary rounded-sm overflow-hidden shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-xs truncate">{item.product.name}</p>
                    <p className="font-body text-[10px] text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-body text-xs font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 font-body text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-medium text-base border-t border-border pt-2">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
