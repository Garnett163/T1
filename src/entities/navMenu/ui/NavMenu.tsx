import styles from './NavMenu.module.css';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  listClassTwo?: string;
  linkClassTwo?: string;
}

function NavMenu({ listClassTwo, linkClassTwo }: NavMenuProps) {
  const handleSmoothScroll = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const targetId = evt.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Element with id ${targetId} not found.`);
      }
    }
  };
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.list} ${listClassTwo || ''}`}>
        <li>
          <a className={`${styles.link} ${linkClassTwo || ''}`} href="#recipes" onClick={handleSmoothScroll}>
            Recipes
          </a>
        </li>
        <li>
          <a className={`${styles.link} ${linkClassTwo || ''}`} href="#faq" onClick={handleSmoothScroll}>
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
