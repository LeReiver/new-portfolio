import React from 'react';
import { Link } from 'react-router-dom'
import NavComponent from '../navbar/navbar';
import './header.css';

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/"><h1 className="header-title">Michael Le-Reiver</h1></Link>
        <NavComponent />
      </header>
    </div>
  );
}

export default Header;