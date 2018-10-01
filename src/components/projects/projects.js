import React, { Component} from 'react';
import './projects.css';

export default class Projects extends Component {

render() {
  return (
    <div id="projects">
      <h1 className="project-title">Projects</h1>
      <hr />
      <div className="project-block">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/karpul_desktop_phone.png")}alt="Karpul"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Karpul</h2>
          <p className="project-p desc">
          Karpul is a web application that allows users to find and create carpools. Users can search for a carpool by destination address, request to join carpools, and get to know carpool members from their profile.
          </p>
          <div className="stack-list">
            <ul>
              <li>JavaScript</li>
              <li>React/Redux</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <ul>
              <li>Node.js</li>
              <li>MongoDB/Mongoose</li>
              <li>JWT Auth</li>
              <li>Mocha/Chai</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
                <a href="https://karpul-client.surge.sh" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/thinkful-ei21/client-karpul" target="_blank" rel="noopener noreferrer">
                <button>View Repo</button></a>
            </div>
          </div>
        </div>
      </div> 

      <div className="project-block vinyl">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/vinylog_desktop_iPhone.png")}alt="Vinylog"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Vinylog</h2>
          <p className="project-p desc">
          Vinylog is web application that allows users to create an account and catalog their vinyl collection. By searching for an album title or artists name, users can retrieve a list of album with release details including title, album image, genre, and release year. Users can then add albums to their collection.
          </p>
          <div className="stack-list">
            <ul>
              <li>JavaScript</li>
              <li>React/Redux</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <ul>
              <li>Node.js</li>
              <li>MongoDB/Mongoose</li>
              <li>JWT Auth</li>
              <li>Mocha/Chai</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
                <a href="https://vinylog.surge.sh" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/thinkful-ei21/mike_vinylog_client" target="_blank" rel="noopener noreferrer">
                <button>View Repo</button></a>
            </div>
          </div>
        </div>
      </div> 

      <div className="project-block">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/whereami_desktop_phone.png")}alt="Where am I?"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Where Am I?</h2>
          <p className="project-p desc">
          Where Am I? is a pair project web application that uses spaced repetition to create a learning experience for associating famous monuments with the countries they are in. It is great for testing your memory and for inspiring future travel.
          </p>
          <div className="stack-list">
            <ul>
              <li>JavaScript</li>
              <li>React/Redux</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <ul>
              <li>Node.js</li>
              <li>MongoDB/Mongoose</li>
              <li>JWT Auth</li>
              <li>Mocha/Chai</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
                <a href="https://whereami.surge.sh" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/thinkful-ei21/Mike-Giovanni-Spaced-Repetition-Client" target="_blank" rel="noopener noreferrer">
                <button>View Repo</button></a>
            </div>
          </div>
        </div>
      </div> 

      <div className="project-block app">
        <div className="project-image app">
          <img src={require("../../images/drums.png")} alt="Drums" title="Click To View" />
        </div>
        <div className="project-desc app">
          <h2 className="app-h2">Drums</h2>
          <p className="project-p desc">Drums is an Android app that is a rudimentary drum machine with language support for Italian and Japanese. Great for children to learn the parts of the drums.</p>
        <ul>
          <li>Java</li>
          <li>XML</li>
          <li>CSS3</li>
        </ul>
        <ul>
          <li>Android SDK</li>
          <li>Gradle</li>
        </ul>
        <div className="project-button-group">
          <div className="project-button">
              <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                <button>View Project</button></a>
          </div>
          <div className="repo-button">
              <a href="https://github.com/LeReiver/drums" target="_blank" rel="noopener noreferrer">
                <button>View Repo</button></a>
          </div>
        </div>
      </div>
    </div>

      <div className="project-block hshi">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/hshi_desktop_phone.png")}alt="Home Sweet Home"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Home Sweet Home Inspections</h2>
          <p className="project-p desc">
          Home Sweet Home Inspections is a home inspection business based out of Atlanta, Georgia. I created this WordPress site to provide the client with a mobile and modern web presence to increase visibility and to allow customers to schedule their home inspection.
          </p>
          <div className="stack-list">
            <ul>
              <li>WordPress</li>
              <li>PHP</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
              <a href="http://hsh-inspections.com/" target="_blank" rel="noopener noreferrer">
                <button>View Website</button></a>
            </div>
            <div className="repo-button disabled">
                <a href="" target="_blank" rel="noopener noreferrer">
                <button disabled>No Repo</button></a>
            </div>
          </div>
        </div>
      </div> 
    

      <div className="project-block">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/ccs_desktop.png")}alt="CCS"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Coordinated Consulting Services</h2>
          <p className="project-p desc">A robust web application for a consulting firm that includes user authentication and data persistence for report building. I was initially contracted for a database redesign, but upon hearing about their issues with scalability, I suggested developing a web application to handle the company's need to improve data gathering and reporting.</p>
          <ul>
            <li>PHP</li>
            <li>jQuery</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>MySQL</li>
            <li>phpMyAdmin</li>
          </ul>
        </div>
      </div>

      <div className="project-block kc">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/kitchen-commons_desktop_phone.png")}alt="Kitchen Commons"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Kitchen Commons</h2>
          <p className="project-p desc">
          Kitchen Commons is a non-profit organization in Portland, Oregon that provides community kitchen resources. As an intern, I designed content and element layout for WordPress site, customized theme to match branding styles, and administered user accounts and plugins.
          </p>
          <div className="stack-list">
            <ul>
              <li>WordPress</li>
              <li>PHP</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
              <a href="https://kitchencommons.net/" target="_blank" rel="noopener noreferrer">
                <button>View Website</button></a>
            </div>
            <div className="repo-button disabled">
                <a href="" target="_blank" rel="noopener noreferrer">
                <button disabled>No Repo</button></a>
            </div>
          </div>
        </div>
      </div> 
    </div>
    );
  }
}
