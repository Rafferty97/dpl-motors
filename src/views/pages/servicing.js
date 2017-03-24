import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Servicing'
});

export default () => (
  <Page page="services" bk={require('./bks/services.jpg')}>
    <h1>Scheduled Servicing</h1>
    <p>
      {`At DPL motors we customise our service to suit your budget and car type. We specialise not only in European vehicles but any make or model,  whether it's a small car, family car, sports car, SUV, 4WD, ute or van.`}
    </p>
    <p>
      {`Our logbook services are carried out according to manufacturer’s specifications and we replace all scheduled parts. We also carry out a full safety check and every service comes with a 6month/10,000km warranty. Our European trained mechanics only use the best quality parts on your vehicle, we use parts that are manufactured to match or exceed the Original Equipment Manufacturer (OEM).`}
    </p>
    <p>
      Our Minor Service is the minimum you should do to your vehicle. This service helps maintain your vehicle and prevents unforeseen faults. In this service we will replace your Engine Oil and Oil Filter and we check and report on the following; Brakes Front and Rear, Tyre Condition and Thread Depth, all lights, Suspension and Shocks, Instruments, Engine and Gearbox leaks, Exhaust system, CV Joints, Wipers, Check all levels and refill, Check any warning lights and reset the service computer using the very latest diagnostic equipment. Prices for this service start from as little as $179.
    </p>
  </Page>
);
