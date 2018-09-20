import React, { Component } from 'react'
import './skills.css'

export default class Skills extends Component {



render() {
  return (
  <div className="jumbotron section  white-section" id="my_skills">
        <div className="container">
            <div className="row section-header">
                <div className="col-md-12">
                    <h2 id="skill_heading">Skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div><div className="skills-icon lt_blue-hover-border"><img src="includes/images/imac_code5.png" /></div></div>
                    <h3 className="orange-underline">Languages</h3>
                    <table id="skills">
                        <tr><td>HTML5</td></tr>
                        <tr><td>CSS3</td></tr>
                        <tr><td>LESS</td></tr>
                        <tr><td>JavaScript/ES6</td></tr>
                        <tr><td>jQuery</td></tr>
                        <tr><td>PHP</td></tr>
                        <tr><td>SQL/MySQL</td></tr>
                        <tr><td>XML</td></tr>
                        <tr><td>Java</td></tr>
                        <tr><td>&nbsp;</td></tr>
                    </table>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div><div className="skills-icon lt_blue-hover-border"><img src="includes/images/technologies.png" /></div></div>
                    <h3 className="orange-underline">Technologies</h3>
                    <table id="skills">
                        <tr><td>Git/Version Control</td></tr>
                        <tr><td>Jira</td></tr>
                        <tr><td>JavaEE</td></tr>
                        <tr><td>Debugging</td></tr>
                        <tr><td>Unit Testing</td></tr>
                        <tr><td>Linux CLI</td></tr>
                        <tr><td>Bootstrap</td></tr>
                        <tr><td>WordPress</td></tr>
                        <tr><td>Android Development</td></tr>
                        <tr><td>&nbsp;</td></tr>
                    </table>
                </div>


                <div className="col-md-3 col-sm-6">
                    <div><div className="skills-icon lt_blue-hover-border"><img src="includes/images/design.png" /></div></div>
                    <h3 className="orange-underline">Design</h3>
                    <table id="skills">
                        <tr><td>Responsive UI/UX</td></tr>
                        <tr><td>Wireframes</td></tr>
                        <tr><td>Adobe Photoshop</td></tr>
                        <tr><td>Data Driven Design</td></tr>
                        <tr><td>User Personas</td></tr>
                        <tr><td>User Stories</td></tr>
                        <tr><td>Heuristic Evaluations</td></tr>
                        <tr><td>UML,ERDs,DFDs</td></tr>
                        <tr><td>&nbsp;</td></tr>
                    </table>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div><div className="skills-icon lt_blue-hover-border"><img src="includes/images/my_audio3.png" /></div></div>
                    <h3 className="orange-underline">Audio</h3>
                    <table id="skills">
                        <tr><td>Digital Recording</td></tr>
                        <tr><td>Digital Mixing</td></tr>
                        <tr><td>Digital Editing</td></tr>
                        <tr><td>Post Production</td></tr>
                        <tr><td>Live Sound</td></tr>
                        <tr><td>Sound Design</td></tr>
                        <tr><td>Sync To Picture</td></tr>
                        <tr><td>MIDI</td></tr>
                        <tr><td>&nbsp;</td></tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
   
    )
}



}