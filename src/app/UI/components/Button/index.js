import React from 'react';
import classNames from "classnames";

const Button = ({ children, isPrimary, isLoading, isBold, isDisabled, isSubmit, onClick}) => {
  const buildClassForButton = classNames('button', {
    'is-loading': isLoading,
    'is-bold': isBold,
    'is-primary': isPrimary,
  });
  const buildType = classNames({'submit': isSubmit});

  return (
    <button className={buildClassForButton} type={buildType} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
