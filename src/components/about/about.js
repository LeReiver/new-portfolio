import React, { Component } from 'react';
import './about.css';
import Skills from '../skills/skills'

export default class About extends Component {
  render() {
    return (
      <section role="complementary" id="about">
        <h1 className="about-title">Driven by Curiosity, Mastery, Technology, Sound, and Design</h1>
          <img className="bio-pic" src={require('../../images/bio-pic.jpg')}></img>
          <p className="p2 left about">
          My experience with music, art, traveling, food, and most importantly people, has provided me with skills to be a successful developer. I am innately compelled to learn and share new things, whether its the latest JavaScript framework, new cooking techniques or yet another musical instrument. I enjoy challenges that make me think outside the box and require creative solutions as well as surrounding myself with diverse people who bring their own passion to the table.
          </p>
      </section>
    );
  }
}