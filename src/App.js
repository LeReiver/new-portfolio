import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Main from './components/main/main';
import Projects from './components/projects/projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Route path="/" component={Header} />
          <Route path="/" component={Footer} />
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
