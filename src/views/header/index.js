import { createElement } from 'cmmn';

import styles from './styles.scss';

import { Container } from '../theme/components';
import SubMenu from './submenu';

const MenuItem = ({ title, href, last, active, children }) => (
  <div className={styles.menuItem.with(active ? 'active' : '', last ? 'last' : '')}>
      <a href={href} className={styles.menuItem.text}>
        {title} <i className="fa fa-chevron-down" />
      </a>
      {children}
  </div>
);

export default ({ page }) => (
  <header className={styles.header}>
    <Container>
      <a href="*/">
        <img className={styles.logo} src={require('./dpl-motors-logo.svg')} />
      </a>
      <MenuItem title="Services" href="*/services" active={page == 'services'}>
        <SubMenu>
          <link href="*/services/air-conditioning">Air Conditioning</link>
          <link href="#">Scheduled Servicing</link>
        </SubMenu>
      </MenuItem>
      <MenuItem title="Reconditioning" href="*/reconditioning" active={page == 'reconditioning'}>
        <SubMenu>
          <link href="#">Motor Rebuilds</link>
          <link href="#">Reconditioning</link>
          <link href="#">Replacement Motors</link>
          <link href="#">Cylinder Head Repairs</link>
        </SubMenu>
      </MenuItem>
      <MenuItem title="Performance Tuning" href="*/performance-tuning" active={page == 'performance-tuning'}>
        <SubMenu>
          <link href="#">CPU Tuning</link>
          <link href="#">PTS & EGR Solutions</link>
        </SubMenu>
      </MenuItem>
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
