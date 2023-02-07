import React, { useContext, useState } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { CartContext } from "../../../contexts/CartContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import NavBarTotal from "./NavBarTotal";

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
          <Popup
            trigger={
              <button className="button">
                <NavBarTotal />
              </button>
            }
            modal
          >
            <span>
              <div className="small-section">
                {cart.map((cart: any, index: number) => (
                  <div className="small-card">
                    <img className="small-logo" src={cart.url} alt="" />
                    <h1 className="small-title">
                      {cart.name} <br /> R$ {cart.price}
                    </h1>
                  </div>
                ))}
              </div>
            </span>
          </Popup>
          {cart.length > 0 && (
            <Link href={"/buy"}>
              <button>Comprar</button>
            </Link>
          )}

          <button className="clean-btn" onClick={() => clearCart()}>
            Limpar Carrinho
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
