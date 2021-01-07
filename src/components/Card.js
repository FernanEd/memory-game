import { useState, useEffect } from 'react';

export default function Card({ pokemonIndex, evaluateCardIndex }) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((data) => data.json())
      .then((pokemon) => pokemon.sprites)
      .then((sprite) => sprite.front_default)
      .then((src) => setImgSrc(src))
      .catch((e) => {});
  }, [pokemonIndex]);

  return (
    <div className="card" onClick={() => evaluateCardIndex(pokemonIndex)}>
      <img src={imgSrc} />
    </div>
  );
}
