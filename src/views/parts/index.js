import { createElement } from 'cmmn';

import Page from '../pages/template';

import styles from './styles.scss';

export const getMeta = () => ({
  title: 'Parts'
});

const years = [];
for (let i=2017; i >= 1950; i--) years.push(i);

export default () => (
  <Page page="parts" grey>
    <h1>Find a Part</h1>
    <form className={styles.form}>
      <select name="year" className={styles.half}>
        <option>Year</option>
        { years.map(year => <option>{ year + '' }</option>) }
      </select>
      <br/>
      <select name="make" className={styles.half}>
        <option>Make</option>
      </select>
      <select name="model" className={styles.half}>
        <option>Model</option>
      </select>
      <select name="category">
        <option>Category</option>
        <option>Other...</option>
      </select>
      <input type="text" name="category-other" placeholder="Category" />
      <textarea name="message">
      </textarea>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </Page>
);
