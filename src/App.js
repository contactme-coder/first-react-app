import Client from './composants/Client';
import Visiteur from './composants/Visiteur';

function App() {
  const connecte =true;

  const clients = [
    { id: 1, nom: "Zaid", connecte: true },
    { id: 2, nom: "Omar", connecte: false },
  ];

  return (
    <div>
      {connecte ? (
        clients
          .filter((c) => c.connecte)
          .map((c) => <Client key={c.id} nom={c.nom} />)
      ) : (
        <Visiteur />
      )}
    </div>
  );
}

export default App;