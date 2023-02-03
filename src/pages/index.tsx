import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import Body from "@/components/Body";
import CartItems, { Product } from "@/components/CartItems";

const ShoppingCart = () => {
  const [cart, setCart] = useState<any>([]);

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
    <>
      <NavBar cart={cart} clearCart={clearCart} />
      <Body handleAddItemToCart={handleAddItemToCart} />
      <CartItems
        cart={cart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </>
  );
};

export default ShoppingCart;
