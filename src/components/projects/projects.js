import React, { Component} from 'react';
import './projects.css';

export default class Projects extends Component {

render() {
  return (
    <div id="projects">
      <h1 className="project-title">Projects</h1>

      <div className="project-block">
        <div className="project-image">
          <img src={require("../../images/mobile-m-collection.png")}alt="CCS"></img>
        </div>
        <div className="project-desc">
          <h2>Vinylog</h2>
          <p>Vinylog is web application that allows users to create a private and secure account to catalog their vinyl collection. By searching for an album title or artists name, users can retrieve a list of album release data including title, album image, genre, and release year. Users will be able to save results to their collection, view their collection, and remove them as well.</p>
          <p className="p2"> JavaScript <span id="pipe">|</span> React/Redux <span id="pipe">|</span> Node <span id="pipe">|</span> Database Build <span id="pipe">|</span> JWT Auth <span id="pipe">|</span> Mocha/Chai Testing</p>
            <div className="project-button">
                <a href="https://vinylog.herokuapp.com/">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://github.com/LeReiver/mike_vinylog_client" target="_blank">
                <button>View Repo</button></a>
            </div>
        </div>
      </div>

      <div className="project-block">
        <div className="project-image">
          <img src={require("../../images/ccs_desktop_md.png")}alt="CCS"></img>
        </div>
        <div className="project-desc">
          <h2>Coordinated Consulting Services</h2>
          <p>A private and secure web application for a consulting firm built with PHP, JavaScript, and MySQL that
              requires user account creation and access, user input and uploads data to remote database with report generation capabilities.</p>
          <p className="p2">Web Application Development <span id="pipe">|</span> Web Design <span id="pipe">|</span> Web Consulting <span id="pipe">|</span> Database Build</p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="/../web/buddha_bellies/" target="_blank">
                <button>View Repo</button></a>
            </div>
        </div>
      </div>

      <div classname="project-block">
          <div className="project-image app">
            <img src={require("../../images/drums.png")} alt="Drums" title="Click To View" />
          </div>
          <div className="project-desc">
            <h2>Drums</h2>
            <p>A rudimentary drum machine with language support for Italian and Japanese.</p>
            <p className="p2">Android App Development <span id="pipe">|</span> App Design </p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Repo</button></a>
            </div>
          </div>
      </div>

      <div className="project-block">
        <div className="project-image">
            <img src={require("../../images/guano_desktop_phone.png")} alt="Guano" title="Click To View"/>
        </div>
        <div className="project-desc">
            <h2>Guano</h2>
            <p>A mobile-first website for a band, built with PHP and jQuery and a responsive CSS grid utilizing LESS. Incorporated a modifiable Audio Controller Plugin as an audio player.</p>
            <p className="p2">Web Development <span id="pipe">|</span> Web Design </p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="/../web/guano/" target="_blank" rel="noopener noreferrer">
                    <button>View Repo</button></a>
            </div>
        </div>
      </div>

      <div classname="project-block">
        <div className="project-image">
            <img src={require("../../images/burrito_desktop_iphone.png")} alt="Burrito Masala" title="Click To View"/>
        </div>
        <div className="project-desc">
            <h2>Burrito Masala</h2>
            <p>This fictitious food cart mobile-first website was built with PHP, utilizing responsive CSS and LESS.</p>
            <p className="p2">Web Development <span id="pipe">|</span> Web Design </p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="/../web/burrito_masala/" target="_blank" rel="noopener noreferrer">
                    <button >View Repo</button></a>
            </div>
        </div>
      </div>

      <div classname="project-block">
        <div className="project-image">
                <img src={require("../../images/tip_calculator_desktop.png")} alt="Tip Calculator" title="Click To View" />
        </div>
        <div className="project-desc">
            <h2>A Tip Calculator</h2>
            <p>A Single Page Web Application built with PHP, HTML5 and CSS3.</p>
            <p className="p2">Web Application Development <span id="pipe">|</span> Web Application Design </p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="/../php/tip_calculator" target="_blank">
                    <button>View Repo</button></a>
            </div>
        </div>
      </div>

      <div classname="project-block">
        <div className="project-image">
            <img src={require("../../images/buddhabellies_desktop.png")} alt="Buddha Bellies Noodle House" title="Click To View" />
        </div>
        <div className="project-desc">
            <h2>Buddha Bellies Noodle House</h2>
            <p>A fictitious restaurant website built with hand rolled HTML5 and CSS3.</p>
            <p className="p2">Web Development <span id="pipe">|</span> Web Design </p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                  <button>View Project</button></a>
            </div>
            <div className="repo-button">
                <a href="/../web/buddha_bellies/" target="_blank">
                <button>View Repo</button></a>
            </div>
        </div>
        </div>
    </div>
    );
  }
}
