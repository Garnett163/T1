import Logo from '@shared/ui/logo/Logo';
import NavMenu from '@entities/navMenu/ui/NavMenu';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
}

export default Header;
