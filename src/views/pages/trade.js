import { createElement } from 'cmmn';

import Page from './template';
import pageStyles from './styles.scss';

export const getMeta = () => ({
  title: 'Trade'
});

export default () => (
  <Page page="trade" bk={require('./bks/trade.jpg')} nobook>
    <h1>Trade</h1>
    <p>
      Do you have a fleet of vehicles? Why not let us look after all your service and repair needs. For fleet and business customers we offer substantial discounts, fixed price servicing, final invoices always matching the quote, monthly invoicing, a pick up and drop off service and we can provide a loan car. With our loan cars we will try our best to give you like for like. We normally have small cars, vans and table top utes in stock.
    </p>
    <a href="*/contact-us/" className={pageStyles.bookBtn}>Contact Us</a>
  </Page>
);
