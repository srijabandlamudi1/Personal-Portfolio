import React from 'react';
import './TicTacToe.css';

const Square = ({ value, onClick }) => {
  return (
    <button className="tictactoe-cell" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;