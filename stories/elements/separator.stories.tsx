import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { Separator } from '../../src/elements/Separator';

storiesOf('elements / Separator', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('horizontal', () => (
    <div className="w-64">
      <Separator disabled={boolean('disabled', false)} />
    </div>
  ))
  .add('vertical', () => (
    <div className="h-64">
      <Separator vertical disabled={boolean('disabled', false)} />
    </div>
  ));
