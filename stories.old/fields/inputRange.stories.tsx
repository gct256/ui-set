import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { InputRange } from '../../src/fields/InputRange';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('InputRange', () => {
    const [value, setValue] = useState('inputRange', 0);

    return (
      <InputRange
        disabled={boolean('disabled', false)}
        min={-10}
        max={10}
        step={2}
        value={value}
        onChange={setValue}
      />
    );
  });
