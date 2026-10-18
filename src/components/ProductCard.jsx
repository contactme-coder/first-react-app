function ProductCard(props) {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <p>Prix : {props.product.price} DH</p>
      <p>{props.product.stock ? "Disponible" : "Rupture de stock"}</p>
    </div>
  );
}

export default ProductCard;