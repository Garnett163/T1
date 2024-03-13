import styles from './Button.module.css';

interface ButtonProps {
  textBtn: string;
  classSecondary?: string;
}

function Button({ textBtn, classSecondary }: ButtonProps) {
  return <button className={`${styles.button} ${classSecondary || ''}`}>{textBtn}</button>;
}

export default Button;
