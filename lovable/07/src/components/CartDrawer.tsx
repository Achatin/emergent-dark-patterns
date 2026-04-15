import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col bg-background border-border w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-heading text-foreground">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 p-3 rounded bg-card">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-16 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-heading font-medium text-foreground truncate">{item.product.name}</h4>
                    {item.size && <p className="text-xs text-muted-foreground">Size: {item.size}</p>}
                    <p className="text-sm text-primary font-medium mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                        className="h-6 w-6 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-foreground"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs text-foreground w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                        className="h-6 w-6 flex items-center justify-center rounded border border-border text-muted-foreground hover:text-foreground"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="ml-auto text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-heading text-lg font-bold text-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading"
                onClick={() => {
                  setIsCartOpen(false);
                  navigate("/checkout");
                }}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
