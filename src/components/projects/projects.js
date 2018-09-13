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
          <img src={require("../../images/karpul_desktop_phone.png")}alt="CCS"></img>
        </div>
        <div className="project-desc desktop-mobile">
          <h2>Karpul</h2>
          <p className="project-p desc">
          Karpul web application that allows users to find and create carpools. Users can search for an carpool by destination address, request to join carpools, and get to know carpool members from their profile.
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
              <li>JWT Auth</li>
              <li>MongoDB</li>
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

      <div className="project-block">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/vinylog_desktop_iPhone.png")}alt="CCS"></img>
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
              <li>JWT Auth</li>
              <li>MongoDB</li>
              <li>Mocha/Chai</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
                <a href="https://vinylog.surge.sh" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/LeReiver/mike_vinylog_client" target="_blank" rel="noopener noreferrer">
                <button>View Repo</button></a>
            </div>
          </div>
        </div>
      </div> 

      <div className="project-block">
        <div className="project-image desktop-mobile">
          <img src={require("../../images/whereami_desktop_phone.png")}alt="CCS"></img>
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
              <li>JWT Auth</li>
              <li>MongoDB</li>
              <li>Mocha/Chai</li>
            </ul>
          </div>
          <div className="project-button-group">
            <div className="project-button">
                <a href="https://whereami.surge.sh" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/LeReiver/mike_vinylog_client" target="_blank" rel="noopener noreferrer">
                <button>View Repo</button></a>
            </div>
          </div>
        </div>
      </div> 

      <div className="project-block ccs">
        <div className="project-image ccs">
          <img src={require("../../images/ccs_desktop_md.png")}alt="CCS"></img>
        </div>
        <div className="project-desc ccs">
          <h2>Coordinated Consulting Services</h2>
          <p className="project-p desc">A private and secure web application for a consulting firm that
              requires user account creation and access, user input and uploads data to remote database with report generation capabilities.</p>
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

      <div className="project-block app">
        <div className="project-image app">
          <img src={require("../../images/drums.png")} alt="Drums" title="Click To View" />
        </div>
        <div className="project-desc app">
          <h2 className="app-h2">Drums</h2>
          <p className="project-p desc">An Android app that is a rudimentary drum machine with language support for Italian and Japanese. Great for children to learn the parts of the drums</p>
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

    </div>
    );
  }
}
