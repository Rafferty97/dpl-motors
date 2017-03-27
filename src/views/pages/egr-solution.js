import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'EGR Solution'
});

export default () => (
  <Page page="performance-tuning" bk={require('./bks/egr.jpeg')}>
    <h1>WHAT IS EGR?</h1>
    <p>
      A widely adopted route to reduce NOx emissions is <strong>Exhaust Gas Recirculation (EGR)</strong>. This involves recirculating a controllable proportion of the {`engine's`} exhaust back into the intake air. A valve is usually used to control the flow of gas, and the valve may be closed completely if required.
    </p>
    <p>
      {`The substitution of burnt gas (which takes no further part in combustion) for oxygen rich air reduces the proportion of the cylinder contents available for combustion. This causes a correspondingly lower heat release and peak cylinder temperature, and reduces the formation of NOx. The presence of an inert gas in the cylinder further limits the peak temperature (more than throttling alone in a spark ignition engine).`}
    </p>
    <p>
      The gas to be recirculated may also be passed through an <strong>EGR cooler</strong>, which is usually of the air/water type. This reduces the temperature of the gas, which reduces the cylinder charge temperature when EGR is employed. This has two benefits- the reduction of charge temperature results in lower peak temperature, and the greater density of cooled EGR gas allows a higher proportion of EGR to be used. On a diesel engine the recirculated fraction may be as high as 50% under some operating conditions.
    </p>
    <h3>EGR Solution</h3>
    <p>
      Here at <strong>DPL Motors</strong>, we have a very <strong>advanced solution for EGR</strong>. The valves can become clogged with carbon deposits, causing them to fail or stick, thereby causing error codes and the vehicle not to run correctly. Our software solution to disable the EGR valve is a simple and effective method of improving the efficiency of your engine.
    </p>
  </Page>
);
