import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import MoodDisplay from "./components/MoodDisplay";
import MoodHistory from "./components/MoodHistory";
function App() {
  return (
    <div>
      <header><h2 style={{textAlign:"center"}}>TP3 - Exercice 2</h2></header>
      <MoodBoard />
    </div>
  );
}

function MoodBoard() {
  const [currentMood, setCurrentMood] = useState(null);
  const [history, setHistory] = useState([]);

  function handleSelectMood(mood) {
    setCurrentMood(mood);
    setHistory((prev) => [...prev, mood]);
  }
  function resetMood() {
    setCurrentMood(null);
  }
  function clearHistory() {
    setHistory([]);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎨 MoodBoard du Jour</h2>

      <MoodSelector onSelect={handleSelectMood} />
      <MoodDisplay mood={currentMood} />
      <div>
        <button
          onClick={resetMood}
          style={{
            backgroundColor: "grey",
          }}>🔄 Réinitialiser</button>
        <button
          onClick={clearHistory}
          style={{
            backgroundColor: "brown",
            color: "white"
          }}
        >❌ Effacer l'historique</button>
      </div>

      <MoodHistory history={history} />
    </div>
  );
}
export default App;

