import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { InputTextArea } from '../../src/fields/InputTextArea';
import { UiSize } from '../../src/utils/UiSize';
import { getUiSizeOptions } from '../utils/getOptions';

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
        uiSize={select<UiSize>('ui size', getUiSizeOptions(), UiSize.none)}
        value={value}
        onChange={setValue}
        row={number('row', 0, {
          min: 0,
          max: 10,
          step: 1,
          range: true,
        })}
      />
    );
  });
