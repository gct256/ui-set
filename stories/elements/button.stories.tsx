import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/elements/Button';
import { wrapExample } from '../utils/wrapExample';

storiesOf('elements', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('Button', () => {
    const iconOnly = boolean('icon-only', false);

    return (
      <Button
        disabled={boolean('disabled', false)}
        primary={boolean('primary', false)}
        icon={boolean('icon', false) || iconOnly ? faUser : undefined}
        onClick={action('Button#onClick')}
      >
        {iconOnly ? undefined : text('caption', 'Button')}
      </Button>
    );
  });
