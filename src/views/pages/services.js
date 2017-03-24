import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Services'
});

export default () => (
  <Page page="services" bk={require('./bks/services.jpg')}>
    <h1>Services</h1>
    <p>
      DPL Motors are an independent mechanical workshop placed in East Perth.
    </p>
    <p>
      After gaining many years of experience in the motor trade we decided to
      set up on our own in 2011. We mainly specialise in German vehicles,
      such as Mercedes, BMW, Audi, VW, SEAT or Skoda, however don’t hesitate
      if you own different brand of car as we have the capability to work on
      any brand. The latest diagnostic software and equipment allows us to
      work on any vehicle, from a Holden to a Range Rover. This diagnostic
      equipment is up to main dealer standard so we can carry out all
      diagnostic work at a fraction of the price compared to a franchised dealer.
    </p>
    <p>
      We have the technical knowledge and experience to look after you and your
      vehicle in our clean and modern workshop. We offer courtesy cars and
      commercial vehicles to keep you on the road while we take care of your
      vehicle. We can also arrange to collect and deliver your vehicle if you
      are local.
    </p>
    <h3>Volkswagen TDi with loss of power?</h3>
    <p>
      {`We have many cases of lack of power from VW and Audi TDi engines and know\
      how to fix this. We have had new customers come to us after spending\
      thousands of dollars at other garage's without the problem being fixed,
      and we have been able to sort this out within a few hours. If you are
      experiencing a loss of power please give us a call and we will see
      what we can do.`}
    </p>
    <h3>Porsche Cayenne or VW Touareg with tail-shaft vibration?</h3>
    <p>
      There is a known problem with the bearings on these prop shafts and the
      main dealer will quote you for a new replacement part. Although this is
      one option, another is to have the bearing fixed at a fraction of the
      price. DPL Motors can help you with either option, and it will be
      signification cheaper than the main dealer prices.
    </p>
    <h3>{`BMW's with suspension issues? Mercedes with gearbox problems?`}</h3>
    <p>
      We encounter these and many more issues weekly and with our experience
      and knowledge we will have your vehicle back to you in no time.
    </p>
  </Page>
);
