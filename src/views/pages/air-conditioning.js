import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Services'
});

export default () => (
  <Page page="services" bk={require('./bks/aircon.jpg')}>
    <h1>Air Conditioning</h1>
    <h3>
      A/C System Ragas And Repairs at DPL MOTORS
    </h3>
    <p>
      The Air Con system in your car is a serviceable item, just as you have to change your oil and air filters from time to time. It is very important to maintain your Air Conditioning system for the following reasons:
    </p>
    <p>
      Due to natural leakage through naturally slightly porous pipes, most A/C systems will lose around 15-20% refrigerant every 12 months resulting in a less powerful and less efficient system. Bacteria and Fungi and can grow in car A/C systems and can cause allergic reactions such as hay-fever, skin irritations, runny noses and itchy eyes.
    </p>
    <p>
      {`Your A/C system will put a strain on the compressor which can result in the compressor wearing out quickly If not serviced regularly. This can be costly, as it increases fuel consumption and draws more engine power to run the system. It is recommend that a vehicle's air con system is serviced every year to ensure it operates at maximum efficiency. However, there are some indicators that will help you determine if you have a problem with your Air Conditioning system:`}
    </p>
    <p>
      The interior takes longer to cool down?
      There’s a noticeable increase in fuel consumption?
      The windscreen doesn’t clear quickly?
    </p>
    <p>The Air-Con System Service Includes:</p>
    <ul>
      <li>Testing for leaks</li>
      <li>Emptying and recharging the gas in the system.</li>
      <li>Cleaning and Deodorising the entire Air Conditioning</li>
    </ul>
    <p>
      If you notice an odd, particularly musty smell in your car, it is more than likely that the entire air con system needs proper cleaning with a de-fungicide.
    </p>
  </Page>
);
