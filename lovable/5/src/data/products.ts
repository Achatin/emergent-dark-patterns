import bagImg from "@/assets/products/bag.jpg";
import watchImg from "@/assets/products/watch.jpg";
import sneakersImg from "@/assets/products/sneakers.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import mugImg from "@/assets/products/mug.jpg";
import walletImg from "@/assets/products/wallet.jpg";
import capImg from "@/assets/products/cap.jpg";
import headphonesImg from "@/assets/products/headphones.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Leather Crossbody Bag",
    price: 189,
    category: "Bags",
    image: bagImg,
    description: "Hand-stitched crossbody bag crafted from full-grain Italian leather. Features an adjustable strap and secure zip closure.",
    details: ["Full-grain Italian leather", "Adjustable shoulder strap", "Interior zip pocket", "Dimensions: 25 × 28 × 5 cm"],
  },
  {
    id: "2",
    name: "Classic Analog Watch",
    price: 245,
    category: "Accessories",
    image: watchImg,
    description: "Minimalist timepiece with a Japanese quartz movement, scratch-resistant sapphire crystal, and genuine leather strap.",
    details: ["Japanese quartz movement", "Sapphire crystal glass", "Genuine leather strap", "Water resistant 50m"],
  },
  {
    id: "3",
    name: "Canvas Low-Top Sneakers",
    price: 95,
    category: "Footwear",
    image: sneakersImg,
    description: "Everyday low-top sneakers in premium canvas with vulcanized rubber sole for all-day comfort.",
    details: ["Premium canvas upper", "Vulcanized rubber sole", "Cushioned insole", "Available in sizes 6–13"],
  },
  {
    id: "4",
    name: "Aviator Sunglasses",
    price: 165,
    category: "Accessories",
    image: sunglassesImg,
    description: "Timeless aviator silhouette with polarized lenses and a lightweight gold-tone metal frame.",
    details: ["Polarized lenses", "Gold-tone metal frame", "UV400 protection", "Includes hard case"],
  },
  {
    id: "5",
    name: "Ceramic Matte Mug",
    price: 32,
    category: "Home",
    image: mugImg,
    description: "Hand-thrown ceramic mug with a velvety matte finish. Perfectly weighted for your morning ritual.",
    details: ["Hand-thrown ceramic", "Matte glaze finish", "Capacity: 350 ml", "Dishwasher safe"],
  },
  {
    id: "6",
    name: "Leather Card Holder",
    price: 65,
    category: "Accessories",
    image: walletImg,
    description: "Slim card holder in vegetable-tanned leather that develops a beautiful patina over time.",
    details: ["Vegetable-tanned leather", "4 card slots + center pocket", "Slim profile", "Dimensions: 10 × 7.5 cm"],
  },
  {
    id: "7",
    name: "Classic Baseball Cap",
    price: 38,
    category: "Accessories",
    image: capImg,
    description: "Structured six-panel cap in heavy cotton twill with an adjustable back strap.",
    details: ["Heavy cotton twill", "Structured six-panel", "Adjustable strap", "One size fits most"],
  },
  {
    id: "8",
    name: "Wireless Over-Ear Headphones",
    price: 299,
    category: "Electronics",
    image: headphonesImg,
    description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and studio-quality sound.",
    details: ["Active noise cancellation", "30-hour battery", "Bluetooth 5.2", "Foldable design"],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
