import React from 'react';
import Nav from './Nav';
import './App.css';
import react from 'react';



class Home extends React.Component {
  constructor(props){
    super (props);
    this.state={
items:[],
currentItem:{
  text:'',
  key:''
}
    }
  }

 render() {
   return ( <div> 
   <Nav/>
            <h1 className= "homeTitle"> Welcome To Your very own To-Do App </h1>
            
    
  <div className = "main">


 <header> 
   <form id= "to-do-form"> 
   <input type= "text" placeholder = "Enter Text"/>
   <button type= "submit"> Add </button>

   </form>
 </header>

  </div>

  
 </div>
   )
 }

     }
     


export default Home;
