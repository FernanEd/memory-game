import { useState, useEffect } from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';

export default function App() {
  let [score, setScore] = useState(0);

  return (
    <div>
      <Scoreboard score={score} />
      <Deck />
    </div>
  );
}
