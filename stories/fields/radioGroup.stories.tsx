import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import { wrapExample } from '../utils/wrapExample';
import { RadioGroup } from '../../src/fields/RadioGroup';
import { SelectItem } from '../../src/utils/SelectItem';

const items: SelectItem[] = ['foo', 'bar', 'baz', 'ZZZ'];

storiesOf('fields / RadioGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ value: 'foo' })(({ store }) => (
      <RadioGroup
        name="foo"
        disabled={boolean('disabled', false)}
        items={items}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  )
  .add(
    'vertical',
    withState({ value: 'foo' })(({ store }) => (
      <RadioGroup
        vertical
        name="foo"
        disabled={boolean('disabled', false)}
        items={items}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  );
