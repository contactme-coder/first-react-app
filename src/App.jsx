import { useState } from 'react';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    membershipLevel: 'Bronze',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises :', formData);
    alert('Formulaire soumis avec succès ! Vérifiez la console (F12).');
  };

  return (
    <div className="form-container">
      <div className="form-header">Membership Registration</div>
      
      <form className="form-body" onSubmit={handleSubmit}>
        
        <div className="row">
          <div className="col">
            <label>First Name <span className="required">*</span></label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Last Name <span className="required">*</span></label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Street Address <span className="required">*</span></label>
            <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Address Line 2</label>
            <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>City <span className="required">*</span></label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>State <span className="required">*</span></label>
            <select name="state" value={formData.state} onChange={handleChange} required>
              <option value="">Sélectionnez</option>
              <option value="NY">New York</option>
              <option value="CA">Californie</option>
              <option value="TX">Texas</option>
              <option value="FL">Floride</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Zip Code <span className="required">*</span></label>
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
          </div>
          <div className="col">
            <label>Phone Number <span className="required">*</span></label>
            <input type="tel" name="phoneNumber" placeholder="(___) ___-____" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Email Address <span className="required">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Choose your membership level <span className="required">*</span></label>
            <div className="radio-group">
              <label><input type="radio" name="membershipLevel" value="Bronze" checked={formData.membershipLevel === 'Bronze'} onChange={handleChange} /> Bronze</label>
              <label><input type="radio" name="membershipLevel" value="Silver" checked={formData.membershipLevel === 'Silver'} onChange={handleChange} /> Silver</label>
              <label><input type="radio" name="membershipLevel" value="Gold" checked={formData.membershipLevel === 'Gold'} onChange={handleChange} /> Gold</label>
              <label><input type="radio" name="membershipLevel" value="Platinum" checked={formData.membershipLevel === 'Platinum'} onChange={handleChange} /> Platinum</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Terms and Conditions <span className="required">*</span></label>
            <div className="checkbox-group">
              <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
              <label>J'accepte les termes et conditions</label>
            </div>
          </div>
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}