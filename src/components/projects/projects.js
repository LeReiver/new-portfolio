import React, { Component} from 'react';
import './projects.css';

export default class Projects extends Component {

render() {
  return (
    <div id="projects">
      <h1 className="project-title">Projects</h1>

      <div className="project-block">
        <div className="project-image">
          <img src={require("../../images/vinylog_desktop_iPhone.png")}alt="CCS"></img>
        </div>
        <div className="project-desc">
          <h2>Vinylog</h2>
          <p className="p2 desc">Vinylog is web application that allows users to create a private and secure account to catalog their vinyl collection. By searching for an album title or artists name, users can retrieve a list of album release data including title, album image, genre, and release year. Users will be able to save results to their collection, view their collection, and remove them as well.</p>
          <p className="p2 stack">
          Stack:
            <blockquote>JavaScript, React/Redux, Node.js, MongoDB, JWT Auth, Mocha/Chai, HTML5, CSS3</blockquote>
          </p>
            <div className="project-button">
                <a href="https://vinylog.herokuapp.com/" target="_blank">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/LeReiver/mike_vinylog_client" target="_blank">
                <button>View Repo</button></a>
            </div>
        </div>
      </div> 

      <div className="project-block">
        <div className="project-image ccs">
          <img src={require("../../images/ccs_desktop_md.png")}alt="CCS"></img>
        </div>
        <div className="project-desc">
          <h2>Coordinated Consulting Services</h2>
          <p className="p2 desc">A private and secure web application for a consulting firm that
              requires user account creation and access, user input and uploads data to remote database with report generation capabilities.</p>
          <p className="p2 stack">
          Stack:
            <blockquote>PHP, JavaScript, MySQL, HTML5, CSS3</blockquote>
          </p>
        </div>
      </div>

      <div className="project-block">
          <div className="project-image app">
            <img src={require("../../images/drums.png")} alt="Drums" title="Click To View" />
          </div>
          <div className="project-desc">
            <h2>Drums</h2>
            <p className="p2 desc">An Android app that I built for fun. It is a rudimentary drum machine with language support for Italian and Japanese.</p>
          <p className="p2 stack">
          Stack:
            <blockquote>Java, XML, CSS3, Gradle, Android</blockquote>
          </p>
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
    );
  }
}
