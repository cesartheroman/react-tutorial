import React, { useState, useEffect } from 'react';

const Game = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsXNext(!isXNext);
  };

  const jumptTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsXNext(nextMove % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumptTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

const Board = ({ isXNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  const handleClick = (idx) => {
    if (squares[idx] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    const squareValue = isXNext ? 'X' : 'O';
    nextSquares[idx] = squareValue;

    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Game;
