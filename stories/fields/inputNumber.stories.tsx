import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { wrapExample } from '../utils/wrapExample';
import { InputNumber } from '../../src/fields/InputNumber';
import { UiSize } from '../../src/utils/UiSize';
import { getUiSizeOptions } from '../utils/getOptions';

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('InputNumber', () => {
    const [value, setValue] = useState('inputNumber', 0);

    return (
      <InputNumber
        value={value}
        onChange={setValue}
        onEnterKey={action('InputNumber#onEnterKey')}
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        uiSize={select<UiSize>('ui size', getUiSizeOptions(), UiSize.none)}
        min={-10}
        max={10}
        step={2}
      />
    );
  });
