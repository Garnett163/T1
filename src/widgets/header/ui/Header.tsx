import Logo from '@shared/ui/logo/Logo';
import NavMenu from '@widgets/NavMenu/ui/NavMenu';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />
    </header>
  );
}

export default Header;
