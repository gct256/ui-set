import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { InputNumber } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / InputNumber',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={setValue}
            placeholder="Default"
          />
        </div>
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={setValue}
            readOnly
            disabled
            placeholder="Readonly, Disabled"
          />
        </div>
      </div>
    </ExampleStage>
  );
};

export const noBorder = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <InputNumber
            bordered={false}
            value={value}
            onChange={setValue}
            placeholder="Default"
          />
        </div>
        <div className="mb-2">
          <InputNumber
            bordered={false}
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputNumber
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputNumber
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            disabled
            placeholder="Readonly, Disabled"
          />
        </div>
      </div>
    </ExampleStage>
  );
};

export const sizes = () => (
  <ExampleStage>
    <div className="flex">
      <InputNumber uiSize="xs" placeholder="xs: X-small" className="mr-2" />
      <InputNumber uiSize="sm" placeholder="sm: Small" className="mr-2" />
      <InputNumber placeholder="(not set0" className="mr-2" />
      <InputNumber uiSize="lg" placeholder="lg: Large" className="mr-2" />
      <InputNumber uiSize="xl" placeholder="xl: X-large" className="mr-2" />
    </div>
  </ExampleStage>
);

export const minMaxAndStep = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <ExampleStage>
      <InputNumber
        value={value}
        min={-10}
        max={20}
        step={5}
        onChange={setValue}
      />
    </ExampleStage>
  );
};

export const event = () => {
  const [changeCount, setChangeCount] = useState('changeCount', 0);
  const [enterCount, setEnterCount] = useState('enterCount', 0);
  const [value, setValue] = useState('value', 0);
  const handleOnChange = React.useCallback(
    (newValue: number) => {
      setChangeCount(changeCount + 1);
      setValue(newValue);
    },
    [changeCount],
  );
  const handleOnEnterKey = React.useCallback(() => {
    setEnterCount(enterCount + 1);
  }, [enterCount]);

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
          />
        </div>
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            disabled
          />
        </div>
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            readOnly
          />
        </div>
        <div className="mb-2">
          <InputNumber
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            readOnly
            disabled
          />
        </div>
      </div>
      <p>Change: {changeCount}</p>
      <p>Enter Key: {enterCount}</p>
    </ExampleStage>
  );
};

export const elementClassName = () => {
  const [value, setValue] = useState('value', 0);
  const handleOnChange = React.useCallback(
    (newValue: number) => {
      setValue(newValue);
    },
    [setValue],
  );

  return (
    <ExampleStage>
      <InputNumber
        elementClassName="focus:bg-blue-800 focus:text-white"
        value={value}
        onChange={handleOnChange}
      />
    </ExampleStage>
  );
};
