import styles from './Logo.module.css';
import logo from '../../assets/svg/Logo.svg';

function Logo() {
  return <img className={styles.logo} src={logo}></img>;
}

export default Logo;
