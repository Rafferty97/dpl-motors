import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'ECU Tuning'
});

export default () => (
  <Page page="performance-tuning">
    <h1>ECU Tuning</h1>
    <h3>What is ECU Remapping/Programming?</h3>
    <p>
      When a manufacturer develops a new car they have to take into consideration all of the conditions it may be subjected to in all of the regions in which they intend to sell this model. This means instead of just optimising the <strong>{`ECU's program or 'map'`}</strong> to deliver the best performance or the most fuel efficiency they have to make compromises to the map to take into account these potential differing operating conditions. These could include sub-standard fuels, extremes in temperature and altitude, differing emission laws and even the possibility that vehicle may not be serviced on a regular basis and in accordance with the manufacturers recommended instructions.
    </p>
    <p>
      <strong>ECU remapping</strong> is taking a read from the ECU’s processing chip of the vehicles standard compromised map and adjusting various parameters within the map such as fuel pressure, boost pressure (on turbocharged applications) ignition advance and throttle pedal control amongst others to release the true performance from the engine. It is a completely safe process as it is just giving the engine the performance it should have had in the first place before all the compromises were applied to the original programming. Every engine will have its own unique map and by adjusting this we can fine tune the characteristics of the engine; unleashing more power and in many cases reduce fuel consumption too.
    </p>
    <h3>Benefits of ECU Remapping/Programming</h3>
    <p>
      <strong>ECU programming</strong> will not only improve the engines power and torque figures it will also sharpen the throttle response and widen the power-band. This will make the power delivery a lot more linear, which in turn will make the vehicle feel a lot livelier to drive and the engine more flexible. Frequently, the vehicles power output is restricted by the manufacturer for no other reason than to ensure that the vehicle fits into a class to suit fleet buyers. As a driving enthusiast, you do not need or want such restrictions placed upon your vehicles ECU and its performance therefore you can benefit from the hidden power and torque locked away within your engine management system.
    </p>
    <p>
      The other main benefit of <strong>remapping</strong> will be a reduction in fuel consumption. With the extra torque especially at the bottom of the rev range you will see a fuel saving as it will require less throttle input to maintain motorway speeds, you can drive in a higher gear at a slower speed as well as helping significantly when fully laden, towing or on gradients and even in start stop traffic.
    </p>
  </Page>
);
