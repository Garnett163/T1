import styles from './Footer.module.css';
import Logo from '@shared/ui/logo/Logo';
import NavMenu from '@entities/navMenu/ui/NavMenu';
import instagramIcon from '@shared/assets/svg/instagramIcon.svg';
import linkedinIcon from '@shared/assets/svg/linkedInIcon.svg';
import facebookIcon from '@shared/assets/svg/facebookIcon.svg';
import twitterIcon from '@shared/assets/svg/twitterIcon.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerSection}>
        <div className={styles.containerNav}>
          <Logo classSecondary={styles.logo} />
          <NavMenu linkClassTwo={styles.link} listClassTwo={styles.navList} />
        </div>
        <div className={styles.containerSocials}>
          <p className={styles.copyright}>© 2023 EATLY All Rights Reserved.</p>
          <nav>
            <ul className={styles.listIcons}>
              <img src={instagramIcon} alt="Instagram Icon"></img>
              <img src={linkedinIcon} alt="linkedin Icon"></img>
              <img src={facebookIcon} alt="Facebook Icon"></img>
              <img src={twitterIcon} alt="Twitter Icon"></img>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
