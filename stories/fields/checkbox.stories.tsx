import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import { wrapExample } from '../utils/wrapExample';
import { Checkbox } from '../../src/fields/Checkbox';

storiesOf('fields / Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ checked: false })(({ store }) => (
      <Checkbox
        checked={store.state.checked}
        onChange={(checked) => store.set({ checked })}
        disabled={boolean('disabled', false)}
      >
        Checkbox
      </Checkbox>
    )),
  );
