import React from "react";

type ItemType = {
  name: string;
  price: number;
  itemIndex: number;
  handleRemoveItemFromCart: Function;
};

const Item = ({
  name,
  price,
  itemIndex,
  handleRemoveItemFromCart,
}: ItemType) => {
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
