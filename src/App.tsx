import React from 'react';
// import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { NavBar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
