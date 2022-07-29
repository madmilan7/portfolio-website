import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Experience />
    </div>
  );
}

export default App;
