import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { Checkbox } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / Checkbox',
  decorators: [withKnobs],
};

export const standard = () => {
  const [checked, setChecked] = useState('checked', false);

  return (
    <ExampleStage>
      <p>
        <Checkbox checked={checked} onChange={setChecked}>
          Checkbox
        </Checkbox>
      </p>
      <p>
        <Checkbox checked={checked} onChange={setChecked} disabled>
          Disabled Checkbox
        </Checkbox>
      </p>
    </ExampleStage>
  );
};

export const withoutLabel = () => {
  const [checked, setChecked] = useState('checked', false);

  return (
    <ExampleStage>
      <p>
        <Checkbox checked={checked} onChange={setChecked} />
      </p>
      <p>
        <Checkbox checked={checked} onChange={setChecked} disabled />
      </p>
    </ExampleStage>
  );
};

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [checked, setChecked] = useState('checked', false);

  const handleOnChange = React.useCallback(
    (newChecked: boolean) => {
      setCount(count + 1);
      setChecked(newChecked);
    },
    [count],
  );

  return (
    <ExampleStage>
      <p>
        <Checkbox checked={checked} onChange={handleOnChange} />
      </p>
      <p>
        <Checkbox checked={checked} onChange={handleOnChange} disabled />
      </p>
      <p>Value: {checked ? 'ON' : 'OFF'}</p>
      <p>Change: {count}</p>
    </ExampleStage>
  );
};
