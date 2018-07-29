import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div id="home">
        <main>
          <h1 className="main-title">Full Stack Developer</h1>
          <Link to="projects"><button className="projects-button">View Projects</button></Link>
        </main>
      </div>
    );
  }
}