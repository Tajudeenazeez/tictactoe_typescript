import React from "react";
import "./game.css";

const Rectangle = () => {
  return (
    <div>
      <div className="game__board">
        <div className="game__board-top">
          <span className="board__symbol board__symbol-x">&#10006;</span>
          <span className="board__symbol board__symbol-o">&#9900;</span>
          <span className="game__turn">  &#10006; turn
          </span>
        </div>
        <section className="square__container">
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square"></div>
          <div className="game__square  game__btn game__btn--primary">
            X(YOU) <strong>32</strong>
          </div>
          <div className="game__square  game__btn game__btn--secondary">
            Tie <strong>12</strong>
          </div>
          <div className="game__square  game__btn game__btn--tertiary">
            O(CPU) <strong>7</strong>{" "}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rectangle;
