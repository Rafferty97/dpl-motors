import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Services'
});

export default () => (
  <Page page="services" bk={require('./bks/tire.jpg')}>
    <h1>Brakes</h1>
    <p>
      We don’t need to explain the absolute necessity of a sound braking system;
      it is without doubt an element of your car that cannot be taken for granted. Regular brake checks are very important. At DPL we recommend you have your brakes checked twice a year. Undergoing these checks means that we can find any problems before they become a safety issue and stop you from using your car.
    </p>
    <p>
      Some signs that your brakes are not working to their full potential are:
    </p>
    <ul>
      <li>Handbrake not holding</li>
      <li>Handbrake light not turning off after you release it</li>
      <li>Metallic grinding noise</li>
      <li>Longer stopping time</li>
      <li>Vehicle pulling to one side while brakes applied</li>
      <li>Low brake fluid level</li>
    </ul>
    <p>
      Contact us now for a brake check.
    </p>
  </Page>
);
