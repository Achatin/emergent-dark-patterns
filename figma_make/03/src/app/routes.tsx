import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Homepage } from "./components/Homepage";
import { Shop } from "./components/Shop";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      { path: "shop", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "*", Component: NotFound },
    ],
  },
]);
