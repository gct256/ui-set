import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import { wrapExample } from '../utils/wrapExample';
import { InputRange } from '../../src/fields/InputRange';

storiesOf('fields / InputRange', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ value: 0 })(({ store }) => (
      <InputRange
        disabled={boolean('disabled', false)}
        min={-10}
        max={10}
        step={2}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  );
