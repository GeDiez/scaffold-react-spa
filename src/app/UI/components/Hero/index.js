import React from 'react';
import classNames from "classnames";

export const HeroBody = ({ children }) => {
  return (
    <div className="hero-body">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export const HeroHead = ({ children }) => {
  return (
    <div className="hero-head">
      {children}
    </div>
  );
};

export const Hero = ({ isPrimary, isLight, size, isBold, children }) => {
  const buildClassForHero = classNames('hero', {
    'is-light': isLight,
    'is-primary': isPrimary,
    'is-fullheight': size === 'lg',
    'is-medium': size === 'md',
    'is-bold': isBold,
  });

  return (
    <section className={buildClassForHero}>
      {children}
    </section>
  );
};
