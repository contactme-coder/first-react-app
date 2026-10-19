function PasDecrement({ pas, setPas }) {
  const options = [1, 2, 3, 4];

  return (
    <fieldset>
      <legend>Pas de décrémentation</legend>
      {options.map((val) => (
        <button
          key={val}
          onClick={() => setPas(val)}
        >{val}</button>
      ))}
    </fieldset>
  );
}
export default PasDecrement;