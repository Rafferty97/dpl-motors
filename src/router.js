import { createElement } from 'cmmn';

import * as home from './views/home-page';
import * as services from './views/pages/services';
import * as airConditioning from './views/pages/air-conditioning';
import * as performanceTuning from './views/pages/performance-tuning';
import * as ecuTuning from './views/pages/ecu-tuning';
import * as dpfSolution from './views/pages/dpf-solution';
import * as egrSolution from './views/pages/egr-solution';
import * as truckTuning from './views/pages/truck-tuning';
import * as reconditioning from './views/pages/reconditioning';
import * as parts from './views/parts';
import * as book from './views/pages/booking';
import * as contact from './views/contact';

function route(props) {
  let page = home;
  let viewProps = {};
  if (props.route.length > 0) {
    switch (props.route[0]) {
      case 'services':
        page = services;
        if (props.route.length > 1) {
          switch (props.route[1]) {
            case 'air-conditioning':
            page = airConditioning;
            break;
          }
        }
        break;
      case 'performance-tuning':
        page = performanceTuning;
        if (props.route.length > 1) {
          switch (props.route[1]) {
            case 'ecu-tuning': page = ecuTuning; break;
            case 'dpf-solution': page = dpfSolution; break;
            case 'egr-solution': page = egrSolution; break;
            case 'truck-tuning': page = truckTuning; break;
          }
        }
        break;
      case 'reconditioning':
        page = reconditioning;
        break;
      case 'parts':
        page = parts;
        break;
      case 'book':
        page = book;
        break;
      case 'contact-us':
        page = contact;
        break;
    }
  }
  return { page, viewProps };
}

export default (props) => {
  const { page, viewProps } = route(props);
  const meta = page.getMeta ? page.getMeta(viewProps) : {};
  const View = page.default;
  const title = (meta.title || 'Untitled') + (props.route.length == 0 ? '' : ' | DPL Motors');
  return (
    <html>
      <head>
        { /* <!-- Google Tag Manager --> */ }
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TD3SK9D');`}</script>
        { /* <!-- End Google Tag Manager --> */ }
        <link rel="icon" type="image/png" sizes="32x32" href={require('./views/theme/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={require('./views/theme/favicon-32x32.png')} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta charset="utf-8" />
        <title>{title}</title>
      </head>
      <body className={meta.bodyClass}>
        { /* <!-- Google Tag Manager (noscript) --> */ }
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD3SK9D"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        { /* <!-- End Google Tag Manager (noscript) --> */ }
        <View {...viewProps} />
      </body>
    </html>
  );
};
