import React from 'react';
import Square from './Square';
import './TicTacToe.css';

const Board = ({ squares, onSquareClick }) => {
  return (
    <div className="tictactoe-board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
};

export default Board;