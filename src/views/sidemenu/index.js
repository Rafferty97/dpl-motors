import { createElement } from 'cmmn';

import styles from './styles.scss';

const MenuItem = ({ icon, children }) => (
  <a className={styles.sidebar.item} href="#">
    {children}
    <span className={styles.sidebar.item.icon} style={"background-position-y: " + (-53.5*icon - 4) + "px"} />
  </a>
);

export default class Sidemenu {
  render({ top }) {
    this.top = top;
    return (
      <div className={styles.sidebar.with(this.top ? 'top' : '')}>
        <MenuItem icon={0}>Book a Service</MenuItem>
        <MenuItem icon={1}>Contact Us</MenuItem>
        <MenuItem icon={2}>Join the Mailing List</MenuItem>
        <MenuItem icon={3}>Find a Part</MenuItem>
        <div className={styles.sidebar.item.with('no-hover')} href="#">
          <a className={styles.sidebar.item.socialLink.with('fb')} href="/" target="_blank"><i className="fa fa-facebook" /></a>
          <a className={styles.sidebar.item.socialLink.with('twitter')} href="/" target="_blank"><i className="fa fa-twitter" /></a>
          <span className={styles.sidebar.item.icon} style={"background-position-y: " + (-53.5*4 - 4) + "px"} />
        </div>
      </div>
    );
  }
  mount(node) {
    node.addEventListener('mouseover', () => {
      node.className = styles.sidebar.with(this.top ? 'top' : '', 'visible');
    });
    node.addEventListener('mouseout', () => {
      node.className = styles.sidebar.with(this.top ? 'top' : '');
    });
  }
};
