import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { InputTextArea } from '../../src/fields/InputTextArea';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('InputTextArea', () => {
    const [value, setValue] = useState('inputTextArea', '');

    return (
      <InputTextArea
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        value={value}
        onChange={setValue}
      />
    );
  });
