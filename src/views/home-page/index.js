import { createElement } from 'cmmn';

import '../theme';
import styles from './styles.scss';

import Header from '../header';

export const getMeta = () => ({
  title: 'DPL Motors'
});

export default props => (
  <div>
    <Header />
    <div style="background-color: white; height: 400px;" />
  </div>
);
