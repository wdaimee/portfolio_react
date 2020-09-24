import React, { useEffect } from 'react';
// import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { NavBar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  // Change Tab Title Name
  useEffect(() => {    
    document.title = "Waqas Daimee";
  });

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
