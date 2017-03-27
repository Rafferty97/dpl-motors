import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Truck Tuning'
});

export default () => (
  <Page page="performance-tuning" bk={require('./bks/truck.jpeg')}>
    <h1>Truck Tuning</h1>
    <p>
      Here at DPL we have created the perfect product in HGV, Truck and commercial turbo diesel engine performance upgrades. We pride ourselves in doing so without spoiling any of the principle reasons for running a turbo diesel powered vehicle in the first place and believe that key points such as their fabulous low down tractability, their reliability and of course the all important fuel economy should never, ever be compromised.
    </p>
    <p>
      Our aim when creating our HGV, Truck and commercial turbo diesel engine performance upgrades is to gain the perfect increased power curve and fuel economy improvements yet retain all the safety parameters originally programmed into the engine management by the manufacturer so as to protect your engine and drive train from damage.
    </p>
    <p>
      All our HGV, Trucks and commercial vehicle remaps are programmed to give a strong, linear power delivery right across the rev range.
    </p>
    <p>
      Rest assured that we don’t just look for a torque and power peak to make the numbers look good. We aim for maximum safe improvements everywhere so the vehicle feels like it has a bigger engine.
    </p>
    <h3>How is this acheived?</h3>
    <p>
      Our power gains and improved fuel economy are achieved by very careful matching of parameters such as boost pressure, fuel delivery rates & pump timing along with adjustments to maps that electronically limit torque, throttle response and top speed. All this information in your ECU calibration file is carefully optimised to our exacting standards and then programmed back into your ECU and the vehicle comprehensively tested before we allow you to take the vehicle away.
    </p>
    <p>
      We also offer other services as part of the remap.
    </p>
    <p>
      For example a vehicle used for motorsport may require removal of the EGR, a DPF delete, and also benefit from having the vehicle speed limiter removed.
    </p>
    <h3>Buy with Confidence</h3>
    <p>
      All our turbo diesel OBD tuning comes as standard with a lifetime warranty against defects and corruption of the product and of course our standard 30 day no quibble trial period.
    </p>
  </Page>
);
