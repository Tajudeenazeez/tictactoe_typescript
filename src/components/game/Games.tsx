import React from "react";
import './Game.css'
import Board from "../board/Board";
import { GameContextWrapper } from "../../context/game";

const Games = () => {
  const gameContext = React.useContext(GameContextWrapper);
  const start = gameContext?.game.start;
  const xJustPlayed = gameContext?.game.xJustPlayed;

  const choiceHandler = () => {
    gameContext?.dispatchActionGame({
      type: "CHOOSE",
    });
  };

  const startGame = () => {
    gameContext?.dispatchActionGame({
      type: "START",
    });
  };

  return (
    <>
      <div className="game">
        {!start ? (
          <div className="start-board">
            <div>
              <span className="cancel">&#215;</span>
              <span className="circle">&#8728;</span>
            </div>
            <div className="player-choice">
              <p className="player-choice__title">PICK PLAYER 1'S MARK</p>
              <div className="player-choice__picks">
                <button
                  onClick={choiceHandler}
                  className={`player-choice__pick ${
                    xJustPlayed ? "player-choice__pick--active" : ""
                  }`}
                >
                  &#215;
                </button>
                <button
                  onClick={choiceHandler}
                  className={`player-choice__pick ${
                    !xJustPlayed ? "player-choice__pick--active" : ""
                  }`}
                >
                  &#8728;
                </button>
              </div>
              <p className="player-choice__footer">
                REMEMBER : {xJustPlayed ? "X" : "O"} GOES FIRST
              </p>
            </div>
            <div>
              <button onClick={startGame} className="btn-start">
                NEW GAME
              </button>
            </div>
          </div>
        ) : (
          <Board />
        )}
      </div>
    </>
  );
};

export default Games;
