import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { BorderedView } from '../../src/elements/BorderedView';

storiesOf('elements / BorderedView', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('default', () => (
    <BorderedView className="w-32 h-32" disabled={boolean('disabled', false)} />
  ));
