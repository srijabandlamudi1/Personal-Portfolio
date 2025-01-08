import React, { useState } from 'react';
import Board from './Board';
import AI from './AI';
import './TicTacToe.css'; // Ensure this import path is correct

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [difficulty, setDifficulty] = useState('medium'); // Default difficulty level

  const ai = new AI('O', difficulty); // Pass difficulty to AI

  // Handle Player Move
  const handleSquareClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = 'X';
    setSquares(newSquares);

    const newWinner = calculateWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }

    setTimeout(() => {
      handleAIMove(newSquares);
    }, 500); // Slight delay for AI move for better UX
  };

  // Handle AI Move
  const handleAIMove = (currentSquares) => {
    const aiMove = ai.getBestMove(currentSquares);
    if (aiMove !== undefined) {
      currentSquares[aiMove] = 'O';
      setSquares([...currentSquares]);

      const aiWinner = calculateWinner(currentSquares);
      if (aiWinner) {
        setWinner(aiWinner);
      }
    }
    setIsXNext(true);
  };

  // Restart Game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Check for a Winner or Tie
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if (squares.every(cell => cell !== null)) {
      return 'Tie';
    }
    return null;
  };

  return (
    <div className="tictactoe-page">
      <div className="tictactoe-container">
        <h1>Tic Tac Toe</h1>
        <p className="tictactoe-quote">It’s game time – let’s play Tic-Tac-Toe! ❎0️⃣</p>
        
        {/* Difficulty Selection */}
        <div className="tictactoe-difficulty">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        
        {/* Game Board */}
        <Board squares={squares} onSquareClick={handleSquareClick} />
        
        {/* Game Status */}
        {winner && (
          <div className="tictactoe-status">
            {winner === 'Tie' && 'Stalemate! Great game. 🧠'}
            {winner === 'X' && 'Yay, you won! 🎊'}
            {winner === 'O' && 'AI takes the crown! 👑'}
          </div>
    )}
        
        {/* Restart Button */}
        <button onClick={handleRestart} className="tictactoe-reset">
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;