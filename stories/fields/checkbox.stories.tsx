import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { Checkbox } from '../../src/fields/Checkbox';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('Checkbox', () => {
    const [checked, setChecked] = useState('checked', false);

    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        disabled={boolean('disabled', false)}
      >
        Checkbox
      </Checkbox>
    );
  });
