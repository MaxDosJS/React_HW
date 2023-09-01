import React from 'react';
import './players.css';

function Player({ name, score, isActive }) {
  return (
    <div className={`Player ${isActive ? 'active' : ''}`}>
      <div className="left-side">
        <h2>{name}</h2>
      </div>
      <div className="right-side">
        <p>Счет: {score}</p>
      </div>
    </div>
  );
}

export default Player;