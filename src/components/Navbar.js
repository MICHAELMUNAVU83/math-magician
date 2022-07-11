import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <h2>MATH MAGICIANS</h2>
        <Link to="/">HOME</Link>
        <Link to="/calculator">CALCULATOR</Link>
        <Link to="/quote"> QUOTE</Link>

      </nav>
    </div>
  );
}

export default Navbar;
