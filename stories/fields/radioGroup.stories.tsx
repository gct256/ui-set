import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { RadioGroup, SelectItem } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Fields / RadioGroup',
  decorators: [withKnobs],
};

const items: SelectItem[] = ['foo', 'bar', { text: 'Baz', value: 'baz' }];

export const standard = () => {
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', 'baz');

  return (
    <Stage>
      <RadioGroup
        name="radio_1"
        value={value}
        onChange={setValue}
        items={items}
        uiSize="xs"
        disabled={disabled}
      />
      <p>value: {value}</p>
    </Stage>
  );
};

export const vertical = () => {
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', 'baz');

  return (
    <Stage>
      <RadioGroup
        vertical
        name="radio_2"
        value={value}
        onChange={setValue}
        items={items}
        uiSize="xs"
        disabled={disabled}
      />
      <p>value: {value}</p>
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <RadioGroup
        name="radio2"
        items={items}
        value="bar"
        onChange={action('onChange')}
      />
    </Stage>
  );
};
