import React, { Component } from "react";
import Board from "./Board";
export class Game extends Component {
  constructor() {
    super();
    this.state = {
      isNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }]
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      isNext: step % 2 === 0
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = CalculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.isNext ? "X" : "0";
    this.setState({
      history: history.concat({
        squares: squares
      }),
      isNext: !this.state.isNext,
      stepNumber: history.length
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = CalculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to" + move : "Start the game again";
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next player is " + (this.state.isNext ? "X" : "0");
    }
    return (
      <>
        <h1 className="heading">Tic-Tac-Toe Game</h1>
        <div className="main">
          <div className="game-board">
            <Board
              onClick={i => this.handleClick(i)}
              squares={current.squares}
            />
          </div>
          <div className="result">
            <div className="status">{status}</div>
            <div className="moves">{moves}</div>
          </div>
        </div>
      </>
    );
  }
}

function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;

{
  /* <div className="game">
        <div className="game-board">
          <Board onClick={i => this.handleClick(i)} squares={current.squares} />
        </div>
      </div>
      <div className="result">
          <div className="status">{status}</div>
          <div className="moves">{moves}</div>
      </div> */
}
