import React from "react";
import { Product } from "../CartItems";

const Cards = ({ img, title, price, handleAddItemToCart }: Product) => {
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
