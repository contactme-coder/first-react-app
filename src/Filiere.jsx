import Stagiaire from "./Stagiaire";
import Module from './composants/Module';
import NbHeures from "./composants/NbHeures";
function Filiere(){
    let styleDiv={border:'1px solid #ccc', borderRadius: '.5em'}
    let filieres = [
        {id: 7, name: "DEV"},
        {id: 8, name: "AI"},
        {id: 9, name: "Securite"},
        {id: 10, name: "Infographie"},
    ];
    let notes = [10,12,20];
return(
<div style={styleDiv}>
    {/* <Stagiaire/>
<Module/>
<NbHeures/> */}
   <ul>
    {filieres.map((filiere, index) => (
        <li key={filiere.id}>
           {filiere.id} - {filiere.name} ---- index {index} 
        </li>
    ))}
   </ul>

    les notes
   <ul>
        {notes.map((note,index) =(
            <li key={index}>{note}</li>
        )
   </ul>
}
export default Filiere;
