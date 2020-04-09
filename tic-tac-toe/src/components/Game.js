import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../Helper";

const style = {
  width: "250px",
  margin: "0 auto",
};

const Game = () => {
  const BOARD_VALUE = Array(9).fill(null);

  const [board, setBoard] = useState(BOARD_VALUE);
  const [xIsNext, setXisNext] = useState("true");
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const gameBoard = [...board];
    if (winner || gameBoard[i]) return;
    gameBoard[i] = xIsNext ? "X" : "O";
    setBoard(gameBoard);
    setXisNext(!xIsNext);
  };

  const startGame = () => {
    return <button onClick={() => setBoard(BOARD_VALUE)}>Start Game</button>;
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <p style={style}>
        {winner
          ? "Winner is " + winner
          : "Next player: " + (xIsNext ? "X" : "O")}
        <br />
        {startGame()}
      </p>
    </>
  );
};

export default Game;
