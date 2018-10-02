import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div id="home">
        <main>
          <h1 className="main-title">Hello,<br/>I am a Full-Stack Developer.</h1>
          <p className="p2 heading">Passionate about creating digital solutions.</p>
          <Link to="projects"><button className="projects-button">View Projects</button></Link>
        </main>
      </div>
    );
  }
}