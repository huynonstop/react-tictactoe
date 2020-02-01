import React, { useState } from 'react';
import Board from '../board/board';
const Game = ({ width, height }) => {
  const [history, setHistory] = useState([
    { squares: Array(width * height).fill(null) }
  ]);
  const [step, setStep] = useState(0);
  const [turn, setTurn] = useState(true);
  const [gameOver, setGameOver] = useState({
    isOver: false,
    winner: undefined
  });
  const onClick = async i => {
    if (gameOver.isOver === true) {
      return;
    }
    const current = history[step];
    const board = current.squares.slice();
    if (board[i] !== null) {
      return;
    }
    board[i] = turn ? 'X' : 'O';
    await setHistory(history.concat([{ squares: board }]));
    await setTurn(!turn);
    await setStep(step + 1);
    gameCheck(board, i, board[i]);
  };
  const gameCheck = (board, index, value) => {
    let isOver = false;
    const n = width;
    const col = index % width;
    const row = Math.floor(index / width);
    if (step === width * height - 1) {
      alert('Draw');
    }
    if (isOver === false)
      for (let i = 0; i < width; i++) {
        const rowIndex = row * width + i;
        if (board[rowIndex] !== value) break;
        if (i === width - 1) {
          isOver = true;
        }
      }
    if (isOver === false)
      for (let i = 0; i < height; i++) {
        const colIndex = i * width + col;
        if (board[colIndex] !== value) break;
        if (i === width - 1) {
          isOver = true;
        }
      }
    if (isOver === false && col === row)
      for (let i = 0; i < n; i++) {
        const diagIndex = i * n + i;
        if (board[diagIndex] !== value) break;
        if (i === n - 1) {
          isOver = true;
        }
      }
    if (isOver === false && row + col === n - 1)
      for (let i = 0; i < n; i++) {
        const diagIndex = i * n + (n - 1 - i);
        if (board[diagIndex] !== value) break;
        if (i === n - 1) {
          isOver = true;
        }
      }
    if (isOver === true) {
      setGameOver({
        isOver: true,
        winner: value
      });
    }
  };
  return (
    <div className="game">
      <Board board={history[step].squares} onClick={onClick}></Board>
      <div className="game-info">
        {gameOver.isOver ? 'Winner is ' + gameOver.winner : turn ? 'X' : 'O'}
      </div>
    </div>
  );
};

export default Game;
