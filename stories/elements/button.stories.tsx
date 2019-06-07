import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { wrapExample } from '../utils/wrapExample';
import { Button } from '../../src/elements/Button';

storiesOf('elements / Button', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('normal', () => (
    <>
      <Button
        primary={boolean('primary', false)}
        disabled={boolean('disabled', false)}
      >
        Button
      </Button>
    </>
  ))
  .add('with icon', () => (
    <>
      <Button
        icon={faUser}
        primary={boolean('primary', false)}
        disabled={boolean('disabled', false)}
      >
        Button
      </Button>
    </>
  ))
  .add('icon only', () => (
    <>
      <Button
        icon={faUser}
        primary={boolean('primary', false)}
        disabled={boolean('disabled', false)}
      />
    </>
  ));
