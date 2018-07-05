import React from 'react';

import './index.css';

const Header = () => {
  return (
    <header>
      {/* <img src="" alt="logo_brand"/>
      <img src="https://randomuser.me/api/portraits/thumb/men/65.jpg" alt="avatar"/> */}
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://michelada.io/images/v3/logo.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
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