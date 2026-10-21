import TestAPI from "./TestAPI";
function UserCard(props){

    let adresse=props.user.adresse.street+" "+props.user.adresse.suite+" "+props.user.adresse.city
    let company= props.user.company.name

    return (
        <div style={{border: "1px solid grey",borderRadius: ".5rem",padding: "1rem"}}>{props.user.name}<br></br>{props.user.email}<br></br>{props.user.phone}<br></br>Adresse{adresse}<br></br> Entreprise: {company}</div>
    )
}


export default UserCard;

// "street": "Kulas Light",
// "suite": "Apt. 556",
// "city": "Gwenborough",
// "zipcode": "92998-3874",