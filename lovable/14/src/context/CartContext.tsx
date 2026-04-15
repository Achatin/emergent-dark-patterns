import React, { createContext, useContext, useReducer, useCallback } from "react";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR" }
  | { type: "TOGGLE_CART" };

const CartContext = createContext<{
  state: CartState;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  totalItems: number;
  totalPrice: number;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.productId === action.payload.productId);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.productId !== action.payload) };
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.productId !== action.payload.productId) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => dispatch({ type: "ADD_ITEM", payload: item }), []);
  const removeItem = useCallback((productId: string) => dispatch({ type: "REMOVE_ITEM", payload: productId }), []);
  const updateQuantity = useCallback((productId: string, quantity: number) => dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE_CART" }), []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart, toggleCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
