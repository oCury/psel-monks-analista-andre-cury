import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        {/* Logo ou texto .monks */}
        <h1>.monks</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
