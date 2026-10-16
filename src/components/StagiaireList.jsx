import { useState } from "react";
import StagiaireCard from "./StagiaireCard";

function StagiaireList() {
  let sagiaireList = [
    {
      id: 1,
      nom: "El Morabet",
      prenom: "Aicha",
      filiere: "Dev",
    },
    {
      id: 2,
      nom: "El Khamlichi",
      prenom: "Zaid",
      filiere: "Dev",
    },
  ];

  const [stagiaires, setStagiaires] = useState(sagiaireList);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [filiere, setFiliere] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  function addNewStag(event) {
    event.preventDefault();
    let id5 = stagiaires.length + 1;
    let stagiaire = { id: id5, nom, prenom, filiere };
    setStagiaires(stagiaires => [...stagiaires, stagiaire]);
    setIsAdd(false);
    setNom("");
    setPrenom("");
    setFiliere("");
  }

  return (
    <div>
      la liste des Stagiaires
      {!isAdd ? (
        <button onClick={() => setIsAdd(true)}>Creer un nouveau stagiaire</button>
      ) : (
        <form onSubmit={e => addNewStag(e)}>
          <div>
            <label htmlFor="">Nom</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Prenom</label>
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Filiere</label>
            <input
              type="text"
              value={filiere}
              onChange={(e) => setFiliere(e.target.value)}
            />
          </div>
          <button type="submit">Enregistrer</button>
        </form>
      )}

      {stagiaires.map((stagiaire) => (
        <span key={stagiaire.id}>
          <StagiaireCard stagiaire={stagiaire} />
        </span>
      ))}
    </div>
  );
}

export default StagiaireList;