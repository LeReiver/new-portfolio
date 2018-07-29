import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
  render() {
    return (
      <section role="complementary" id="about">
        <h1 className="about-title">Driven by</h1>
        <figure >
          <img src={require("../../images/hero4.jpg")}
          className="left" />
          <figcaption>
            <p className="p2">Curiousity</p>
          </figcaption> 
        </figure>
        <figure >
          <img src={require("../../images/hero4.jpg")}
          className="right"/>
          <figcaption>
            <p className="p2">Technology</p>
          </figcaption>
        </figure> 
        <figure>
          <img src={require("../../images/hero4.jpg")}
          className="left"/>
        <figcaption>
        <p className="p2 right">Sound</p>
          </figcaption>
        </figure>
        <figure>
          <img src={require("../../images/hero4.jpg")}
          className="right"/>
          <figcaption>
            <p className="p2 left">Design</p>
          </figcaption>
        </figure>
      </section>
    );
  }
}