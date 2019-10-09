import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { InputRange } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Fields / InputRange',
  decorators: [withKnobs],
};

export const standard = () => {
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', 0);

  return (
    <Stage>
      <InputRange
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        disabled={disabled}
      />
      <p>value: {value}</p>
    </Stage>
  );
};

export const minMaxAndStep = () => {
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', 0);

  return (
    <Stage>
      <InputRange
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        min={-20}
        max={20}
        step={5}
        disabled={disabled}
      />
      <p>value: {value}</p>
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <InputRange onChange={action('onChange')} />
    </Stage>
  );
};
