import styles from './Button.module.css';
import React from 'react';

interface ButtonProps {
  textBtn?: string;
  classSecondary?: string;
  handleClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
}

function Button({ textBtn, classSecondary, handleClick, ariaLabel, disabled }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${classSecondary || ''}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {textBtn}
    </button>
  );
}

export default Button;
