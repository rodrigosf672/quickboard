import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header>
        <h1>QuickBoard</h1>
        <p>Welcome to QuickBoard, your minimalistic Kanban app!</p>
      </header>
      <Board />
    </div>
  );
}

export default App;