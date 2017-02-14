import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import { Container } from '../theme/components';

const FooterLink = ({ icon, href, children }) => (
  <a className={styles.footerLinks.item}>
    {children}
    <span className={styles.footerLinks.item.icon} style={"background-position-x: " + (-97*icon + 9) + "px"} />
  </a>
);

export default () => (
  <footer className={styles.footer}>
    <div className={styles.makes}>
      <Container>
        <div className={styles.makes.specialise}>
          {'European Mechanical Specialists'}
        </div>
        <div className={styles.makes.logos}>
          <img src={require('./makes/mercedes-benz.png')} />
          <img src={require('./makes/bmw.png')} />
          <img src={require('./makes/audi.png')} />
          <img src={require('./makes/aston-martin.png')} />
          <img src={require('./makes/maserati.png')} />
          <img src={require('./makes/porche.png')} />
          <img src={require('./makes/jaguar.png')} />
          <img src={require('./makes/land-rover.png')} />
        </div>
      </Container>
    </div>
    <div className={styles.footerLinks}>
      <Container>
        <FooterLink icon={0} href="#">Book a Service</FooterLink>
        <FooterLink icon={1} href="#">Contact Us</FooterLink>
        <FooterLink icon={2} href="#">Find a Part</FooterLink>
        <FooterLink icon={3} href="#">Trade</FooterLink>
      </Container>
    </div>
    <div className={styles.contact}>
      <Container>
        <a href="*/">
          <img className={styles.contact.logo} src={require('../header/dpl-motors-logo.svg')} />
        </a>
        <div className={styles.contact.info}>
          22 Muchison Terrace<br/>
          Perth WA 6000<br/><br/>
          <i className="fa fa-phone" />&nbsp;(08) 9227 5374
        </div>
      </Container>
    </div>
  </footer>
);
