import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { InputRange } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / InputRange',
  decorators: [withKnobs],
};

export const standard = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <ExampleStage>
      <div className="w-64">
        <InputRange value={value} onChange={setValue} />
        <InputRange value={value} onChange={setValue} disabled />
        <InputRange value={value} onChange={setValue} readOnly />
        <InputRange value={value} onChange={setValue} readOnly disabled />
      </div>
    </ExampleStage>
  );
};

export const minMaxAndStep = () => {
  const [value, setValue] = useState('value', 0);

  return (
    <ExampleStage>
      <div className="w-64">
        <InputRange
          value={value}
          onChange={setValue}
          min={-20}
          max={20}
          step={5}
        />
      </div>
    </ExampleStage>
  );
};

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [value, setValue] = useState('value', 0);
  const [focus, setFocus] = useState('focus', 0);
  const [blur, setBlur] = useState('blur', 0);

  const handleOnChange = React.useCallback(
    (newValue: number) => {
      setCount(count + 1);
      setValue(newValue);
    },
    [count],
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
        <InputRange
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <InputRange
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          disabled
        />
        <InputRange
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          readOnly
        />
        <InputRange
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          readOnly
          disabled
        />
      </div>
      <p>Value: {value}</p>
      <p>Change: {count}</p>
      <p>
        Focus: {focus} / {blur}
      </p>
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

  return <InputRange ref={ref} />;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
