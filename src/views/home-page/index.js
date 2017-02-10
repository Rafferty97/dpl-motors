import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import Header from '../header';
import Footer from '../footer';

export const getMeta = () => ({
  title: 'DPL Motors'
});

const MenuItem = ({ icon, children }) => (
  <a className={styles.video.sidebar.item}
    style={"background-position-y: " + (-53.5*icon - 4) + "px"}
    href="#">
    {children}
  </a>
);

export default props => (
  <div>
    <Header />
    <div className={styles.video}>
      {/*<video src={require('./video.mp4')} autoplay loop />*/}
      <div className={styles.video.sidebar}>
        <MenuItem icon={0}>Book a Service</MenuItem>
        <MenuItem icon={1}>Contact Us</MenuItem>
        <MenuItem icon={2}>Join the Mailing List</MenuItem>
        <MenuItem icon={3}>Find a Part</MenuItem>
        <MenuItem icon={4}>Book a Service</MenuItem>
      </div>
    </div>
    <Footer />
  </div>
);
