import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Project1 from './Project1';
import Project2 from './Project2';
import './App.css';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className = "App">

    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>

        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project1" element={<Project1/>}/>
        <Route path="/project2" element={<Project2/>}/>




      </Routes>
  </Router>
    </div>
  );
}

export default App;
