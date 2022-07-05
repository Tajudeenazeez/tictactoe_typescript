import React from 'react';
import { GameContextWrapper } from '../../context/game';
import { ActionKind } from '../../reducer/Reducer';
import WinnerDecider from '../../util/WinnerDecider';


type SquareProps = {
  index: number
}

const Square = ({index}: SquareProps) => {
  const gameContext = React.useContext(GameContextWrapper);
  const squares = gameContext?.game?.board
  
  const startPlayer = () => {
    if(WinnerDecider(squares)|| gameContext?.game.board[index]){
      return; 
    }
    
    gameContext?.dispatchActionGame({
      type: ActionKind.PLAY,
      index
    })
  }
  return (
    <button onClick={startPlayer} className={`squares squares--${gameContext?.game.board[index]}`}>{gameContext?.game.board[index]}</button>
  )
}
