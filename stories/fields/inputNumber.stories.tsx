import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import { wrapExample } from '../utils/wrapExample';
import { InputNumber } from '../../src/fields/InputNumber';

storiesOf('fields / InputNumber', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ value: 0 })(({ store }) => (
      <InputNumber
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        min={-10}
        max={10}
        step={2}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  );
