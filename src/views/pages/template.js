import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import Header from '../header';
import Footer from '../footer';
import { Container } from '../theme/components';
import Sidemenu from '../sidemenu';

export default ({ children, page, grey }) => (
  <div>
    <Header page={page} />
    <div className={styles.content.with(grey ? 'grey' : '')}>
      <Container>
        <div className={styles.content.rightImg} style={`background-image: url(${require('./bk-img.jpg')});`} />
        <div className={styles.content.copy}>
          {children}
        </div>
      </Container>
      <Sidemenu top />
    </div>
    <Footer />
  </div>
);
