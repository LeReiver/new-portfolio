import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <main id="home">
          <h1 className="main-title">Full Stack Developer</h1>
          <p className="p1">Seeking a position where I can assist and contribute to a team of dynamic developers while strengthening my skills utilizing JavaScript, React, Redux, Node, HTML5, &amp; CSS3.
            </p>
            <p className="p2">Currently Enrolled in Thinkful's Engineering Immersion Program</p>
          <a href="#projects"><button className="projects-button">View Projects</button></a>
      </main>
    );
  }
}