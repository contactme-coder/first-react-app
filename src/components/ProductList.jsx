import ProductCard from "./ProductCard";

function ProductList() {
  let products = [
    { id: 1, name: "Clavier", price: 150, stock: true },
    { id: 2, name: "Souris", price: 80, stock: true },
    { id: 3, name: "Écran", price: 1200, stock: false },
    { id: 4, name: "Casque", price: 250, stock: true },
  ];

  return (
    <div>
      <h2>Exercice 3</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;