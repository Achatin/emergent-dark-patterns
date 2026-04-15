import hoodieImg from "@/assets/product-hoodie.jpg";
import sneakersImg from "@/assets/product-sneakers.jpg";
import capImg from "@/assets/product-cap.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import watchImg from "@/assets/product-watch.jpg";
import sunglassesImg from "@/assets/product-sunglasses.jpg";
import backpackImg from "@/assets/product-backpack.jpg";
import joggersImg from "@/assets/product-joggers.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  category: string;
  sizes?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "oversized-hoodie",
    name: "Oversized Essentials Hoodie",
    price: 120,
    description: "Premium heavyweight cotton hoodie with a relaxed oversized fit. Designed for layering or standalone wear.",
    details: ["100% organic cotton", "450 GSM heavyweight fleece", "Oversized fit", "Kangaroo pocket", "Ribbed cuffs & hem"],
    image: hoodieImg,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "retro-sneakers",
    name: "Retro Runner Sneakers",
    price: 189,
    description: "Classic silhouette meets modern comfort. Leather upper with suede overlays and cushioned midsole.",
    details: ["Full-grain leather upper", "Suede overlays", "EVA cushioned midsole", "Rubber outsole", "Lace-up closure"],
    image: sneakersImg,
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11", "12"],
    featured: true,
  },
  {
    id: "structured-cap",
    name: "Structured Logo Cap",
    price: 45,
    description: "Six-panel structured cap with embroidered logo. Adjustable strap for a perfect fit.",
    details: ["100% cotton twill", "Structured six-panel", "Embroidered logo", "Adjustable metal clasp", "Pre-curved brim"],
    image: capImg,
    category: "Accessories",
    featured: true,
  },
  {
    id: "essential-tee",
    name: "Essential Heavyweight Tee",
    price: 65,
    description: "The perfect everyday tee. Heavyweight cotton with a boxy fit and dropped shoulders.",
    details: ["100% cotton", "280 GSM", "Boxy fit", "Dropped shoulders", "Reinforced collar"],
    image: tshirtImg,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "minimal-watch",
    name: "Minimal Timepiece",
    price: 295,
    description: "Japanese quartz movement with a clean matte black dial. Premium Italian leather strap.",
    details: ["Japanese quartz movement", "Matte black dial", "Italian leather strap", "40mm case", "5 ATM water resistance"],
    image: watchImg,
    category: "Accessories",
    featured: true,
  },
  {
    id: "acetate-sunglasses",
    name: "Acetate Frame Sunglasses",
    price: 155,
    description: "Handcrafted acetate frames with polarized lenses. Timeless square shape.",
    details: ["Handcrafted acetate", "Polarized lenses", "UV400 protection", "Spring hinges", "Microfiber pouch included"],
    image: sunglassesImg,
    category: "Accessories",
  },
  {
    id: "utility-backpack",
    name: "Utility Backpack",
    price: 175,
    description: "Water-resistant nylon with padded laptop compartment. Built for daily commutes.",
    details: ["Water-resistant nylon", "Padded 15\" laptop sleeve", "Multiple compartments", "YKK zippers", "Padded shoulder straps"],
    image: backpackImg,
    category: "Accessories",
  },
  {
    id: "tech-joggers",
    name: "Tech Fleece Joggers",
    price: 98,
    description: "Engineered fleece with tapered fit. Zippered pockets and elastic cuffs.",
    details: ["Tech fleece fabric", "Tapered fit", "Zippered side pockets", "Elastic waistband with drawcord", "Ribbed cuffs"],
    image: joggersImg,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
