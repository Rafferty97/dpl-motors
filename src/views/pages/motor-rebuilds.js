import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Motor Rebuilds'
});

export default () => (
  <Page page="reconditioning">
    <h1>Motor Rebuilds</h1>
    <h3>The Reconditioning process</h3>
    <p>
      We receive your vehicle and accept your instruction at our workshop. Your engine and all associated parts are removed and inspected. The cylinder head is removed from the engine block. Both cylinder head and block are dismantled into their component parts. All worn or broken parts are replaced as part of our quality control system. The parts for reassembly pass through our specialist cleaning process. At this point all items that require machining are engineered to our exacting specifications. Machined parts are cleaned and measured prior to reassembly.
    </p>
    <p>
      Your original engine is then rebuilt using new bearings, seals, piston rings and gaskets. Once fully assembled the engine is replaced into your vehicle with new fluids and filters. The engine is then started and tuned for optimum reliability utilising the latest diagnostic systems
    </p>
    <p>
      {`Our workmanship and materials are both guaranteed for 12 months from the date of purchase, or 15,000km whichever comes 1st. In the event of a failure we will replace either the engine or parts free of charge and at our discretion.`}
    </p>
  </Page>
);
