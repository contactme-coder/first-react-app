import Client from './composants/Client';
import Visiteur from './composants/Visiteur';

function App() {
  const estConnecte = true;

  return (
    <div>
      {estConnecte ? (
        <Client nom="Ismail" />
      ) : (
        <Visiteur />
      )}
    </div>
  );
}

export default App;