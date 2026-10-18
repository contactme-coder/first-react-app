function Tache(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.tache.statut === "Terminé"}
        onChange={() => props.onBasculer(props.tache.id)}
      />
      <span
        style={{
          textDecoration:
            props.tache.statut === "Terminé" ? "line-through" : "none",
        }}
      >
        {props.tache.titre}
      </span>
      <button onClick={() => props.onSupprimer(props.tache.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default Tache;