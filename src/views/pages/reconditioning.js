import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Reconditioning'
});

export default () => (
  <Page page="reconditioning">
    <h1>Reconditioning</h1>
    <p>
      Engine Rebuild, Repair, Replacement and Rebore services from DPL MOTORS.
    </p>
    <p>
      {`So your engine's Head gasket has blown, The car is producing a horrible knocking noise from the bottom end?`}
    </p>
    <p>
      The engine has seized? The chain has stretched or belt has snapped? So what to do?
    </p>
    <p>
      Why not take a look at our engine rebuild service (petrol and diesel) for the private motorist or the transport industry.
    </p>
    <p>
      Here at DPL MOTORS we specialise is European vehicles!
    </p>
    <p>
      Importing and stocking a large quantity of our parts for cost effective services!
    </p>
    <h3>The Reconditioning Process</h3>
    <p>
      We receive your vehicle and accept your instruction at our state of the art workshop.
      Your engine and all associated parts are removed and inspected. The cylinder head is removed from the engine block.
      Both cylinder head and block are dismantled into their component parts. All worn or broken parts are replaced as part of our quality control system.
    </p>
    <p>
      The parts for reassembly pass through our specialist cleaning process. At this point all items that require machining are engineered to our exacting specifications. Machined parts are cleaned and measured prior to reassembly.
    </p>
    <p>
      Your original engine is then rebuilt using new bearings, seals, piston rings and gaskets. Once fully assembled the engine is replaced into your vehicle with new fluids and filters. The engine is then started and tuned for optimum reliability utilising the latest diagnostic systems
    </p>
    <h3>The Guarantee</h3>
    <p>
      Our workmanship and materials are both guaranteed for either the first 12 months from the date of purchase, or 12,000 kms if sooner. In the event of a failure we will replace either the engine or parts free of charge and at our discretion.
    </p>
    <p><strong>Contact us today for a friendly quote.</strong></p>
  </Page>
);
