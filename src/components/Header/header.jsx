import React from 'react';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header
      id="accueil"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '15px',
        background: '#f0f0f0',
      }}
    >
      <img src={logo} alt="logo" width="60" height="60" />
      <h1>Mon Site</h1>
    </header>
  );
}

export default Header;