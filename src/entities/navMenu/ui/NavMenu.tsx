import styles from './NavMenu.module.css';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <a className={styles.link} href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <Link className={styles.link} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
