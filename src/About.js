import React from 'react';
import Nav from './Nav';
import './App.css';
function About() {


  return (
    <div >
      <Nav/>
      <div >
      <h1 className= "title">About </h1>
      <p className= "text"> Hey! My name is Lisandro Neris (he/him) and I am a Graphic Designer and life enthusiast based in New York City, specializing in Logo branding and design but who is also not afraid to indulge in other creative works. I am currently doing freelance work and pursuing a Bachelor's Degree in Computer Graphics and Imaging from CUNY, Lehman College. </p>
      <a href="https://drive.google.com/file/d/1u0-FG5xfbfYPF1XqV9Oqmhrz070kCRA3/view?usp=sharing" target="_blank">
      <button  className = "button">

    Resume Link
    </button>
</a>
    </div>
    
 
    </div>
  );
}

export default About;
 