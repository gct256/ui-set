import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { InputRange } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Fields / InputRange',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <Stage>
      <div className="w-64">
        <InputRange value={value} onChange={setValue} />
        <InputRange value={value} onChange={setValue} disabled />
        <InputRange value={value} onChange={setValue} readOnly />
        <InputRange value={value} onChange={setValue} readOnly disabled />
      </div>
    </Stage>
  );
};

export const minMaxAndStep = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <Stage>
      <div className="w-64">
        <InputRange
          value={value}
          onChange={setValue}
          min={-20}
          max={20}
          step={5}
        />
      </div>
    </Stage>
  );
};

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [value, setValue] = useState('value', 0);
  const handleOnChange = React.useCallback(
    (newValue: number) => {
      setCount(count + 1);
      setValue(newValue);
    },
    [count],
  );

  return (
    <Stage>
      <div className="w-64">
        <InputRange value={value} onChange={handleOnChange} />
        <InputRange value={value} onChange={handleOnChange} disabled />
        <InputRange value={value} onChange={handleOnChange} readOnly />
        <InputRange value={value} onChange={handleOnChange} readOnly disabled />
      </div>
      <p>Value: {value}</p>
      <p>Change: {count}</p>
    </Stage>
  );
};
