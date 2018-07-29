import React, { Component } from 'react';
import NavComponent from '../navbar/navbar';
import './header.css';

export default class Header extends Component {


  render() {


    return (
      <header>
          <a href="#home"><h1 className="header-title">Michael Le-Reiver</h1></a>
            <NavComponent />
      </header>
    );
  }
}