import React from 'react';
import './DiceRoll.css'

const diceImages = {
  1: 'https://viktorsvertoka.github.io/game-of-dice/image/dice1.png',
  2: 'https://viktorsvertoka.github.io/game-of-dice/image/dice2.png',
  3: 'https://viktorsvertoka.github.io/game-of-dice/image/dice3.png',
  4: 'https://viktorsvertoka.github.io/game-of-dice/image/dice4.png',
  5: 'https://viktorsvertoka.github.io/game-of-dice/image/dice5.png',
  6: 'https://viktorsvertoka.github.io/game-of-dice/image/dice6.png',
};

function DiceRoll({ diceValue }) {
 
  const diceImageSrc = diceImages[diceValue];

  return (
    <div className="DiceRoll">
      <h2>🎲 Dice Roll: {diceValue}</h2>
      
      <img src={diceImageSrc} alt={`Dice Roll: ${diceValue}`} />
    </div>
  );
}

export default DiceRoll;