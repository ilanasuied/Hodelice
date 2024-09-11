import React from 'react';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </nav>
      <Home />
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
