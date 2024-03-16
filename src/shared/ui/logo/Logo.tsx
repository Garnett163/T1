import styles from './Logo.module.css';
import logo from '../../assets/svg/Logo.svg';

interface LogoProps {
  classSecondary?: string;
}

function Logo({ classSecondary }: LogoProps) {
  return <img className={`${styles.logo} ${classSecondary || ''}`} src={logo}></img>;
}

export default Logo;
