import { useState, useEffect } from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem('best_score') || 0
  );
  const [pokedexLength, setPokedexLength] = useState(151);

  const addScore = () => {
    let newScore = score + 1;
    setScore(newScore);

    //If the current score is more than the best score,
    //update best score
    if (newScore > bestScore) {
      setBestScore(newScore);
      localStorage.setItem('best_score', newScore);
    }
  };

  const clearScore = () => {
    setScore(0);
  };

  return (
    <div>
      {score < pokedexLength ? (
        <>
          <div id="instructions">
            <div>Pokémon Memory Game!</div>
            <div> Choose pokémon that you haven't seen.</div>
          </div>
          <Scoreboard score={score} bestScore={bestScore} />
          <Deck
            addScore={addScore}
            clearScore={clearScore}
            pokedexLength={pokedexLength}
          />
          <button
            className="btn"
            onClick={() => {
              clearScore();
              setBestScore(0);
              localStorage.setItem('best_score', 0);
            }}
          >
            Clear score
          </button>
        </>
      ) : (
        <>
          <p>You got all {pokedexLength} pokemons!</p>
        </>
      )}
    </div>
  );
}
