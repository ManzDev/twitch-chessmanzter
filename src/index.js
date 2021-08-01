import "./components/ChessPawn.js";
import "./components/ChessKnight.js";
import "./components/ChessQueen.js";
import "./components/ChessBishop.js";
import "./components/ChessRook.js";
import "./components/ChessKing.js";

const TOTAL_CELLS = 64;
const CELLS_PER_ROW = 8;
const ROYAL_ORDER_PIECES = [
  "chess-rook", "chess-knight", "chess-bishop",
  "chess-queen", "chess-king",
  "chess-bishop", "chess-knight", "chess-rook"
];

const generateChessBoard = () => {
  const chessBoard = document.querySelector(".chessboard");
  let isInverted = true;
  for (let i = 0; i < TOTAL_CELLS; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (i % CELLS_PER_ROW === 0) {
      isInverted = !isInverted;
    }

    if (isInverted) { cell.classList.add("invert"); }

    chessBoard.appendChild(cell);
  }

  // BLACK PIECES
  ROYAL_ORDER_PIECES.forEach((item, index) => placePieces(item, "black", index));
  for (let i = 0; i < 8; i++) {
    placePieces("chess-pawn", "black", 8 + i);
  }

  // WHITE PIECES
  ROYAL_ORDER_PIECES.forEach((item, index) => placePieces(item, "white", (7 * 8) + index));
  for (let i = 0; i < 8; i++) {
    placePieces("chess-pawn", "white", (6 * 8) + i);
  }
};

const placePieces = (name, color = "black", position) => {
  const chessBoard = document.querySelector(".chessboard");
  const pawn = document.createElement(name);
  pawn.classList.add(color);
  const cell = chessBoard.querySelectorAll(".cell");
  console.log(cell, position);
  cell[position].appendChild(pawn);
};

generateChessBoard();

document.querySelector("button").addEventListener("click", () => document.body.classList.toggle("view3d"));
