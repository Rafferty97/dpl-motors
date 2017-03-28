import { createElement } from 'cmmn';
import request from 'superagent';

import Page from './template';
import pageStyles from './styles.scss';
import formStyles from './tradeForm.scss';

export const getMeta = () => ({
  title: 'Trade'
});

const postFormURL = '/submit-trade-form.php';

class Form {

  render() {
    return (
      <form className={formStyles.form}>
        <div className={formStyles.form.row}>
          <label>Company name</label>
          <input type="text" name="company-name" />
        </div>
        <div className={formStyles.form.row}>
          <label>ABN</label>
          <input type="text" name="abn" />
        </div>
        <div className={formStyles.form.row}>
          <label>Email address</label>
          <input type="email" name="email" />
        </div>
        <div className={formStyles.form.row}>
          <label>Request</label>
          <textarea name="request"></textarea>
        </div>
        <div className={formStyles.form.row}>
          <label>&nbsp;</label>
          <input type="submit" />
        </div>
        <div className={'js-formStatus ' + formStyles.status}></div>
      </form>
    );
  }

  mount(form) {
    const formStatus = form.querySelector('.js-formStatus');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const payload = {
        companyName: form.querySelector('[name="company-name"]').value.trim(),
        abn: form.querySelector('[name="abn"]').value.trim(),
        email: form.querySelector('[name="email"]').value.trim(),
        request: form.querySelector('[name="request"]').value.trim()
      };
      if (payload.companyName == "" && payload.abn == "") {
        formStatus.className = formStyles.status.with('error');
        formStatus.innerHTML = 'Please enter a company name or an ABN.';
        return;
      }
      if (payload.email == "") {
        formStatus.className = formStyles.status.with('error');
        formStatus.innerHTML = 'Please enter an email address.';
        return;
      }
      if (payload.request == "") {
        formStatus.className = formStyles.status.with('error');
        formStatus.innerHTML = 'Please enter a request.';
        return;
      }
      formStatus.className = formStyles.status.with('loading');
      formStatus.innerHTML = 'Working...';
      request
        .post(postFormURL)
        .type('form')
        .send(payload)
        .end((err, res) => {
          if (err) {
            console.error(err);
            formStatus.className = formStyles.status.with('error');
            formStatus.innerHTML = 'An error occurred. Try again in a minute';
          } else {
            formStatus.className = formStyles.status.with('success');
            formStatus.innerHTML = 'Your form has been sent';
            form.reset();
          }
        });
    });
  }
}

export default () => (
  <Page page="trade" bk={require('./bks/trade.jpg')} nobook>
    <h1>Trade</h1>
    <p>
      Do you have a fleet of vehicles? Why not let us look after all your service and repair needs. For fleet and business customers we offer substantial discounts, fixed price servicing, final invoices always matching the quote, monthly invoicing, a pick up and drop off service and we can provide a loan car. With our loan cars we will try our best to give you like for like. We normally have small cars, vans and table top utes in stock.
    </p>
    <Form />
  </Page>
);
