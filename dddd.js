import React, { useState, useEffect } from "react";
import { Square } from "./Square";
import { StartGame } from "./StartGame";

const PhotoLength = 600;

export const Board = (props) => {
  const [size, setSize] = useState(3);
  // const [NUM_PIECES, setNumPieces] = useState(9);
  // const [NUM_PIECES, setNUMPIECES] = useState(9);
  const [PIECE_LENGTH, setPIECLENGTH] = useState(200);

  // var SIZE = parseInt(size);

  const oriBoard = [...Array(size * size).keys()];

  const squarePosition = (pos) => {
    const row = pos % size;
    const col = Math.floor(pos / size);
    return [row, col];
  };

  const isBesideEmpty = (board, pos) => {
    const emptySquare = board.indexOf(size * size - 1);
    const imgPosition = squarePosition(pos);
    const emptyPosition = squarePosition(emptySquare);
    return (
      (imgPosition[0] === emptyPosition[0] &&
        Math.abs(imgPosition[1] - emptyPosition[1]) === 1) ||
      (imgPosition[1] === emptyPosition[1] &&
        Math.abs(imgPosition[0] - emptyPosition[0]) === 1)
    );
  };

  const changeBoard = (board, pos) => {
    const newEmptySquare = board.indexOf(size * size - 1);
    const index = board[pos];
    board[pos] = size * size - 1;
    board[newEmptySquare] = index;

    return board;
  };

  const initRandomBoard = () => {
    let newBoard = [...Array(size * size).keys()];

    for (let i = 0; i <= 2; i++) {
      const posBesideEmpty = newBoard.filter((pos) =>
        isBesideEmpty(newBoard, pos)
      );
      const posToMove =
        posBesideEmpty[Math.floor(Math.random() * posBesideEmpty.length)];
      newBoard = changeBoard(newBoard, posToMove);
    }
    return newBoard;
  };

  const [board, setBoard] = useState(initRandomBoard);
  const [moves, setMoves] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [info, setInfo] = useState(`MOVES: ${moves}`);

  useEffect(() => {
    // setNUMPIECES(size * size);
    setPIECLENGTH(PhotoLength / size);
    setBoard(initRandomBoard);
  }, [size]);

  const moveSquare = (square) => {
    const pos = board.indexOf(square);
    if (isBesideEmpty(board, pos) && !isWin) {
      const newMoves = moves + 1;
      setMoves(newMoves);
      const newBoard = changeBoard(board, pos);
      setBoard(newBoard);
      whetherSolved();
    }
  };

  const whetherSolved = () => {
    if (board.toString() === oriBoard.toString()) {
      setIsWin(true);
    }
  };

  useEffect(() => {
    isWin
      ? setInfo(`YOU WIN WITH ${moves} MOVES !!!`)
      : setInfo(`MOVES: ${moves}`);
  }, [moves, isWin]);

  const newGame = () => {
    if (document.getElementById("radio1").checked) {
      setSize(2);
    } else if (document.getElementById("radio2").checked) {
      setSize(3);
    } else if (document.getElementById("radio3").checked) {
      setSize(4);
    }
    // setSize(midSize);
    setIsWin(false);
    setMoves(0);
    setInfo(`MOVES: 0`);
    var newBoard = initRandomBoard();
    setBoard(newBoard);
  };

  const changeSize = (e) => {
    const size1 = e.target.value;
    // setSize(parseInt(size1));
    // setTimeout(() => {
    //   newGame();
    // }, 100);

    // midSize = parseInt(size);
  };

  return (
    <div>
      <div
        className="gameinfo"
        style={{
          height: "50px",
          width: `${size * PIECE_LENGTH + 30}px`,
          margin: "10px",
        }}
      >
        <StartGame
          onClick={() => {
            newGame();
          }}
        />
        {info} <br />
        Puzzle Size
        <div>
          <input
            type="radio"
            id="radio1"
            name="size"
            value="2"
            onClick={changeSize}
          />{" "}
          2*2
          <input
            type="radio"
            id="radio2"
            name="size"
            value="3"
            onClick={changeSize}
            defaultChecked
          />{" "}
          3*3
          <input
            type="radio"
            id="radio3"
            name="size"
            value="4"
            onClick={changeSize}
          />{" "}
          4*4
        </div>
      </div>
      <div
        className="gameBoard"
        style={{
          position: "relative",
          width: `${size * PIECE_LENGTH + 30}px`,
          height: `${size * PIECE_LENGTH + 30}px`,
        }}
      >
        {board.map((index, pos) => (
          <Square
            index={index}
            pos={pos}
            key={index}
            size={size}
            onClick={() => {
              moveSquare(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
