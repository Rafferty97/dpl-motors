import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import { Container } from '../theme/components';

const MenuItem = ({ title, href, last, active }) => (
  <div className={styles.menuItem.with(active ? 'active' : '', last ? 'last' : '')}>
      <a href={href} className={styles.menuItem.text}>
        {title} <i className="fa fa-chevron-down" />
      </a>
  </div>
);

export default ({ page }) => (
  <header className={styles.header}>
    <Container>
      <a href="*/">
        <img className={styles.logo} src={require('./dpl-motors-logo.svg')} />
      </a>
      <MenuItem title="Services" href="*/services" active={page == 'services'} />
      <MenuItem title="Reconditioning" href="*/reconditioning" active={page == 'reconditioning'} />
      <MenuItem title="Performance Tuning" href="*/performance-tuning" active={page == 'performance-tuning'} />
      <MenuItem title="Parts" href="*/parts" active={page == 'parts'} />
      <MenuItem title="Trade" href="*/trade" active={page == 'trade'} last />
      <a className={styles.mobileNav}><i className="fa fa-bars" /></a>
      <div className={styles.contact}>
        <p>22 Muchison Terrace</p>
        <p>Perth WA 6000</p>
        <p className={styles.dbl}><i className="fa fa-phone" />&nbsp;(08) 9227 5374</p>
      </div>
    </Container>
  </header>
);
