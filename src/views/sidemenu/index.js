import { createElement } from 'cmmn';

import styles from './styles.scss';

const MenuItem = ({ icon, children }) => (
  <a className={styles.sidebar.item} href="#">
    {children}
    <span className={styles.sidebar.item.icon} style={"background-position-y: " + (-53.5*icon - 4) + "px"} />
  </a>
);

export default class Sidemenu {
  render() {
    return (
      <div className={styles.sidebar}>
        <MenuItem icon={0}>Book a Service</MenuItem>
        <MenuItem icon={1}>Contact Us</MenuItem>
        <MenuItem icon={2}>Join the Mailing List</MenuItem>
        <MenuItem icon={3}>Find a Part</MenuItem>
        <MenuItem icon={4}>Book a Service</MenuItem>
      </div>
    );
  }
  mount(node) {
    console.log(node);
    node.addEventListener('mouseover', () => {
      node.className = styles.sidebar.with('visible');
    });
    node.addEventListener('mouseout', () => {
      node.className = styles.sidebar.with();
    });
  }
};
