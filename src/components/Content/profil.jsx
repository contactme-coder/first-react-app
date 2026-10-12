import React from 'react';
import Detail from './detail';
import General from './general';
import Other from './other';
import photo from '../../images/profil.png';

function Profil() {
  return (
    <div id="profil" style={{ padding: '20px' }}>
      <h2>Student Profile Page Design Example</h2>
      <p>A responsive student profile page design.</p>
      <img
        src={photo}
        alt="profil"
        width="150"
        style={{ borderRadius: '50%' }}
      />
      <Detail />
      <General />
      <Other />
    </div>
  );
}

export default Profil;