import styles from './Button.module.css';

interface ButtonProps {
  textBtn?: string;
  classSecondary?: string;
  handleClick?: () => void;
  ariaLabel?: string;
}

function Button({ textBtn, classSecondary, handleClick, ariaLabel }: ButtonProps) {
  return (
    <button className={`${styles.button} ${classSecondary || ''}`} onClick={handleClick} aria-label={ariaLabel}>
      {textBtn}
    </button>
  );
}

export default Button;
