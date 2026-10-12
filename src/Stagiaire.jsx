function Stagiaire() {
  var styleList= {color:'red' }
  var styleList2= {color:'blue',fontSize:'20px' }
  let styleNom=  {fontWeight:'700',margin:'1rem',color:'#0bb6b6',backgroundColor:"yellow",fontSize:"3rem"
    };
  let status="";
  let nom="El khamlichiiiii";
  let stg={nom:"Rahali",prenom:"Walid",groupe:"Groupe 2",age:18};
  if (stg.age>18){
    status="Majeur";
  }else{
    status="Mineur";
  }
  return (
    <div>
      <p>Nom:{nom}</p>
      <p style={styleNom}>Nom:{stg.nom}</p> 
      <p style={styleList}>Prénom:{stg.prenom}</p>
      <p style={styleList2}>groupe:{stg.groupe}</p>
      <p>Age:{stg.age}</p>
      <p>Statut:{stg.age>18?"Majeur":"Mineur"}</p>
      <p>Statut:{status}</p>
    </div>
  );
}
export default Stagiaire;
