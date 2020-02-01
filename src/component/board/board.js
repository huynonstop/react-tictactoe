import React from 'react';
import Square from '../square/square';
const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((i, index) => (
        <Square value={i} onClick={() => onClick(index)}></Square>
      ))}
    </div>
  );
};
export default Board;
