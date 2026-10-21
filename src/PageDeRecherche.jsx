import { useState, useMemo } from "react";
import { list } from "./donnees";
import RechercheInput from "./components/RechercheInput";
import RechercheSelect from "./components/RechercheSelect";
import RechercheResultat from "./components/RechercheResultat";

export default function PageDeRecherche() {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");

  const results = useMemo(() => {
    return list.filter((p) => {
      const matchKeyword = p.nom
        .toLowerCase()
        .includes(keyword.trim().toLowerCase());
      const matchType = type === "" || p.type === type;
      return matchKeyword && matchType;
    });
  }, [keyword, type]);

  return (
    <div>
      <h2>Recherche de produits</h2>
      <RechercheInput onSearch={setKeyword} />
      <RechercheSelect value={type} onSelect={setType} />
      <RechercheResultat produits={results} />
    </div>
  );
}
