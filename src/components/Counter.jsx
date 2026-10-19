import {useState} from "react";
import Valeur from "./Valeur";
import PasIncrement from "./PasIncremente";
import PasDecrement from "./PasDecrement";

function Counter() {
  const [counter,setCounter]=useState(0);
  const [pasInc,setPasInc]=useState(2);
  const [pasDec,setPasDec]=useState(2);
  
  function Initialiser() {
    setCounter(0);
  }
  function Incrementer() {
    setCounter((prev) => prev + pasInc);
  }
  function Decrementer() {
    setCounter((prev) => prev - pasDec);
  }

  return (
    <div>
      <Valeur counter={counter} />

      <div>
        <button onClick={Incrementer}>
          Incrémenter
        </button>
        <button onClick={Decrementer}>
          Décrémenter
        </button>
        <button onClick={Initialiser}>
          Initialiser
        </button>
      </div>

      <PasIncrement pas={pasInc} setPas={setPasInc} />
      <PasDecrement pas={pasDec} setPas={setPasDec} />
    </div>
  );
}
export default Counter;