function PasIncrement({ pas, setPas }) {
  const options = [1, 2, 3, 4];

  return (
    <fieldset>
      <legend>Pas d'incrémentation</legend>
      {options.map((val) => (
        <button
          key={val}
          onClick={() => setPas(val)}
        >{val}</button>
      ))}
    </fieldset>
  );
}
export default PasIncrement;