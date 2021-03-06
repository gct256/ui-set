import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { RadioGroup, SelectItem } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / RadioGroup',
  decorators: [withKnobs],
};

const items: SelectItem[] = ['foo', 'bar', { text: 'Baz', value: 'baz' }];

export const standard = () => {
  const [value, setValue] = useState('value', 'baz');

  return (
    <ExampleStage>
      <p>
        <RadioGroup
          name="standard_1"
          value={value}
          onChange={setValue}
          items={items}
        />
      </p>
      <p>
        <RadioGroup
          name="standard_2"
          value={value}
          onChange={setValue}
          items={items}
          disabled
        />
      </p>
    </ExampleStage>
  );
};

export const vertical = () => {
  const [value, setValue] = useState('value', 'baz');

  return (
    <ExampleStage>
      <p>
        <RadioGroup
          name="vertical_1"
          value={value}
          onChange={setValue}
          items={items}
          vertical
        />
      </p>
      <p>
        <RadioGroup
          name="vertical_2"
          value={value}
          onChange={setValue}
          items={items}
          disabled
          vertical
        />
      </p>
    </ExampleStage>
  );
};

export const event = () => {
  const [count, setCount] = useState('count', 0);
  const [value, setValue] = useState('value', 'baz');
  const [focus, setFocus] = useState('focus', 0);
  const [blur, setBlur] = useState('blur', 0);

  const handleOnChange = React.useCallback(
    (newValue: string) => {
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
      <p>
        <RadioGroup
          name="event_1"
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          items={items}
        />
      </p>
      <p>
        <RadioGroup
          name="event_2"
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          items={items}
          disabled
        />
      </p>
      <p>Value: {value}</p>
      <p>Change: {count}</p>
      <p>
        Focus: {focus} / {blur}
      </p>
    </ExampleStage>
  );
};

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <RadioGroup ref={ref} name="refTest" items={items} />;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
