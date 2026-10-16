import { useState } from 'react';
import Client from './composants/Client';
import Visiteur from './composants/Visiteur';

function App() {
  const [connecte, setConnecte] = useState(true);

  function changerEtat() {
    setConnecte(!connecte);
  }

  return (
    <div>
      <button onClick={changerEtat}>
        {connecte ? "Se déconnecter" : "Se connecter"}
      </button>

      {connecte ? (
        <Client nom="Ismail" />
      ) : (
        <Visiteur />
      )}
    </div>
  );
}

export default App;