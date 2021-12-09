import React from 'react';
import Nav from './Nav';
import './App.css';
import myImage from './LisandroNeris.jpg';



function Home() {
  
 return <div> 
   <Nav/>
            <h1 className= "homeTitle"> Welcome To My Portfolio </h1>
            <div  className="image">
    <img src={myImage} alt="myImage"/>
    
       </div>

 </div>

     }
     


export default Home;
