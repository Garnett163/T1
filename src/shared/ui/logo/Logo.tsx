import styles from './Logo.module.css';
import headerLogo from '../../assets/svg/Logo.svg';

function Logo() {
  return <img className={styles.logo} src={headerLogo}></img>;
}

export default Logo;
