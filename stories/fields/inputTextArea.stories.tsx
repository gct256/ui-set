import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { InputTextArea } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Fields / InputTextArea',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', '');

  return (
    <Stage>
      <div className="w-64">
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={setValue}
            placeholder="Default"
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={setValue}
            readOnly
            disabled
            placeholder="Readonly, Disabled"
          />
        </div>
      </div>
    </Stage>
  );
};

export const noBorder = () => {
  const [value, setValue] = useState('value', '');

  return (
    <Stage>
      <div className="w-64">
        <div className="mb-2">
          <InputTextArea
            bordered={false}
            value={value}
            onChange={setValue}
            placeholder="Default"
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            bordered={false}
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            disabled
            placeholder="Readonly, Disabled"
          />
        </div>
      </div>
    </Stage>
  );
};

export const sizes = () => (
  <Stage>
    <div className="flex">
      <InputTextArea uiSize="xs" placeholder="xs: X-small" className="mr-2" />
      <InputTextArea uiSize="sm" placeholder="sm: Small" className="mr-2" />
      <InputTextArea placeholder="(not set0" className="mr-2" />
      <InputTextArea uiSize="lg" placeholder="lg: Large" className="mr-2" />
      <InputTextArea uiSize="xl" placeholder="xl: X-large" className="mr-2" />
    </div>
  </Stage>
);

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [value, setValue] = useState('value', 'lorem');
  const handleOnChange = React.useCallback(
    (newValue: string) => {
      setCount(count + 1);
      setValue(newValue);
    },
    [count],
  );

  return (
    <Stage>
      <div className="w-64">
        <div className="mb-2">
          <InputTextArea value={value} onChange={handleOnChange} />
        </div>
        <div className="mb-2">
          <InputTextArea value={value} onChange={handleOnChange} disabled />
        </div>
        <div className="mb-2">
          <InputTextArea value={value} onChange={handleOnChange} readOnly />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={handleOnChange}
            readOnly
            disabled
          />
        </div>
      </div>
      <p>Change: {count}</p>
    </Stage>
  );
};
