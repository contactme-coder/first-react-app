import './App.css';

export default function App() {
  return (
    <div className="formulaire">
      <div className="entete">Membership Registration</div>

      <form className="contenu">

        <div className="rangee">
          <div className="champ">
            <label>First Name <span className="etoile">*</span></label>
            <input type="text" required />
          </div>
          <div className="champ">
            <label>Last Name <span className="etoile">*</span></label>
            <input type="text" required />
          </div>
        </div>

        <div className="champ">
          <label>Street Address <span className="etoile">*</span></label>
          <input type="text" required />
        </div>

        <div className="champ">
          <label>Address Line 2</label>
          <input type="text" />
        </div>

        <div className="rangee">
          <div className="champ">
            <label>City <span className="etoile">*</span></label>
            <input type="text" required />
          </div>
          <div className="champ">
            <label>State / Région <span className="etoile">*</span></label>
            <select required>
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
            <input type="text" required pattern="[0-9]{5}" title="Veuillez entrer un code postal à 5 chiffres" />
          </div>
          <div className="champ">
            <label>Phone Number <span className="etoile">*</span></label>
            <input type="tel" required pattern="[0-9]{10}" title="Veuillez entrer un numéro de téléphone à 10 chiffres" />
          </div>
        </div>

        <div className="champ">
          <label>Email Address <span className="etoile">*</span></label>
          <input type="email" required />
        </div>

        <div className="champ">
          <label>Choose your membership level <span className="etoile">*</span></label>
          <div className="radio-group">
            <label><input type="radio" name="level" required /> Bronze</label>
            <label><input type="radio" name="level" /> Silver</label>
            <label><input type="radio" name="level" /> Gold</label>
            <label><input type="radio" name="level" /> Platinum</label>
          </div>
        </div>

        <div className="champ">
          <label>Terms and Conditions <span className="etoile">*</span></label>
          <div className="checkbox-group">
            <input type="checkbox" required />
            <label>J'accepte les termes et conditions</label>
          </div>
        </div>

        <button type="submit">S'inscrire</button>

      </form>
    </div>
  );
}