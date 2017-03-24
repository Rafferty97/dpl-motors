import { createElement } from 'cmmn';
//import request from 'superagent';
//import superagentJSONP from 'superagent-jsonp';

import Page from '../pages/template';

import styles from './styles.scss';

export const getMeta = () => ({
  title: 'Parts'
});

const years = [];
for (let i=2017; i >= 1950; i--) years.push(i);

class Form {
  render() {
    return (
      <form className={styles.form}>
        <select name="year" className={styles.half}>
          <option>Year</option>
          { years.map(year => <option>{ year + '' }</option>) }
        </select>
        <br/>
        {/*<select name="make" className={styles.half}>
          <option>Make</option>
          <option>Please select a year</option>
        </select>
        <select name="model" className={styles.half}>
          <option>Model</option>
          <option>Please select a year</option>
        </select>*/}
        <input type="text" name="make" placeholder="Make" className={styles.half} />
        <input type="text" name="model" placeholder="Model" className={styles.half} />
        <select name="category">
          <option value="-1">Category</option>
          <option value="other">Other...</option>
        </select>
        <input style="display: none;" type="text" name="category-other" placeholder="Category" />
        <textarea name="message">
        </textarea>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }

  mount(form) {
    /* const yearSel = form.querySelector('[name="year"]');
    const makeSel = form.querySelector('[name="make"]');
    const modelSel = form.querySelector('[name="model"]');
    let year = -1, make = -1, model = -1;

    yearSel.addEventListener('change', event => {
      if (year == yearSel.value) return;
      year = yearSel.value;
      if (year == 'Year') {
        year = -1;
        makeSel.innerHTML = '<option value="-1">Make</option><option value="-1">Please select a year</option>';
        modelSel.innerHTML = '<option value="-1">Model</option><option value="-1">Please select a year</option>';
        return;
      }
      makeSel.innerHTML = '<option value="-1">Loading...</option>';
      modelSel.innerHTML = '<option value="-1">Model</option><option value="-1">Please select a make</option>';
      make = -1;
      model = -1;
      request
        .get('http://www.carqueryapi.com/api/0.3/')
        .query({ cmd: 'getMakes', year })
        .use(superagentJSONP)
        .end((err, res) => {
          if (err) {
            console.error(err);
            return;
          }
          makeSel.innerHTML = '<option value="-1">Make</option>' + res.body.Makes.map(make => {
            return `<option value="${make.make_id}">${make.make_display}</option>`;
          }).join('');
        });
    });

    makeSel.addEventListener('change', event => {
      if (year == -1) return;
      if (make == makeSel.value) return;
      make = makeSel.value;
      if (make == '-1') {
        year = -1;
        modelSel.innerHTML = '<option value="-1">Model</option><option value="-1">Please select a make</option>';
        return;
      }
      modelSel.innerHTML = '<option value="-1">Loading...</option>';
      model = -1;
      request
        .get('http://www.carqueryapi.com/api/0.3/')
        .query({ cmd: 'getModels', year, make })
        .use(superagentJSONP)
        .end((err, res) => {
          if (err) {
            console.error(err);
            return;
          }
          modelSel.innerHTML = '<option>Model</option>' + res.body.Models.map(model => {
            return `<option>${model.model_name}</option>`;
          }).join('');
        });
    }); */

    const categoryInput = form.querySelector('[name="category-other"]');
    const categorySel = form.querySelector('[name="category"]');
    categorySel.addEventListener('change', event => {
      categoryInput.style = categorySel.value == 'other' ? '' : 'display: none;';
    });
  }
}

export default () => (
  <Page page="parts" grey bk={require('../pages/bks/trade.jpg')}>
    <h1>Find a Part</h1>
    <Form />
  </Page>
);
