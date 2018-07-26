import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

  myFunction() {
    // var x = document.getElementById("myTopnav");
    // if (x.className === "topnav") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "topnav";
    // }
}
  render() {


    return (
      <header>
          <a href="#home"><h1 className="header-title">Michael Le-Reiver</h1></a>
          <nav className="topnav" id="myTopnav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {/* <a href="javascript:void(0);" className="icon" onClick={this.myFunction()}>&#9776;</a> */}
          </nav>
      </header>
    );
  }
}