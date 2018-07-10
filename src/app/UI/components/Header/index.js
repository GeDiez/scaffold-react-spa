import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://michelada.io">
            <img src="https://michelada.io/images/v3/logo.svg" alt="brand" width="112" height="28" />
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;