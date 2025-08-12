import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());

  const [isXNext, setIsNext] = useState(true);

  const WINNING_PATTERNS = [];

  const calculateWinner = (currentBoard) => {};

  const handleClick = (index) => {
    // check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "0";
    setBoard(newBoard);
    setIsNext(!isXNext);
  };

  function getStatusMessage() {}
  
  const resetGame = () => {};

  return { board, calculateWinner, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToe;
