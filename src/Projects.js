import React from 'react';
import './App.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';


function Projetcs() {
  return (
    <><div>
      <Nav />
      <h1 className="title">Projects</h1>
      <Link to='/project1'>
        <a href="./Project1.js" target="_blank">
          <button className="button">

            VidCheck - Explainer Video
          </button>
        </a>
      </Link>
    </div><div>
        <Link to='/project2'>
          <a href="./Project2.js" target="_blank">
            <button className="button">

              MANARI Music Arts Festival Brand Identity
            </button>
          </a>
        </Link>

      </div></>
  );
}

export default Projetcs;
