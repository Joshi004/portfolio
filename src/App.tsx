import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
