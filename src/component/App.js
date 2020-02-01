import React from 'react';
import Game from './game/game';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Game width={3} height={3}></Game>
    </div>
  );
};

export default App;
