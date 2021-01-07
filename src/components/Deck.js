import { useState, useEffect } from 'react';
import Card from './Card';

export default function Deck({ addScore, clearScore, pokedexLength }) {
  const [seenPokemons, setSeenPokemons] = useState([]);
  const [generatedPokemons, setGeneratedPokemons] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(3);

  const generateNewBatch = () => {
    let newBatch = [];

    //Generate random indexes for N cards, the last one is guaranteed to not have been seen yet
    for (let n of [...Array(numberOfCards).keys()]) {
      let randomIndex = Math.floor(Math.random() * pokedexLength) + 1;

      //If is the last generated card, generate a never seen card
      if (n === numberOfCards - 1) {
        while (seenPokemons.includes(randomIndex)) {
          randomIndex = Math.floor(Math.random() * pokedexLength) + 1;
        }
      }
      newBatch.push(randomIndex);
    }

    setGeneratedPokemons(newBatch);
  };

  const evaluateCardIndex = (index) => {
    if (!seenPokemons.includes(index)) {
      //Add pokemon to pokemon array
      let newSeenPokemons = [...seenPokemons, index];
      setSeenPokemons(newSeenPokemons);

      //Increase score
      addScore();
    } else {
      //Drop score and seen pokemons
      clearScore();
      setSeenPokemons([]);
    }

    //Repopulate batch
    generateNewBatch();
  };

  useEffect(() => {
    generateNewBatch();
  }, []);

  return (
    <div>
      <div className="card-wrapper">
        {[...new Array(numberOfCards)].map((e, cardIndex) => (
          <Card
            key={cardIndex}
            pokemonIndex={generatedPokemons[cardIndex]}
            evaluateCardIndex={evaluateCardIndex}
          />
        ))}
      </div>
    </div>
  );
}
