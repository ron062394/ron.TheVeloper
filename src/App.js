import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stacks from './components/Stacks';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Web3 from './components/Web3';
import DataAnalytics from './components/DataAnalytics';
import Games from './components/Games';


function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-br from-blue-50 to-purple-50 to-green-50 min-h-screen">
        <Header />
        <Hero />
        <Stacks />
        <Projects />
        <Services />
        <Games />
        <Web3 />
        <DataAnalytics />
        <Blogs />	
        <ContactMe />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
