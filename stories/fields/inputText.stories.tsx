import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { wrapExample } from '../utils/wrapExample';
import { InputText } from '../../src/fields/InputText';
import { UiSize } from '../../src/utils/UiSize';
import { getUiSizeOptions } from '../utils/getOptions';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('InputText', () => {
    const [value, setValue] = useState('inputText', '');

    return (
      <InputText
        password={boolean('password', false)}
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        uiSize={select<UiSize>('ui size', getUiSizeOptions(), UiSize.none)}
        value={value}
        onChange={setValue}
        onEnterKey={action('InputText#onEnterKey')}
      />
    );
  });
