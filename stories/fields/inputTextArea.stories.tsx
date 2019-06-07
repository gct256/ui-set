import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import { wrapExample } from '../utils/wrapExample';
import { InputTextArea } from '../../src/fields/InputTextArea';

storiesOf('fields / InputTextArea', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ value: '' })(({ store }) => (
      <InputTextArea
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        placeholder={text('placeholder', 'Placeholder')}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  );
