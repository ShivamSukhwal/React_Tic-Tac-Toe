import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("dummy value")} />
    </div>
  );
};

export default Board;
