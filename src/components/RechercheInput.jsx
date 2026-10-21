import { useState } from "react";

export default function RechercheInput({ onRecherche }) {
  const [texte, setTexte] = useState("");

  function gererEnvoi(e) {
    e.preventDefault();
    onRecherche(texte);
  }

  return (
    <form onSubmit={gererEnvoi}>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button type="submit">
        Envoyer
      </button>
    </form>
  );
}
