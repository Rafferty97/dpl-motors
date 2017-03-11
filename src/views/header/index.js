import { createElement } from 'cmmn';

import styles from './styles.scss';

import { Container } from '../theme/components';
import SubMenu from './submenu';

const MenuItem = ({ title, href, last, active, children }) => (
  <div className={styles.menuItem.with(active ? 'active' : '', last ? 'last' : '')}>
      <a href={href} className={styles.menuItem.text}>
        {title}
      </a>
      {children}
  </div>
);

const menu = [
  {
    title: 'Services', href: 'services', active: 'services',
    items: [
      { title: 'Air Conditioning', href: 'services/air-conditioning' },
      { title: 'Scheduled Servicing', href: 'services/scheduled-servicing' },
      { title: 'Repairs', href: 'services/repairs' }
    ]
  },
  {
    title: 'Reconditioning', href: 'reconditioning', active: 'reconditioning',
    items: [
      { title: 'Motor Rebuilds', href: 'reconditioning/motor-rebuilds' },
      { title: 'Replacement Motors', href: 'reconditioning/replacement-motors' },
      { title: 'Cylinder Head Repair', href: 'reconditioning/cylinder-head-repair' }
    ]
  },
  {
    title: 'Performance Tuning', href: 'performance-tuning', active: 'performance-tuning',
    items: [
      { title: 'ECU Tuning', href: 'performance-tuning/ecu-tuning' },
      { title: 'DPF Solution', href: 'performance-tuning/dpf-solution' },
      { title: 'EGR Solution', href: 'performance-tuning/egr-solution' },
      { title: 'Truck Tuning', href: 'performance-tuning/truck-tuning' }
    ]
  },
  {
    title: 'Parts', href: 'parts', active: 'parts'
  },
  {
    title: 'Trade', href: 'trade', active: 'trade'
  }
];

export default ({ page }) => (
  <header className={styles.header}>
    <Container>
      <a href="*/">
        <img className={styles.logo} src={require('./dpl-motors-logo.svg')} />
      </a>
      { menu.map(({ title, href, active, items }, i) => (
        <MenuItem title={title} href={'*/' + href} active={page == active} last={i == menu.length - 1}>
          { items != null ? (
            <SubMenu>
              { items.map(item => <link href={'*/' + item.href}>{item.title}</link>) }
            </SubMenu>
          ) : null }
        </MenuItem>
      ))}
      <a className={styles.mobileNav}><i className="fa fa-bars" /></a>
      <div className={styles.contact}>
        <p>22 Muchison Terrace</p>
        <p>Perth WA 6000</p>
        <p className={styles.dbl}><i className="fa fa-phone" />&nbsp;(08) 9227 5374</p>
      </div>
    </Container>
    <ul className={styles.mobileMenu}>
      { menu.map(({ title, href, active, items }) => (
        <div>
          <li><a href={'*/' + href}>{ title }</a></li>
          { items != null ? items.map(item => (
            <li><a href={'*/' + item.href}>{item.title}</a></li>
          )) : null }
        </div>
      ))}
    </ul>
  </header>
);
