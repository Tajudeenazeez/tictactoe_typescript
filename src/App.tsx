import React from 'react';
import './app.css'
import GameProviderContext from './context/game';
import Games from './components/game/Games';

function App() {
  return (
  <GameProviderContext>
    <Games/>
  </GameProviderContext>
  );
}

export default App;
