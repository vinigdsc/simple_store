import React from "react";

const index = () => {
  return (
    <>
      <header>
        <nav>
          <h2>Produtos</h2>
          <div>
            <span>2 produtos</span>
            <span>R$ 82,00</span>
          </div>
          <button>limpar</button>
        </nav>
      </header>
      <main>
        <section>
          <div className="card">
            <img src="" alt="" />
            <h1>Produto 1</h1>
            <button>ADICIONAR</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h1>Produto 2</h1>
            <button>ADICIONAR</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h1>Produto 3</h1>
            <button>ADICIONAR</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h1>Produto 4</h1>
            <button>ADICIONAR</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h1>Produto 5</h1>
            <button>ADICIONAR</button>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h1>Produto 6</h1>
            <button>ADICIONAR</button>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <li>
            <h2>Produto1</h2>
            <span>R$ 10</span>
            <button>REMOVER</button>
          </li>
          <li>
            <h2>Produto2</h2>
            <span>R$ 10</span>
            <button>REMOVER</button>
          </li>
          <li>
            <h2>Produto3</h2>
            <span>R$ 10</span>
            <button>REMOVER</button>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default index;
