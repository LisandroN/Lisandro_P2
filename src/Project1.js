import React from 'react';
import Nav from './Nav';
import './App.css';

function Project1() {


  return (
    <div >
      <Nav/>
      <div >
      <h1 className= "title">VidCheck - Explainer Video</h1>
      <p className= "text"> VidCheck is an online store that provides professional, collectible, and everyday gear for camera lovers everywhere. This informative video provides viewers a general idea of the services that this company provides, how they can shop at VidCheck and why they should shop at VidCheck. </p>
      
    </div>

<div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/j1cAWpwIr9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
 
    </div>
  );
}

export default Project1;
 