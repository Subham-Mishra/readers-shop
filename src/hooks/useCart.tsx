import { createContext, useContext, useState } from "react";
import type { CartItem } from "~/iterfaces";
import { findBookById } from "~/utils";

// Define a context for the shopping cart
const ShoppingCartContext = createContext<any>(null);

// Create a provider component for the shopping cart
export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Array<CartItem>>([]);

  const isBookInCart = (bookId: string) =>
    cart.find((item) => item.bookId === bookId);

  const addToCart = (bookId: string) => {
    setCart((previousCart) => {
      const existingItem = isBookInCart(bookId);

      return existingItem
        ? previousCart.map((item) =>
            item.bookId === bookId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...previousCart, { bookId, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: string) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.bookId !== bookId)
    );
  };

  const changeQuantity = (bookId: string, newQuantity: number) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.bookId === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const book = findBookById(item.bookId);
      if (book) {
        return total + book.price * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        isBookInCart,
        getTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to access the shopping cart
export const useShoppingCart = (): any => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
