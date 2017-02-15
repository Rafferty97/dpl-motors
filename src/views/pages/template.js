import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import Header from '../header';
import Footer from '../footer';
import { Container } from '../theme/components';
import Sidemenu from '../sidemenu';

export default ({ children, page }) => (
  <div>
    <Header page={page} />
    <div className={styles.content}>
      <Container>
        {children}
      </Container>
      <Sidemenu top />
    </div>
    <Footer />
  </div>
);
