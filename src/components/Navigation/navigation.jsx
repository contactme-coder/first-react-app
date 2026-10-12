import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav
        style={{
          background: '#333',
          padding: '10px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="#accueil" style={{ color: '#fff', textDecoration: 'none' }}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#profil" style={{ color: '#fff', textDecoration: 'none' }}>
              Profil
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;