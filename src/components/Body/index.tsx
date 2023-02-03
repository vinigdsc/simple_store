import React from "react";
import Cards from "@/components/Cards";
import { products } from "../../../database";

const Body = ({ handleAddItemToCart }: any) => {
  return (
    <main>
      <section className="products-section">
        {products.map((product, index) => (
          <Cards
            img={product.url}
            title={product.name}
            price={product.price}
            handleAddItemToCart={handleAddItemToCart}
          />
        ))}
      </section>
    </main>
  );
};

export default Body;
