import React from "react";
import Modal from "../modal/Modal";
import { GameContextWrapper } from '../../context/game'
import Square from "../square/Square";
import "./board.css";

const Board = () => {
  const gameContext = React.useContext(GameContextWrapper)
  const xJustPlayed = gameContext?.game.xJustPlayed;

  const restartGameHandler = () => {
    gameContext?.dispatchActionGame({
      type: "RESTART",
    })
  }
  return (
    <>
      <div className="board__container">
        <Modal/>
        <div className="board__top">
          <p><span className="cancel">&#215;</span><span className="circle">&#8728;</span></p>
          <p className="turn">{xJustPlayed ? <span>&#215;</span> :  <span>&#8728;</span> }</p>
          <p><button onClick={restartGameHandler} className='restart'>&#8635;</button></p>
        </div>
        <div className="board">{gameContext?.game.board.map((_,index) => <Square key = {index} index ={index} />) }</div>

      </div>
    </>
  );
};

export default Board;
