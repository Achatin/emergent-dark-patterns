import { Link } from "react-router-dom";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

const StoreHeader = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight">
          GOODS&CO
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=Accessories" className="text-muted-foreground hover:text-foreground transition-colors">
            Accessories
          </Link>
          <Link to="/shop?category=Footwear" className="text-muted-foreground hover:text-foreground transition-colors">
            Footwear
          </Link>
          <Link to="/shop?category=Home" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;
