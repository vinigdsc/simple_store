import { CartContext } from "../../../contexts/CartContext";
import React, { useContext } from "react";

type ItemType = {
  name: string;
  price: number;
  itemIndex: number;
};

const Item = ({ name, price, itemIndex }: ItemType) => {
  const { handleRemoveItemFromCart }: any = useContext(CartContext);
  return (
    <li>
      <h2 className="list-title">{name}</h2>
      <span className="list-price">R$ {price}</span>
      <button
        className="remove-btn"
        onClick={() => handleRemoveItemFromCart(itemIndex)}
      >
        REMOVER
      </button>
    </li>
  );
};

export default Item;
