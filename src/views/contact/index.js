import { createElement } from 'cmmn';

const GOOGLE_API_KEY = 'AIzaSyCIZ_yfAfZlAhRFSrbdh-gs2n3QPBH1yhw';

import Header from '../header';
import Footer from '../footer';
import { Container } from '../theme/components';
import Sidemenu from '../sidemenu';

import '../theme';
import styles from './styles.scss';
import pageStyles from '../pages/styles.scss';

export const getMeta = () => ({
  title: 'Contact'
});

export default () => (
  <div>
    <Header page="" />
    <div className={pageStyles.content}>
      <Container>
        <div className={pageStyles.content.rightImg.with('map')}>
          <iframe
            style="border: 0; height: 100%; width: 100%;"
            frameborder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=22+Murchison+Terrace,+Perth+WA+6000`}
            allowfullscreen>
          </iframe>
        </div>
        <div className={pageStyles.content.copy}>
          <h1>Contact Us</h1>
          <p><strong>DPL Motors</strong></p>
          <p>22 Muchison Terrace, Perth, WA 6000</p>
          <p><i className={styles.pIcon + ' fa fa-phone'} />(08) 9227 5374</p>
          <p><i className={styles.pIcon + ' fa fa-envelope'} />info@dplmotors.com.au</p>
          <a href="*/book/" className={pageStyles.bookBtn}>Book Service</a>
        </div>
      </Container>
      <Sidemenu top />
    </div>
    <Footer />
  </div>
);
