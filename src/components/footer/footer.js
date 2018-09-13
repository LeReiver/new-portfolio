import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social-links">
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/michael-le-reiver/" target="_blank" rel="noopener noreferrer" aria-label="To My LinkedIn"><i id="footer-linkedIn" className="fa fa-linkedin-square" aria-hidden title="To My LinkedIn"
            alt="To my LinkedIn" role="img"/></a>
          </div>
          <div className="footer-item">
            <a href="https://github.com/LeReiver" target="_blank" rel="noopener noreferrer" aria-label="To My GitHub"><i id="footer-github" 
            className="fa fa-github-square" aria-hidden title="To My GitHub"
            alt="To my GitHub" role="img" /></a>
          </div>
          <div className="footer-item">
            <a href="mailto:m.lereiver@gmail.com" aria-label="To My LinkedIn">
              <i id="footer-email"
              className="fa fa-envelope" aria-hidden title="To My Email"
              alt="Email me" role="img"/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}