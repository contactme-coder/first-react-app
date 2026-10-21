export default function RechercheResultat({ produits }) {
  if (produits.length === 0) {
    return <p>Aucun produit ne correspond.</p>;
  }
  return (
    <ul>
      {produits.map(function (p) {
        return (
          <li key={p.nom}>
            <span>{p.nom}</span>
            <em>{p.type}</em>
          </li>
        );
      })}
    </ul>
  );
}