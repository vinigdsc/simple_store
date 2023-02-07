import React, { useContext } from "react";
import Logo from "@/components/Logo";
import { CartContext } from "../../contexts/CartContext";
import Cards from "@/components/Cards";
import Link from "next/link";

const Buy = () => {
  const { cart }: any = useContext(CartContext);
  const totalPrice = cart.reduce(
    (acc: number, current: any) => acc + current.price,
    0
  );

  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <button>Voltar</button>
          </Link>
          <div className="nav-bar-actions">
            <div className="nav-bar-total"></div>
          </div>
        </nav>
      </header>
      <h1 className="main-section">
        Voce comprou {cart.length} produtos, no valor de R$ {totalPrice}
      </h1>
      <main>
        <section className="products-section">
          {cart.map((cart: any, index: number) => (
            <div className="card">
              <img className="card-logo" src={cart.url} alt="" />
              <h1 className="card-title">
                {cart.name} <br /> R$ {cart.price}
              </h1>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Buy;
