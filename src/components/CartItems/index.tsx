import Item from "@/components/Item";
import { CartContext } from "../../../contexts/CartContext";
import React, { useContext } from "react";

const CartItems = () => {
  const { cart }: any = useContext(CartContext);
  return (
    <footer>
      <ul>
        {cart.map((cartItem: any, index: number) => (
          <Item
            key={index}
            itemIndex={index}
            name={cartItem.name}
            price={cartItem.price}
          />
        ))}
        {/* percorrer o cart e para cada cartItem vai fazer 1 Item */}
      </ul>
    </footer>
  );
};

export default CartItems;
