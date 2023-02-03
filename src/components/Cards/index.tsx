import React, { useContext } from "react";

import { CartContext, Product } from "../../../contexts/CartContext";

const Cards = ({ img, title, price }: Product) => {
  const { handleAddItemToCart }: any = useContext(CartContext);
  return (
    <div className="card">
      <img className="card-logo" src={img} alt="" />
      <h1 className="card-title">
        {title} <br /> R$ {price}
      </h1>
      <div>
        <button onClick={() => handleAddItemToCart(img, title, price)}>
          ADICIONAR
        </button>
      </div>
    </div>
  );
};

export default Cards;
