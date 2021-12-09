import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


class Nav extends React.Component{
 
  render(){
return  <div> 
    <nav>
      
          <h3 > Lisandro Neris's Portfolio </h3>

          <ul className= "nav-links">
            <Link to= '/about' style={{ textDecoration: 'none', color: 'white' }}> 
              <li>About</li>
            </Link> 
            <Link to= '/home' style={{ textDecoration: 'none', color: 'white' }}> 
              <li>Home</li>
            </Link> 
            <Link to= '/projects'style={{ textDecoration: 'none', color: 'white' }}> 
              <li>Projects</li>
              </Link> 
              <Link to= '/contact'style={{ textDecoration: 'none', color: 'white'}}> 
              <li>Contact</li>
              </Link> 

          </ul>
      </nav>
    
  </div>
}
}


export default Nav;
