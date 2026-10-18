import { useState } from "react";

function StudentProfile(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h2>Exercice 2</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Masquer mon profil" : "Afficher mon profil"}
      </button>
      {isVisible ? (
        <div>
          <p>Nom : {props.nom}</p>
          <p>Filière : {props.filiere}</p>
        </div>
      ) : (
        <p>Les informations sont masquées</p>
      )}
    </div>
  );
}

export default StudentProfile;