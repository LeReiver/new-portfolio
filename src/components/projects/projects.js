import React, { Component} from 'react';

export default class Projects extends Component {

render() {
  return (
    <div id="projects">
      <div className="project-block">
        <div className="project-icon">
          <img src="includes/img/ccs_desktop_md.png" alt="CCS" />
        </div>
        <div className="project_desc">
          <h3>Coordinated Consulting Services</h3>
          <p className="p2">Web Application Development <span id="pipe">|</span> Web Design <span id="pipe">|</span> Web Consulting <span id="pipe">|</span> Database Build</p>
          <p id="skills">A private and secure web application for a consulting firm built with PHP, JavaScript, and MySQL that
              requires user account creation and access, user input and uploads data to remote database with report generation capabilities.</p>
        </div>
      </div>

      <div>
          <div className="project-icon app">
                  <img src="includes/img/drums.png" alt="Drums" title="Click To View" />
          </div>
          <div className="project_desc">
            <h3>Drums</h3>
            <p className="p2">Android App Development <span id="pipe">|</span> App Design </p>
            <p id="skills">A rudimentary drum machine with language support for Italian and Japanese.</p>
            <div className="project-button">
                <a href="https://play.google.com/store/apps/details?id=app.lereiver.mike.drums" target="_blank" rel="noopener noreferrer">
                    <button id="_button">View Project</button></a>
            </div>
          </div>
      </div>
          <div>
              <div className="project-icon">
                     className <img src="includes/img/guano_desktop_phone.png" alt="Guano" title="Click To View"/>
              </div>
          </div>
          <div className="project_desc">
              <h3>Guano</h3>
              <p className="p2">Web Development <span id="pipe">|</span> Web Design </p>
              <p id="skills">A mobile-first website for a band, built with PHP and jQuery and a responsive CSS grid utilizing LESS. Incorporated a modifiable Audio Controller Plugin as an audio player.</p>
              <div className="project-button">
                  <a href="/../web/guano/" target="_blank" rel="noopener noreferrer">
                      <button id="_button">View Project</button></a>
              </div>
          </div>

        <div>
          <div>
              <div className="project-icon">
                      <img src="includes/img/burrito_desktop_iphone.png" alt="Burrito Masala" title="Click To View"/>
              </div>
          </div>
          <div className="project_desc">
              <h3>Burrito Masala</h3>
              <p className="p2">Web Development <span id="pipe">|</span> Web Design </p>
              <p id="skills">This fictitious food cart mobile-first website was built with PHP, utilizing responsive CSS and LESS.</p>
              <div className="project-button">
                  <a href="/../web/burrito_masala/" target="_blank" rel="noopener noreferrer">
                      <button id="_button">View Project</button></a>
              </div>
          </div>
      </div>
    </div>
    );
  }
}
