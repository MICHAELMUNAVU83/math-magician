import React from 'react';
import '../Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <h2>MATH MAGICIANS</h2>
        <a href="/">HOME</a>
        <a href="/calculator">CALCULATOR</a>
        <a href="/quote">QUOTE</a>
      </nav>
    </div>
  );
}

export default Navbar;
