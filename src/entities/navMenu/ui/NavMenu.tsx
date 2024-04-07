import styles from './NavMenu.module.css';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  listClassTwo?: string;
  linkClassTwo?: string;
}

function NavMenu({ listClassTwo, linkClassTwo }: NavMenuProps) {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.list} ${listClassTwo || ''}`}>
        <li>
          <Link className={`${styles.link} ${linkClassTwo || ''}`} to="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <a className={`${styles.link} ${linkClassTwo || ''}`} href="#faq">
            FAQ
          </a>
        </li>
        <li>
          <Link className={`${styles.link} ${linkClassTwo || ''}`} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
