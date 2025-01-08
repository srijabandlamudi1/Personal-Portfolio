class AI {
  constructor(player, difficulty = 'hard') {
    this.player = player; // AI's symbol ('X' or 'O')
    this.opponent = player === 'X' ? 'O' : 'X'; // Opponent's symbol
    this.difficulty = difficulty; // Easy, Medium, Hard
  }

  /**
   * Get the best move based on difficulty level
   */
  getBestMove(board) {
    if (this.difficulty === 'easy') {
      return this.getRandomMove(board); // Random Move
    } else if (this.difficulty === 'medium') {
      return this.getMediumMove(board); // Limited Minimax Depth
    } else {
      return this.getHardMove(board); // Full Minimax Algorithm
    }
  }

  /**
   * Easy Mode: Random Move
   */
  getRandomMove(board) {
    const emptyCells = board
      .map((cell, index) => (cell === null ? index : null))
      .filter(index => index !== null);

    return emptyCells.length > 0
      ? emptyCells[Math.floor(Math.random() * emptyCells.length)]
      : null;
  }

  /**
   * Medium Mode: Minimax with limited depth
   */
  getMediumMove(board) {
    let bestScore = -Infinity;
    let move = null;

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = this.player;
        let score = this.minimax(board, 2, false); // Limit depth to 2
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  }

  /**
   * Hard Mode: Full Minimax
   */
  getHardMove(board) {
    let bestScore = -Infinity;
    let move = null;

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = this.player;
        let score = this.minimax(board, 0, false); // No depth limit
        board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  }

  /**
   * Minimax Algorithm
   */
  minimax(board, depth, isMaximizing) {
    const scores = {
      [this.player]: 10 - depth,
      [this.opponent]: depth - 10,
      tie: 0,
    };

    let result = this.checkWinner(board);
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = this.player;
          let score = this.minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = this.opponent;
          let score = this.minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  }

  /**
   * Check Winner
   */
  checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every(cell => cell !== null)) {
      return 'tie';
    }

    return null;
  }
}

export default AI;