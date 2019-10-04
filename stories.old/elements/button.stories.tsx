import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/elements/Button';
import { wrapExample } from '../utils/wrapExample';
import { getUiSizeOptions } from '../utils/getOptions';
import { UiSize } from '../../src/utils/UiSize';

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
        uiSize={select<UiSize>('ui size', getUiSizeOptions(), UiSize.none)}
        onClick={action('Button#onClick')}
      >
        {iconOnly ? undefined : text('caption', 'Button')}
      </Button>
    );
  });
