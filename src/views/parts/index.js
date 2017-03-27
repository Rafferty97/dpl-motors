import { createElement } from 'cmmn';
import request from 'superagent';
//import superagentJSONP from 'superagent-jsonp';

import Page from '../pages/template';

import styles from './styles.scss';

export const getMeta = () => ({
  title: 'Parts'
});

const years = [];
for (let i=2017; i >= 1950; i--) years.push(i);

const postFormURL = '/submit-parts-form';

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
          <option value="engine">Engine</option>
          <option value="cooling-system">Cooling System</option>
          <option value="electrical">Electrical</option>
          <option value="transmission">Transmission</option>
          <option value="brakes">Brakes</option>
          <option value="tyres">Tyres</option>
          <option value="other">Other...</option>
        </select>
        <input style="display: none;" type="text" name="category-other" placeholder="Category" />
        <textarea name="message">
        </textarea>
        <input type="submit" name="submit" value="Submit" />
        <div className={"js-formStatus " + styles.status}></div>
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

    const formStatus = form.querySelector('.js-formStatus');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const payload = {
        year: form.querySelector('[name="year"]').value.trim(),
        make: form.querySelector('[name="make"]').value.trim(),
        model: form.querySelector('[name="model"]').value.trim(),
        category: form.querySelector('[name="category"]').value.trim(),
        categoryOther: form.querySelector('[name="category-other"]').value.trim(),
        message: form.querySelector('[name="message"]').value.trim()
      };
      console.log(payload);
      if (isNaN(payload.year) || (payload.year == "")) {
        formStatus.className = styles.status.with('error');
        formStatus.innerHTML = 'Please select a year.';
        return;
      }
      if (payload.make == "") {
        formStatus.className = styles.status.with('error');
        formStatus.innerHTML = 'Please select a make.';
        return;
      }
      if (payload.model == "") {
        formStatus.className = styles.status.with('error');
        formStatus.innerHTML = 'Please select a model.';
        return;
      }
      if (payload.category == "-1" || (payload.category == "other" && (payload.categoryOther == ""))) {
        formStatus.className = styles.status.with('error');
        formStatus.innerHTML = 'Please choose a category.';
        return;
      }
      if (payload.message == "") {
        formStatus.className = styles.status.with('error');
        formStatus.innerHTML = 'Please enter a message.';
        return;
      }
      formStatus.className = styles.status.with('loading');
      formStatus.innerHTML = 'Working...';
      request
        .post(postFormURL)
        .send(payload)
        .end((err, res) => {
          if (err) {
            console.error(err);
            formStatus.className = styles.status.with('error');
            formStatus.innerHTML = 'An error occurred. Try again in a minute';
          } else {
            formStatus.className = styles.status.with('success');
            formStatus.innerHTML = 'Your form has been sent';
            form.reset();
          }
        });
    });
  }
}

export default () => (
  <Page page="parts" grey bk={require('../pages/bks/trade.jpg')} nobook>
    <h1>Find a Part</h1>
    <Form />
  </Page>
);
