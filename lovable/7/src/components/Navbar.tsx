import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          NOIR<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=Apparel" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Apparel
          </Link>
          <Link to="/shop?category=Accessories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Accessories
          </Link>
          <Link to="/shop?category=Footwear" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Footwear
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container flex flex-col gap-4 py-6">
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">Shop</Link>
              <Link to="/shop?category=Apparel" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">Apparel</Link>
              <Link to="/shop?category=Accessories" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">Accessories</Link>
              <Link to="/shop?category=Footwear" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">Footwear</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
