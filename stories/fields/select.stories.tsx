import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { Select } from '../../src/fields/Select';
import { SelectItem } from '../../src/utils/SelectItem';

const items: SelectItem[] = ['foo', 'bar', 'baz', 'ZZZ'];

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('Select', () => {
    const [value, setValue] = useState('select', '');

    return (
      <Select
        bordered={boolean('bordered', true)}
        disabled={boolean('disabled', false)}
        withEmptyItem={boolean('empty item', false)}
        items={items}
        value={value}
        onChange={setValue}
      />
    );
  });
