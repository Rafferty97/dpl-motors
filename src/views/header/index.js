import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import { Container } from '../theme/components';

const MenuItem = ({ title, href, end, active }) => (
  <div className={styles.menuItem.with(end ? 'end' : '', active ? 'active' : '')}>
    <div className={styles.menuItem.bk} />
    { end || (
      <a href={href} className={styles.menuItem.text}>
        {title} <i className="fa fa-chevron-down" />
      </a>
    )}
  </div>
);

export default () => (
  <header className={styles.header}>
    <Container>
      <a href="*/">
        <img className={styles.logo} src={require('./dpl-motors-logo.svg')} />
      </a>
      <MenuItem title="Services" href="*/services" active />
      <MenuItem title="Reconditioning" href="*/recondtioning" />
      <MenuItem title="Remapping" href="*/remapping" />
      <MenuItem title="Air Conditioning" href="*/air-conditioning" />
      <MenuItem end />
      <div className={styles.contact}>
        22 Muchison Terrace<br/>
        Perth WA 6000<br/><br/>
        <i className="fa fa-phone" />&nbsp;(08) 9227 5374
      </div>
    </Container>
  </header>
);
