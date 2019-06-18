import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { InputNumber } from '../../src/fields/InputNumber';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('InputNumber', () => {
    const [value, setValue] = useState('inputNumber', 0);

    return (
      <InputNumber
        value={value}
        onChange={setValue}
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        min={-10}
        max={10}
        step={2}
      />
    );
  });
