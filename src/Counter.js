import { useState } from 'react';

function Counter() {

  // État du compteur
  const [count, setCount] = useState(0);

  return (
    <div>

      {/* Affichage du compteur */}
      <p>Compteur : {count}</p>

      {/* Bouton pour incrémenter */}
      <button onClick={() => setCount(count + 1)}>
        +
      </button>

    </div>
  );
}

export default Counter;