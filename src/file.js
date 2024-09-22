import './App.css';
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import WhatIDo from './components/WhatIDo';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'; // Import your CSS file here

function App() {
  return (
    <div className="max-w-6xl mx-auto px-4">
        <Header />
        <AboutMe />
        <WhatIDo />
        <Resume />
        <Footer />
    </div>
);
}

export default App;
