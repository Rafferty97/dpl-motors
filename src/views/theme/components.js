import { createElement } from 'cmmn';

import styles from './components.scss';

export const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
