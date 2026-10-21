import { useState } from "react";
import RechercheInput from "./components/RechercheInput";
import RechercheSelect from "./components/RechercheSelect";
import RechercheResultat from "./components/RechercheResultat";

const liste=[ {nom:"banane",type:"fruit"}, {nom:"orange",type:"fruit"}, {nom:"pomme",type:"fruit"}, {nom:"raisins",type:"fruit"}, {nom:"kiwi",type:"fruit"}, {nom:"tomate",type:"legume"}, {nom:"carotte",type:"legume"}, {nom:"pomme de terre",type:"legume"}, {nom:"navet",type:"legume"}, {nom:"poivron",type:"legume"} ]
export default function App() {
  const [motCle, setMotCle] = useState("");
  const [typeChoisi, setTypeChoisi] = useState("");

  const resultats = liste.filter(function (produit) {
    const correspondMotCle = produit.nom
      .toLowerCase()
      .includes(motCle.toLowerCase());
    const correspondType = typeChoisi === "" || produit.type === typeChoisi;
    return correspondMotCle && correspondType;
  });

  return (
    <div>
      <h2>Recherche de produits</h2>
      <RechercheInput onRecherche={setMotCle} />
      <RechercheSelect valeur={typeChoisi} onSelect={setTypeChoisi} />
      <RechercheResultat produits={resultats} />
    </div>
  );
}