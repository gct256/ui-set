import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Fields / Checkbox',
  decorators: [withKnobs],
};

export const standard = () => {
  const disabled = boolean('disabled', false);
  const [checked, setChecked] = useState('checked', false);

  return (
    <Stage>
      <Checkbox checked={checked} onChange={setChecked} disabled={disabled}>
        Checkbox
      </Checkbox>
    </Stage>
  );
};

export const withoutLabel = () => {
  const disabled = boolean('disabled', false);
  const [checked, setChecked] = useState('checked', false);

  return (
    <Stage>
      <Checkbox checked={checked} onChange={setChecked} disabled={disabled} />
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <Checkbox onChange={action('onChange')} />
    </Stage>
  );
};
