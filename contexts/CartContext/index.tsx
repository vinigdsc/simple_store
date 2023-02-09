import { createContext, useState } from "react";
import CartItems from "../../src/components/CartItems";

export const CartContext = createContext({});

export type Product = {
  title: string;
  price: number;
  img?: string;
  name?: string;
};

type Cart = Product[];

export type CartItemsProps = {
  cart: Cart;
};

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any>([]);

  function handleBackButton() {
    window.location.reload;
    setCart([]);
  }
  function handleAddItemToCart(url: string, name: string, price: number) {
    const itemObject = { url, name, price };

    setCart([...cart, itemObject]);
  }

  function handleRemoveItemFromCart(clickedItemIndex: number) {
    console.log(clickedItemIndex);
    const filteredCart = cart.filter(
      (cartItem: Product) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        clearCart,
        handleBackButton,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
