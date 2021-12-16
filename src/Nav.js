import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


class Nav extends React.Component{
 
  render(){
return  <div> 
    <nav>
      
          <h3 > ***** My To-Do's *****</h3>

          <ul className= "nav-links">
           
            <Link to= '/home' style={{ textDecoration: 'none', color: 'white' }}> 
              <li>To-Do's</li>
            </Link> 
           <Link to= '/about' style={{ textDecoration: 'none', color: 'white' }}> 
              <li>About</li>
            </Link> 

          </ul>
      </nav>
    
  </div>
}
}


export default Nav;
