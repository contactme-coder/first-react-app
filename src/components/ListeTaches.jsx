import { useState } from "react";
import Tache from "./Tache";

function ListeTaches() {
  let tasks = [
    {
      id: 5,
      titre: "Maîtriser UML",
      statut: "Terminé",
    },
    {
      id: 7,
      titre: "Réviser JS",
      statut: "En cours",
    },
  ];

  const [taches, setTaches] = useState(tasks);
  const [nouvelleTache, setNouvelleTache] = useState("");

  function ajouterTache(event) {
    event.preventDefault();
    if (nouvelleTache === "") {
      return;
    }
    let idT = taches.length + 1;
    let tache = { id: idT, titre: nouvelleTache, statut: "En cours" };
    setTaches((taches) => [...taches, tache]);
    setNouvelleTache("");
  }

  function basculerTache(id) {
    setTaches((taches) =>
      taches.map((t) => {
        if (t.id === id) {
          let statut = t.statut === "Terminé" ? "En cours" : "Terminé";
          return { id: t.id, titre: t.titre, statut: statut };
        }
        return t;
      })
    );
  }

  function supprimerTache(id) {
    setTaches((taches) => taches.filter((t) => t.id !== id));
  }

  let restantes = taches.filter((t) => t.statut !== "Terminé").length;

  return (
    <div>
      <h2>Exercice 4</h2>
      <form onSubmit={(e) => ajouterTache(e)}>
        <div>
          <label htmlFor="">Nouvelle tâche</label>
          <input
            type="text"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>

      {taches.map((tache) => (
        <Tache
          key={tache.id}
          tache={tache}
          onBasculer={basculerTache}
          onSupprimer={supprimerTache}
        />
      ))}

      {taches.length === 0 ? (
        <p>Aucune tâche pour le moment</p>
      ) : (
        <p>
          {restantes} tâche(s) restante(s) sur {taches.length}
        </p>
      )}
    </div>
  );
}

export default ListeTaches;