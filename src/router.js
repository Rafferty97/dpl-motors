import { createElement } from 'cmmn';

import * as home from './views/home-page';
import * as services from './views/pages/services';
import * as performanceTuning from './views/pages/performance-tuning';
import * as reconditioning from './views/pages/reconditioning';
import * as parts from './views/parts';

function route(props) {
  let page = home;
  let viewProps = {};
  if (props.route.length > 0) {
    switch (props.route[0]) {
      case 'services':
        page = services;
        break;
      case 'performance-tuning':
        page = performanceTuning;
        break;
      case 'reconditioning':
        page = reconditioning;
        break;
      case 'parts':
        page = parts;
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
        <link rel="icon" type="image/png" sizes="32x32" href={require('./views/theme/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={require('./views/theme/favicon-32x32.png')} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta charset="utf-8" />
        <title>{title}</title>
      </head>
      <body className={meta.bodyClass}>
        <View {...viewProps} />
      </body>
    </html>
  );
};
