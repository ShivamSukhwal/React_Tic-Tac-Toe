import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../Helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState("true");
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const gameBoard = [...board];
    if (winner || gameBoard[i]) return;
    gameBoard[i] = xIsNext ? "X" : "O";
    setBoard(gameBoard);
    setXisNext(!xIsNext);
  };

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
