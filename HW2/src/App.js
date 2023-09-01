import React, { useState } from 'react';
import './App.css';
import Player from './components/players/players';
import Buttons from './components/button/Button';
import DiceRoll from './components/DiceRoll/DiceRoll';

function App() {
  const [players, setPlayers] = useState([
    { name: 'Игрок 1', score: 0, isActive: true },
    { name: 'Игрок 2', score: 0, isActive: false },
  ]);
  
  const initialPlayers = [
    { name: 'Игрок 1', score: 0, isActive: true },
    { name: 'Игрок 2', score: 0, isActive: false },
  ];

  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    if (isGameOver) {
      return;
    }
  
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNumber);
  
    if (randomNumber === 1) {
      
      setPlayers((prevPlayers) =>
        prevPlayers.map((player, index) => ({
          ...player,
          isActive: !player.isActive,
        }))
      );
    } else {
      
      setPlayers((prevPlayers) =>
        prevPlayers.map((player, index) => {
          if (player.isActive) {
            const newScore = player.score + randomNumber;
            if (newScore >= 100) {
              setWinner(player.name);
              setIsGameOver(true);
            }
            return {
              ...player,
              score: newScore,
            };
          } else {
            return player;
          }
        })
      );
    }
  };

  const passTurn = () => {
    setPlayers((prevPlayers) => {
      const currentPlayerIndex = prevPlayers.findIndex((player) => player.isActive);
      const nextPlayerIndex = (currentPlayerIndex + 1) % prevPlayers.length;

      const updatedPlayers = [...prevPlayers];

      updatedPlayers[currentPlayerIndex].isActive = false;
      updatedPlayers[nextPlayerIndex].isActive = true;

      return updatedPlayers;
    });
  };

  const resetGame = () => {
    setPlayers(initialPlayers);
    setWinner(null);
    setIsGameOver(false);
    setDiceValue(null);
  };

  return (
    <div className="App">
      <h1>Игра в кости</h1>
      <DiceRoll diceValue={diceValue} />
      {isGameOver ? (
        <h2>Победил {winner}!</h2>
      ) : (
        <div className="Players">
          {players.map((player, index) => (
            <Player key={index} {...player} />
          ))}
        </div>
      )}
      <Buttons onRollDice={rollDice} onResetGame={resetGame} onPassTurn={passTurn} />
    </div>
  );
}

export default App;