import React from 'react';
// import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { NavBar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <div style={{height: '100vh'}}></div>
    </div>
  );
}

export default App;
