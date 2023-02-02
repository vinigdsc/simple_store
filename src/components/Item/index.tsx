import React from "react";

const Item = () => {
  return (
    <li>
      <h2 className="list-title">Produto1</h2>
      <span className="list-price">R$ 10</span>
      <button className="remove-btn">REMOVER</button>
    </li>
  );
};

export default Item;
