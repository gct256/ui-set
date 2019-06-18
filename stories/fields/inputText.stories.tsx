import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { InputText } from '../../src/fields/InputText';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('InputText', () => {
    const [value, setValue] = useState('inputText', '');

    return (
      <InputText
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        value={value}
        onChange={setValue}
      />
    );
  });
