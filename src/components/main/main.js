import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <main>
          <h1 className="main-title">Hello, I am a Full Stack Developer</h1>
          <p>Experience with Full Stack Web Development using JavaScript, React, Redux, Node, PHP, Java, HTML5, &amp; CSS3. Currently in Thinkful's Engineering Immersion Program</p>
          <button className="projects-button">View Projects</button>
      </main>
    );
  }
}