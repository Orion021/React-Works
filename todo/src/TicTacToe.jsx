import { useState } from "react";

function TicTacToe() {
  var boardState = useState(["", "", "", "", "", "", "", "", ""]);
  var board = boardState[0];
  var setBoard = boardState[1];

  var playerState = useState("X");
  var player = playerState[0];
  var setPlayer = playerState[1];

  function makeMove(index) {
    if (board[index] !== "") {
      return;
    }

    var newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <p>Current Player: {player}</p>

      <table>
        <tbody>
          <tr>
            <td
              onClick={function () {
                makeMove(0);
              }}
            >
              {board[0]}
            </td>
            <td
              onClick={function () {
                makeMove(1);
              }}
            >
              {board[1]}
            </td>
            <td
              onClick={function () {
                makeMove(2);
              }}
            >
              {board[2]}
            </td>
          </tr>
          <tr>
            <td
              onClick={function () {
                makeMove(3);
              }}
            >
              {board[3]}
            </td>
            <td
              onClick={function () {
                makeMove(4);
              }}
            >
              {board[4]}
            </td>
            <td
              onClick={function () {
                makeMove(5);
              }}
            >
              {board[5]}
            </td>
          </tr>
          <tr>
            <td
              onClick={function () {
                makeMove(6);
              }}
            >
              {board[6]}
            </td>
            <td
              onClick={function () {
                makeMove(7);
              }}
            >
              {board[7]}
            </td>
            <td
              onClick={function () {
                makeMove(8);
              }}
            >
              {board[8]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TicTacToe;
