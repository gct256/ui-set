import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { FlatButton } from '../../src/elements/FlatButton';

storiesOf('elements', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('FlatButton', () => (
    <FlatButton
      disabled={boolean('disabled', false)}
      onClick={action('FlatButton#onClick')}
    >
      Flat Button
    </FlatButton>
  ));
