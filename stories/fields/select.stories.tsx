import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';

import { wrapExample } from '../utils/wrapExample';
import { Select } from '../../src/fields/Select';
import { SelectItem } from '../../src/utils/SelectItem';

const items: SelectItem[] = ['foo', 'bar', 'baz', 'ZZZ'];

storiesOf('fields / Select', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ value: '' })(({ store }) => (
      <Select
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        items={items}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  )
  .add(
    'with empty item',
    withState({ value: '' })(({ store }) => (
      <Select
        bordered={boolean('bordered', true)}
        withEmptyItem
        disabled={boolean('disabled', false)}
        items={items}
        value={store.state.value}
        onChange={(value) => store.set({ value })}
      />
    )),
  );
