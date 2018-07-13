import React from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";

export const Item = ({children, isActive}) => {
  const buildClassForItem = classnames('navbar-item', {'is-active': isActive});

  return (
      <span className={buildClassForItem}>
        {children}
      </span>
    )
};

export const Menu = ({ children, putAt, isInfo, isBold }) => {
  const buildClassForMenu = classnames('navbar-menu', {
    'is-info': isInfo,
    'is-bold': isBold,
  });

  return (
    <div className={buildClassForMenu}>
      <div className={`navbar-${putAt}`}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
