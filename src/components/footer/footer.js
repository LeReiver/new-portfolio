import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social-links">
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/michael-le-reiver/" target="_blank" rel="noopener noreferrer"><i id="footer-linkedIn" className="fa fa-linkedin-square" aria-hidden="true" 
            alt="To my LinkedIn" /></a>
          </div>
          <div className="footer-item">
            <a href="https://github.com/LeReiver" target="_blank" rel="noopener noreferrer"><i id="footer-github" 
            className="fa fa-github-square" aria-hidden="true" 
            alt="To my GitHub" /></a>
          </div>
          <div className="footer-item">
            <a href="mailto:m.lereiver@gmail.com">
              <i id="footer-email"
              className="fa fa-envelope" aria-hidden="true"
              alt="Email me" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}