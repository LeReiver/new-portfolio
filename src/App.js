import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Main from './components/main/main';
import Projects from './components/projects/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        {/* <About /> */}
        {/* <Projects /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
