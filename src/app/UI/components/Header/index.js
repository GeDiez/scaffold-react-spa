import React from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Item } from "../Menu";

const Header = ({ children, isPrimary, hrefBrand }) => {
  const buildClassForNav = classNames('navbar', {
    'is-primary': isPrimary,
  });

  return (
    <nav className={buildClassForNav} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Item>
          <Link to={hrefBrand}>
            <img src="https://michelada.io/images/v3/logo.svg" alt="brand" width="112" height="28" />
          </Link>
        </Item>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      {children}
    </nav>
  );
};

export default Header;