import styles from './Logo.module.css';
import logo from '../../assets/svg/Logo.svg';
import { Link } from 'react-router-dom';

interface LogoProps {
  classSecondary?: string;
}

function Logo({ classSecondary }: LogoProps) {
  return (
    <Link to="/">
      <img className={`${styles.logo} ${classSecondary || ''}`} src={logo} />
    </Link>
  );
}

export default Logo;
