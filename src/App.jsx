import { useState } from 'react';
import './App.css';

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("Bronze");
  const [terms, setTerms] = useState(false);

  function envoyerFormulaire(event) {
    event.preventDefault();
    alert("Formulaire envoyé avec succès !");
    console.log("Prénom:", firstName, "Nom:", lastName, "Ville:", city, "Email:", email);
  }
  return (
    <div className="formulaire">
      <div className="entete">Membership Registration</div>

      <form className="contenu" onSubmit={envoyerFormulaire}>

        <div className="rangee">
          <div className="champ">
            <label>First Name <span className="etoile">*</span></label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="champ">
            <label>Last Name <span className="etoile">*</span></label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>

        <div className="champ">
          <label>Street Address <span className="etoile">*</span></label>
          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required />
        </div>

        <div className="champ">
          <label>Address Line 2</label>
          <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} />
        </div>

        <div className="rangee">
          <div className="champ">
            <label>City <span className="etoile">*</span></label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

          </div>
          <div className="champ">
            <label>State / Région <span className="etoile">*</span></label>
            <select value={region} onChange={(e) => setRegion(e.target.value)} required>
              <option value="">Sélectionnez une région</option>
              <option value="Tanger-Tétouan-Al Hoceïma">Tanger-Tétouan-Al Hoceïma</option>
              <option value="L'Oriental">L'Oriental</option>
              <option value="Fès-Meknès">Fès-Meknès</option>
              <option value="Rabat-Salé-Kénitra">Rabat-Salé-Kénitra</option>
              <option value="Béni Mellal-Khénifra">Béni Mellal-Khénifra</option>
              <option value="Casablanca-Settat">Casablanca-Settat</option>
              <option value="Marrakech-Safi">Marrakech-Safi</option>
              <option value="Drâa-Tafilalet">Drâa-Tafilalet</option>
              <option value="Souss-Massa">Souss-Massa</option>
              <option value="Guelmim-Oued Noun">Guelmim-Oued Noun</option>
              <option value="Laâyoune-Sakia El Hamra">Laâyoune-Sakia El Hamra</option>
              <option value="Dakhla-Oued Ed-Dahab">Dakhla-Oued Ed-Dahab</option>
            </select>
          </div>
        </div>

        <div className="rangee">
          <div className="champ">
            <label>Zip Code <span className="etoile">*</span></label>
            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required pattern="[0-9]{5}" title="Veuillez entrer un code postal à 5 chiffres" />
          </div>
          <div className="champ">
            <label>Phone Number <span className="etoile">*</span></label>
           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" title="Veuillez entrer un numéro de téléphone à 10 chiffres" />
          </div>
        </div>

        <div className="champ">
          <label>Email Address <span className="etoile">*</span></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="champ">
          <label>Choose your membership level <span className="etoile">*</span></label>
          <div className="radio-group">
          <label><input type="radio" name="level" value="Bronze" checked={level === 'Bronze'} onChange={(e) => setLevel(e.target.value)} /> Bronze</label>
          <label><input type="radio" name="level" value="Silver" checked={level === 'Silver'} onChange={(e) => setLevel(e.target.value)} /> Silver</label>
          <label><input type="radio" name="level" value="Gold" checked={level === 'Gold'} onChange={(e) => setLevel(e.target.value)} /> Gold</label>
          <label><input type="radio" name="level" value="Platinum" checked={level === 'Platinum'} onChange={(e) => setLevel(e.target.value)} /> Platinum</label>
          </div>
        </div>

        <div className="champ">
          <label>Terms and Conditions <span className="etoile">*</span></label>
          <div className="checkbox-group">
            <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} required />
            <label>J'accepte les termes et conditions</label>
          </div>
        </div>

        <button type="submit">S'inscrire</button>

      </form>
    </div>
  );
}