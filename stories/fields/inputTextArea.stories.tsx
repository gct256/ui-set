import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { InputTextArea } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / InputTextArea',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', '');

  return (
    <ExampleStage>
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
    </ExampleStage>
  );
};

export const noBorder = () => {
  const [value, setValue] = useState('value', '');

  return (
    <ExampleStage>
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
    </ExampleStage>
  );
};

export const sizes = () => (
  <ExampleStage>
    <div className="flex">
      <InputTextArea uiSize="xs" placeholder="xs: X-small" className="mr-2" />
      <InputTextArea uiSize="sm" placeholder="sm: Small" className="mr-2" />
      <InputTextArea placeholder="(not set0" className="mr-2" />
      <InputTextArea uiSize="lg" placeholder="lg: Large" className="mr-2" />
      <InputTextArea uiSize="xl" placeholder="xl: X-large" className="mr-2" />
    </div>
  </ExampleStage>
);

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [value, setValue] = useState('value', 'lorem');
  const [lastKey, setLastKey] = useState('lastKey', '');
  const [focus, setFocus] = useState('focus', 0);
  const [blur, setBlur] = useState('blur', 0);

  const handleOnChange = React.useCallback(
    (newValue: string) => {
      setCount(count + 1);
      setValue(newValue);
    },
    [count],
  );
  const handleOnKeyDown = React.useCallback(
    (key: string) => {
      setLastKey(key);
    },
    [setLastKey],
  );
  const handleOnFocus = React.useCallback(() => {
    setFocus(focus + 1);
  }, [setFocus]);
  const handleOnBlur = React.useCallback(() => {
    setBlur(blur + 1);
  }, [setFocus]);

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            disabled
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            readOnly
          />
        </div>
        <div className="mb-2">
          <InputTextArea
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            readOnly
            disabled
          />
        </div>
      </div>
      <p>Change: {count}</p>
      <p>Last Key down: {lastKey}</p>
      <p>
        Focus: {focus} / {blur}
      </p>
    </ExampleStage>
  );
};

export const elementClassName = () => {
  const [value, setValue] = useState('value', 'lorem');
  const handleOnChange = React.useCallback(
    (newValue: string) => {
      setValue(newValue);
    },
    [setValue],
  );

  return (
    <ExampleStage>
      <InputTextArea
        elementClassName="focus:bg-blue-800 focus:text-white text-center"
        value={value}
        onChange={handleOnChange}
      />
    </ExampleStage>
  );
};
