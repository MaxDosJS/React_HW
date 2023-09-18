import React from "react";
import "./Button.css";

function Buttons({ onRollDice, onResetGame, onLeave }) {
  return (
    <div>
      <button className="button" onClick={onRollDice}>
        🎲 Roll the dice
      </button>
      <button className="button" onClick={onLeave}>Leave</button>
      <button className="button" onClick={onResetGame}>
        🐷 New game
      </button>
    </div>
  );
}

export default Buttons;
