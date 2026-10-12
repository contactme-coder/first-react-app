import Stagiaire from "./Stagiaire";
import Module from './composants/Module';
import NbHeures from "./composants/NbHeures";
function Filiere(){
    let styleDiv={border:'1px solid #ccc', borderRadius: '.5em'}
return <div style={styleDiv}>
   <Stagiaire/>
   <Module/>
   <NbHeures/>
   </div>
}
export default Filiere;
