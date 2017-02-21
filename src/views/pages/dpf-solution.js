import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'DPF Solution'
});

export default () => (
  <Page page="performance-tuning">
    <h1>DPF Solution</h1>
    <h3>What is a DPF?</h3>
    <p>
      A <strong>DPF (Diesel Particulate Filter)</strong> also known as <strong>FAP</strong> on some French vehicles, is a device fitted to the exhaust system of modern diesel vehicles to reduce emissions and meet European emission standards. It does this by trapping <strong>Soot (Particulate Matter - PM)</strong> from the exhaust gasses while letting the gasses flow through the system.
    </p>
    <p>
      As with any type of filter a <strong>Particulate Filter</strong> needs to be cleaned regularly to function properly. With DPF’s this is done by a process known as <strong>Regeneration</strong> which involves a combination of a <strong>Catalyst</strong> function in the system and burning the soot to gas at a very high temperature leaving behind an <strong>Ash residue</strong> within the DPF. Regeneration should be an automatic process taking place in the normal use of your vehicle, you may have noticed this in the form of a blast of white smoke form the exhaust on occasions.
    </p>
    <h3>Problems Encountered with DPF</h3>
    <p>
      If regeneration doesn’t function properly it leads to a build-up of soot affecting performance and fuel economy, left unattended this will result in a <strong>Blocked DPF</strong> which can ultimately cause very expensive damage to other engine components. A blocked DPF is also potentially dangerous as it can cause overheating in the exhaust system and cause a fire risk. To prevent this damage most new vehicles will go into “Limp Home” safety mode at this stage, meaning the vehicle will have minimum power barely sufficient to crawl home.
    </p>
    <p>
      For regeneration to take place it requires the vehicle to be driven regularly at some speed on open roads e.g. motorway driving, typically driving at around 2500 RPM for approx. 15-30mins at least once a month, this will keep things working.
    </p>
    <p>
      Many diesel vehicles are used primarily in urban areas or on short stop start journeys e.g. local deliveries, taxi’s, school runs etc and many have auto gearbox, so the vehicle does not get the chance to heat up sufficiently and is unable to carry out a full regeneration process.
    </p>
    <p>
      Even if the regeneration functions as it should, over time the <strong>Ash Residue</strong> will build up in the DPF and have the same affect ultimately resulting in a blocked DPF. For this reason a DPF is classified as a Serviceable Item by the vehicle manufacturers like brake pads or air filters etc and not covered under warranty. <strong>DPF systems therefore need to be maintained properly.</strong>
    </p>
  </Page>
);
