import React from "react";
import Logo from "@/components/Logo";

const Buy = () => {
  return (
    <>
      <header>
        <nav>
          <Logo />
          <div className="nav-bar-actions">
            <div className="nav-bar-total">
              <span className="nav-bar-total-quantity"></span>
              <span className="nav-bar-total-price"></span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Buy;
