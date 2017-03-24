import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Head Gasket Repair'
});

export default () => (
  <Page page="reconditioning" bk={require('./bks/reconditioning.jpg')}>
    <h1>Head Gasket Repair</h1>
    <p>
      The head gasket acts as a seal between the 2 main parts of your engine (the cylinder block and the cylinder head), so it’s vital to keeping your engine running correctly and safely. If your head gasket has blown, you need a repair or replacement carried out professionally. As soon as you notice any of the major signs of a blown head gasket contact us straight away and we’ll arrange to test it for you.
    </p>
    <p>
      Common signs of a blown head gasket are:
    </p>
    <ul>
      <li>Engine overheating.</li>
      <li>White smoke coming from the exhaust.</li>
      <li>Your engine oil is a milky colour.</li>
      <li>Losing coolant at a high rate.</li>
      <li>Bubbles in the coolant overflow tank.</li>
    </ul>
  </Page>
);
