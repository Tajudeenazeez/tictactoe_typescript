import React from "react";
import "./index.css";
import { GameContextWrapper } from "../../context/game";
import WinnerDecider from "../../util/WinnerDecider";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = () => {
  const gameContext = React.useContext(GameContextWrapper);
  const squares = gameContext?.game?.board;
  const show = WinnerDecider(squares) ? true : false;

  const endHandler = () => {
    gameContext?.dispatchActionGame({
      type: "RESTART",
      
    });
  }

    const goToNewRoundHandler = () => { 
      gameContext?.dispatchActionGame({ 
        type: "REFRESH",
        
      })
    }
    
  

  return (
    <>
      <div className={`modal modal--${show ? "show" : ""}`}>
        <div className="modal-content-wrapper">
          <div>
            {WinnerDecider(squares) === "X" ? (
              <span className="cancel">&#215; TAKES THE ROUND</span>
            ) : (
              <span className="circle">&#8728; TAKES THE ROUND</span>
            )}{" "}
          </div>
          <div className="modal-action-btns">
            <button
              onClick={endHandler}
              className="modal-btn modal-btn--silver"
            >
              QUIT
            </button>
            <button
              onClick={goToNewRoundHandler}
              className="modal-btn modal-btn--yellow"
            >
              NEXT ROUND
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
