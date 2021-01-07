import { useState, useEffect } from 'react';

export default function Card({ pokemonIndex, evaluateCardIndex, imgSrc }) {
  useEffect(() => {
    console.log(imgSrc);
  }, []);

  return (
    <div className="card" onClick={() => evaluateCardIndex(pokemonIndex)}>
      <img src={imgSrc} />
    </div>
  );
}
