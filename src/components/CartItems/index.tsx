import Item from "@/components/Item";
import React from "react";

export type Product = {
  title: string;
  price: number;
  img?: string;
  handleAddItemToCart: Function;
  name: string;
};

type Cart = Product[];

export type CartItemsProps = {
  cart: Cart;
  handleRemoveItemFromCart: Function;
};

const CartItems = ({ cart, handleRemoveItemFromCart }: CartItemsProps) => {
  return (
    <footer>
      <ul>
        {cart.map((cartItem, index) => (
          <Item
            key={index}
            itemIndex={index}
            name={cartItem.name}
            price={cartItem.price}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        ))}
        {/* percorrer o cart e para cada cartItem vai fazer 1 Item */}
      </ul>
    </footer>
  );
};

export default CartItems;
