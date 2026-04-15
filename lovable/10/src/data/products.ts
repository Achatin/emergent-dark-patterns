import leatherBag from "@/assets/products/leather-bag.jpg";
import ceramicMug from "@/assets/products/ceramic-mug.jpg";
import canvasTote from "@/assets/products/canvas-tote.jpg";
import woolScarf from "@/assets/products/wool-scarf.jpg";
import waterBottle from "@/assets/products/water-bottle.jpg";
import linenJournal from "@/assets/products/linen-journal.jpg";
import sunglasses from "@/assets/products/sunglasses.jpg";
import beeswaxCandle from "@/assets/products/beeswax-candle.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  category: string;
  image: string;
  inStock: boolean;
  materials: string;
}

export const categories = [
  "All",
  "Bags",
  "Home",
  "Accessories",
  "Stationery",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "leather-crossbody",
    name: "Leather Crossbody Bag",
    price: 128.00,
    description: "Hand-stitched crossbody bag made from full-grain vegetable-tanned leather. Ages beautifully with use.",
    details: [
      "Full-grain vegetable-tanned leather",
      "Adjustable strap (100–130 cm)",
      "Interior zip pocket + phone slot",
      "Dimensions: 24 × 18 × 7 cm",
    ],
    category: "Bags",
    image: leatherBag,
    inStock: true,
    materials: "100% vegetable-tanned cowhide leather, brass hardware",
  },
  {
    id: "ceramic-mug",
    name: "Speckled Ceramic Mug",
    price: 32.00,
    description: "Handmade stoneware mug with a matte speckled glaze. Microwave and dishwasher safe.",
    details: [
      "Hand-thrown stoneware",
      "Matte speckled white glaze",
      "Capacity: 350 ml",
      "Microwave & dishwasher safe",
    ],
    category: "Home",
    image: ceramicMug,
    inStock: true,
    materials: "Stoneware clay, food-safe glaze",
  },
  {
    id: "canvas-tote",
    name: "Organic Canvas Tote",
    price: 44.00,
    description: "Heavyweight organic cotton canvas tote. Reinforced handles and an interior pocket for everyday carry.",
    details: [
      "12 oz organic cotton canvas",
      "Reinforced double-stitched handles",
      "Interior slip pocket",
      "Dimensions: 40 × 38 × 12 cm",
    ],
    category: "Bags",
    image: canvasTote,
    inStock: true,
    materials: "100% GOTS-certified organic cotton",
  },
  {
    id: "wool-scarf",
    name: "Merino Wool Scarf",
    price: 68.00,
    description: "Ultra-soft merino wool scarf in a timeless charcoal grey. Lightweight yet warm.",
    details: [
      "100% extra-fine merino wool",
      "Dimensions: 180 × 35 cm",
      "Naturally temperature-regulating",
      "Hand wash or dry clean",
    ],
    category: "Accessories",
    image: woolScarf,
    inStock: true,
    materials: "100% extra-fine merino wool (19.5 micron)",
  },
  {
    id: "water-bottle",
    name: "Matte Black Water Bottle",
    price: 36.00,
    description: "Double-walled stainless steel bottle. Keeps drinks cold 24 hrs or hot 12 hrs.",
    details: [
      "18/8 stainless steel, double-walled",
      "Capacity: 500 ml",
      "BPA-free leak-proof cap",
      "Matte powder-coated finish",
    ],
    category: "Accessories",
    image: waterBottle,
    inStock: true,
    materials: "18/8 stainless steel, BPA-free polypropylene cap",
  },
  {
    id: "linen-journal",
    name: "Linen-Bound Journal",
    price: 28.00,
    description: "160-page dotted journal bound in sage green linen. Lay-flat binding with 100gsm acid-free paper.",
    details: [
      "Linen hardcover in sage green",
      "160 pages, 100gsm acid-free paper",
      "Dot grid layout",
      "Lay-flat Smyth-sewn binding",
    ],
    category: "Stationery",
    image: linenJournal,
    inStock: true,
    materials: "Linen cloth cover, FSC-certified paper",
  },
  {
    id: "tortoise-sunglasses",
    name: "Tortoiseshell Sunglasses",
    price: 86.00,
    description: "Classic unisex acetate sunglasses with polarized lenses. UV400 protection.",
    details: [
      "Italian Mazzucchelli acetate",
      "Polarized CR-39 lenses",
      "UV400 protection",
      "Spring hinges for comfort fit",
    ],
    category: "Accessories",
    image: sunglasses,
    inStock: true,
    materials: "Mazzucchelli acetate, CR-39 polarized lenses",
  },
  {
    id: "beeswax-candle",
    name: "Beeswax Candle",
    price: 24.00,
    description: "Hand-poured pure beeswax candle in a recycled glass jar. Burns clean for 40+ hours.",
    details: [
      "100% pure beeswax",
      "Cotton wick, lead-free",
      "Burn time: 40+ hours",
      "Recycled glass jar",
    ],
    category: "Home",
    image: beeswaxCandle,
    inStock: true,
    materials: "100% beeswax, cotton wick, recycled glass",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}
