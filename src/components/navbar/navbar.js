// React responsive navbar from https://codepen.io/danbuda/post/a-react-navbar-component

import React from 'react';
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
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
          <div className="narrowLinks" >
            <a href="#about" onClick={this.burgerToggle}>
            About
            </a>
            <a href="#projects" onClick={this.burgerToggle}>
              Projects
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
};

