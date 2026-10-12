import React from 'react';
import Header from './components/Header/header';
import Navigation from './components/Navigation/navigation';
import Profil from './components/Content/profil';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profil />
      <Footer />
    </div>
  );
}

export default App;