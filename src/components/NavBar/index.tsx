import React, { useContext } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { CartContext } from "../../../contexts/CartContext";

const NavBar = () => {
  const { cart, clearCart }: any = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc: number, current: any) => acc + current.price,
    0
  );

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

          <Link href={"/buy"}>
            <button>Comprar</button>
          </Link>

          <button className="clean-btn" onClick={() => clearCart()}>
            Limpar Carrinho
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
