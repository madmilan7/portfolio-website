import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Experience from './components/Experience';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Comments />
    </div>
  );
}

export default App;
