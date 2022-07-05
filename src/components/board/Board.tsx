import React from "react";
import "./board.css";

const Board = () => {
  return (
    <>
      <div className="board__container">
        <span className="board__symbol board__symbol-x">&#10006;</span>
        <span className="board__symbol board__symbol-o">&#9900;</span>
        <div className="board__inner">
          <div className="board__button">
            <h3>pick players mark</h3>
            <button className="btn btn__primary btn-x">&#10005;</button>
            <button className="btn btn__primary btn-o" >&#9900;</button>
          </div>
          <button className="btn btn-secondary btn-yellow">
          new game (vs cpu)
          </button>
          <button className="btn btn-secondary btn-green">
            new game (vs player)
          </button>
        </div>
      </div>
    </>
  );
};

export default Board;
