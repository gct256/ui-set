import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { InputText } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / InputText',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', '');

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <InputText value={value} onChange={setValue} placeholder="Default" />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputText
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
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            placeholder="Default"
          />
        </div>
        <div className="mb-2">
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            disabled
            placeholder="Disabled"
          />
        </div>
        <div className="mb-2">
          <InputText
            bordered={false}
            value={value}
            onChange={setValue}
            readOnly
            placeholder="Readonly"
          />
        </div>
        <div className="mb-2">
          <InputText
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
      <InputText uiSize="xs" placeholder="xs: X-small" className="mr-2" />
      <InputText uiSize="sm" placeholder="sm: Small" className="mr-2" />
      <InputText placeholder="(not set0" className="mr-2" />
      <InputText uiSize="lg" placeholder="lg: Large" className="mr-2" />
      <InputText uiSize="xl" placeholder="xl: X-large" className="mr-2" />
    </div>
  </ExampleStage>
);

export const event = () => {
  const [changeCount, setChangeCount] = useState('changeCount', 0);
  const [enterCount, setEnterCount] = useState('enterCount', 0);
  const [lastKey, setLastKey] = useState('lastKey', '');
  const [value, setValue] = useState('value', 'lorem');
  const [focus, setFocus] = useState('focus', 0);
  const [blur, setBlur] = useState('blur', 0);

  const handleOnChange = React.useCallback(
    (newValue: string) => {
      setChangeCount(changeCount + 1);
      setValue(newValue);
    },
    [changeCount],
  );
  const handleOnEnterKey = React.useCallback(() => {
    setEnterCount(enterCount + 1);
  }, [enterCount]);
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
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            disabled
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            readOnly
          />
        </div>
        <div className="mb-2">
          <InputText
            value={value}
            onChange={handleOnChange}
            onEnterKey={handleOnEnterKey}
            onKeyDown={handleOnKeyDown}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            readOnly
            disabled
          />
        </div>
      </div>
      <p>Change: {changeCount}</p>
      <p>Enter Key: {enterCount}</p>
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
      <InputText
        elementClassName="focus:bg-blue-800 focus:text-white text-center"
        value={value}
        onChange={handleOnChange}
      />
    </ExampleStage>
  );
};

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <InputText ref={ref} />;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
