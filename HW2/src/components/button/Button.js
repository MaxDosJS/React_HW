import React from 'react';
import './Button.css'

function Buttons({ onRollDice, onResetGame }) {
  return (
    <div>
      <button className='button' onClick={onRollDice}>🎲 Roll the dice</button>
    
      <button className='button' onClick={onResetGame}>🐷 New game</button>
    </div>
  );
}

export default Buttons;