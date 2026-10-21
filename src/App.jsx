import UserCard from "./components/UserCard";
import TestAPI from "./components/TestAPI";
export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Test des Appels API en React 18</h1>
      
      {/* Affichage du composant avec Fetch */}
      <TestAPI />
    </div>
  );
}