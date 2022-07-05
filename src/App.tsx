import React from 'react';
import './app.css'
import Board from './board/Board';
import Play from './components/Play';
import End from './components/End';
import Games from './components/Games';
import useTicTacToe from './components/hook/useTicTacToe';
import Rectangle from './components/context/Rectangle';
import Modal from './components/modal/Modal';
import ModalRestart from './components/modal/ModalRestart';


export const  GameContext = React.createContext(Board);
function App() {
  const game = useTicTacToe();

  return (
  
    // <GameContext.Provider>
      <div className="App">
        {/* <Board/> */}
        {/* <Rectangle/> */}
        {/* <Modal/> */}
        <ModalRestart/>

      </div>
    // </GameContext.Provider>
  );
}

export default App;
