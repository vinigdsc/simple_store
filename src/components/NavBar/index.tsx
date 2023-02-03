import React from "react";
import Logo from "../Logo";

type Product = {
  price: number;
};

type CurrentCart = {
  cart: Product[];
  price?: number;
  clearCart: Function;
};

const NavBar = ({ cart, clearCart }: CurrentCart) => {
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <header>
      <nav>
        <Logo />
        <div className="nav-bar-actions">
          <div className="nav-bar-total">
            <span className="nav-bar-total-quantity">
              {cart.length} {cart.length === 1 ? "Produto" : "Produtos"}
            </span>
            <span className="nav-bar-total-price">R$ {totalPrice}</span>
          </div>

          <button className="clean-btn" onClick={() => clearCart()}>
            limpar
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
