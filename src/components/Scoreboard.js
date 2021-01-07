import { useState, useEffect } from 'react';

export default function Scoreboard({ score, bestScore }) {
  return (
    <div>
      <div>Score: {score}</div>
      <div>Best score: {bestScore}</div>
    </div>
  );
}
