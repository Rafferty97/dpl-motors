import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import Header from '../header';
import Footer from '../footer';
import Sidemenu from '../sidemenu';

export const getMeta = () => ({
  title: 'DPL Motors'
});

export default props => (
  <div>
    <Header />
    <div className={styles.video}>
      {/*<video src={require('./video.mp4')} autoplay loop />*/}
      <Sidemenu />
    </div>
    <Footer />
  </div>
);
