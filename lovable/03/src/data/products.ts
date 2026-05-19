import bagImg from "@/assets/products/bag.jpg";
import mugImg from "@/assets/products/mug.jpg";
import toteImg from "@/assets/products/tote.jpg";
import candleImg from "@/assets/products/candle.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import walletImg from "@/assets/products/wallet.jpg";
import blanketImg from "@/assets/products/blanket.jpg";
import bottleImg from "@/assets/products/bottle.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  category: string;
  badge?: string;
}

export const categories = [
  "All",
  "Bags",
  "Home",
  "Accessories",
  "Lifestyle",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "crossbody-bag",
    name: "Leather Crossbody Bag",
    price: 128,
    description: "Hand-stitched full-grain leather crossbody with adjustable strap. Fits essentials with room to spare.",
    details: ["Full-grain vegetable-tanned leather", "Adjustable cotton strap", "Interior zip pocket", "Magnetic closure"],
    image: bagImg,
    category: "Bags",
    badge: "Best Seller",
  },
  {
    id: "ceramic-mug",
    name: "Speckled Ceramic Mug",
    price: 34,
    description: "Handmade stoneware mug with a unique speckled glaze. Each piece is one of a kind.",
    details: ["Handmade stoneware", "Holds 12 oz", "Dishwasher & microwave safe", "Speckled earth-tone glaze"],
    image: mugImg,
    category: "Home",
  },
  {
    id: "canvas-tote",
    name: "Canvas Market Tote",
    price: 42,
    description: "Durable organic cotton canvas tote perfect for farmers markets, groceries, or everyday carry.",
    details: ["100% organic cotton canvas", "Interior pocket", "Reinforced handles", "Machine washable"],
    image: toteImg,
    category: "Bags",
    badge: "New",
  },
  {
    id: "soy-candle",
    name: "Amber Soy Candle",
    price: 28,
    description: "Hand-poured soy wax candle in a reusable amber glass jar. Notes of cedar, vanilla, and tobacco.",
    details: ["100% soy wax", "Cotton wick", "50-hour burn time", "Reusable glass jar"],
    image: candleImg,
    category: "Home",
  },
  {
    id: "wood-sunglasses",
    name: "Wooden Frame Sunglasses",
    price: 86,
    description: "Lightweight walnut wood frames with polarized lenses. UV400 protection.",
    details: ["Walnut wood frame", "Polarized lenses", "UV400 protection", "Spring hinges"],
    image: sunglassesImg,
    category: "Accessories",
    badge: "Popular",
  },
  {
    id: "leather-wallet",
    name: "Bifold Leather Wallet",
    price: 68,
    description: "Slim bifold wallet in rich brown leather. Ages beautifully with use.",
    details: ["Full-grain leather", "6 card slots", "2 bill compartments", "RFID blocking"],
    image: walletImg,
    category: "Accessories",
  },
  {
    id: "linen-blanket",
    name: "Linen Throw Blanket",
    price: 95,
    description: "Stonewashed European linen throw in natural cream. Soft, breathable, and timeless.",
    details: ["100% European linen", "Stonewashed finish", "50\" × 70\"", "OEKO-TEX certified"],
    image: blanketImg,
    category: "Home",
    badge: "New",
  },
  {
    id: "steel-bottle",
    name: "Matte Steel Bottle",
    price: 38,
    description: "Double-wall insulated bottle keeps drinks cold 24h or hot 12h. Matte black finish.",
    details: ["18/8 stainless steel", "Double-wall insulation", "Holds 24 oz", "BPA-free cap"],
    image: bottleImg,
    category: "Lifestyle",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
