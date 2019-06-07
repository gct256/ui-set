import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { wrapExample } from '../utils/wrapExample';
import { FlatButton } from '../../src/elements/FlatButton';
import { Icon } from '../../src/elements/Icon';

storiesOf('elements / Flat Button', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('normal', () => (
    <FlatButton disabled={boolean('disabled', false)}>Flat Button</FlatButton>
  ))
  .add('with icon', () => (
    <FlatButton disabled={boolean('disabled', false)}>
      <Icon icon={faUser} />
    </FlatButton>
  ));
