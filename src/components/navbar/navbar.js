// React responsive navbar from https://codepen.io/danbuda/post/a-react-navbar-component

import React from 'react';
import { Link }  from 'react-router-dom';
import '../header/header.css';


export default class NavComponent extends React.Component {

  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }

  render() {
    return (
      <nav >
        <div className="navWide">
          <div className="wideDiv">
            <Link to="about">About</Link>
            <Link to="projects">Projects</Link>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
          <div className="narrowLinks" >
            <Link to="about" onClick={this.burgerToggle}>
              About
            </Link>
            <Link to="projects" onClick={this.burgerToggle}>
              Projects
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  
};

