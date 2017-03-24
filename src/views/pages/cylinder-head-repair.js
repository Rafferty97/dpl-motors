import { createElement } from 'cmmn';

import Page from './template';

export const getMeta = () => ({
  title: 'Cylinder Head Repair'
});

export default () => (
  <Page page="reconditioning" bk={require('./bks/reconditioning.jpg')}>
    <h1>Cylinder Head Repair</h1>
    <p>
      Valve steam oil seals provide a controlled leak of oil to allow the valve stem to be lubricated as it slides in the valve guide. The amount of oil that passes by the valve stem seal must be precisely controlled, as too little oil causes stem and guide wear. Too much oil causes carbon build-up leading to valve seat damage, increased emissions and excessive oil consumption.
    </p>
    <p>
      One of the most noticeable signs of worn or cracked valve stem seals will be just after a cold engine start. When the engine first starts up, residual oil gets sucked down through the bad seal and into the combustion chamber. A large cloud of blue-white smoke will be seen exiting the exhaust just after start-up. On many vehicle we have a cost effective way of replacing the seals without removing the cylinder head.
    </p>
    <p>
      We also provide cylinder head rebuilds, bent valve replacement, valve seating and much more.
    </p>
  </Page>
);
