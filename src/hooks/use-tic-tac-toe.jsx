import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());

  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for(let i = 0; i < WINNING_PATTERNS.length; i++) {
      WINNING_PATTERNS[i]
    }
  };

  const handleClick = (index) => {
    // check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "0";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  function getStatusMessage() {}
  
  const resetGame = () => {};

  return { board, calculateWinner, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
