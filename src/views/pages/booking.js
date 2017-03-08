import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import Header from '../header';
import Footer from '../footer';
import { Container } from '../theme/components';
import Sidemenu from '../sidemenu';
import bookingStyles from './booking.scss';

export const getMeta = () => ({
  title: 'Make a Booking'
});

export default () => (
  <div>
    <Header page="" />
    <div className={styles.content}>
      <Container>
        <h1>Make a Booking</h1>
        <iframe
          className={bookingStyles.iframe}
          src="https://mechanicdesk.com.au/booking_requests/new?token=9dc0aa4f7552830f90a3818e4a4e94a1a1528d5a"
          frameBorder="0" />
      </Container>
      <Sidemenu top />
    </div>
    <Footer />
  </div>
);
