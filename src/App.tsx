import React from 'react';
import './app.css'
import Board from './components/board/Board';
import Play from './components/Play';
import End from './components/End';
import Games from './components/game/Games';
import Rectangle from './context/Rectangle';
import Modal from './components/modal/Modal';
import ModalRestart from './components/modal/ModalRestart';


export const  GameContext = React.createContext(Board);
function App() {
  

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
