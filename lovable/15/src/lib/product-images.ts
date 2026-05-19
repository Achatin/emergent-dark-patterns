import productTee from "@/assets/product-tee.jpg";
import productBeanie from "@/assets/product-beanie.jpg";
import productPourover from "@/assets/product-pourover.jpg";
import productTote from "@/assets/product-tote.jpg";
import productThrow from "@/assets/product-throw.jpg";
import productCharger from "@/assets/product-charger.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productCandles from "@/assets/product-candles.jpg";

const imageMap: Record<string, string> = {
  "1": productTee,
  "2": productBeanie,
  "3": productPourover,
  "4": productTote,
  "5": productThrow,
  "6": productCharger,
  "7": productScarf,
  "8": productCandles,
};

export function getProductImage(productId: string): string {
  return imageMap[productId] || productTee;
}
