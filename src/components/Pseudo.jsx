import { useState } from "react";

function Pseudo() {
  const [pseudo, setPseudo] = useState("");

  return (
    <div>
      <h2>Exercice 1</h2>
      <form>
        <div>
          <label htmlFor="">Pseudo</label>
          <input
            type="text"
            maxLength={20}
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>
        <p style={{ color: pseudo.length === 20 ? "red" : "black" }}>
          {pseudo.length} / 20 caractères
        </p>
      </form>
      <div>
        <h3>Aperçu en direct</h3>
        <p>Bonjour, {pseudo === "" ? "anonyme" : pseudo} !</p>
      </div>
    </div>
  );
}

export default Pseudo;