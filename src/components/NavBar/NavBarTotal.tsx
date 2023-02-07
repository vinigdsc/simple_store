import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

const NavBarTotal = () => {
  const { cart, clearCart }: any = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc: number, current: any) => acc + current.price,
    0
  );

  return (
    <div className="nav-bar-total">
      <span className="nav-bar-total-quantity">
        {cart.length} {cart.length === 1 ? "Produto" : "Produtos"}
      </span>
      <span className="nav-bar-total-price">R$ {totalPrice}</span>
    </div>
  );
};

export default NavBarTotal;
