import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { Select, SelectItem } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Fields / Select',
  decorators: [withKnobs],
};

const items: SelectItem[] = ['foo', 'bar', { text: 'Baz', value: 'baz' }];

export const standard = () => {
  const [value, setValue] = useState('value', 'baz');

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <Select value={value} onChange={setValue} items={items} />
        </div>
        <div className="mb-2">
          <Select value={value} onChange={setValue} items={items} disabled />
        </div>
      </div>
    </ExampleStage>
  );
};

export const noBorder = () => {
  const [value, setValue] = useState('value', 'baz');

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <Select
            bordered={false}
            value={value}
            onChange={setValue}
            items={items}
          />
        </div>
        <div className="mb-2">
          <Select
            bordered={false}
            value={value}
            onChange={setValue}
            items={items}
            disabled
          />
        </div>
      </div>
    </ExampleStage>
  );
};

export const withEmptyItem = () => {
  const [value, setValue] = useState('value', 'baz');

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <Select
            value={value}
            onChange={setValue}
            items={items}
            withEmptyItem
          />
        </div>
        <div className="mb-2">
          <Select
            value={value}
            onChange={setValue}
            items={items}
            disabled
            withEmptyItem
          />
        </div>
      </div>
    </ExampleStage>
  );
};

export const sizes = () => (
  <ExampleStage>
    <div className="flex">
      <Select items={items} className="mr-2" uiSize="xs" />
      <Select items={items} className="mr-2" uiSize="sm" />
      <Select items={items} className="mr-2" />
      <Select items={items} className="mr-2" uiSize="lg" />
      <Select items={items} className="mr-2" uiSize="xl" />
    </div>
  </ExampleStage>
);

export const events = () => {
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
      <div className="w-64">
        <div className="mb-2">
          <Select
            value={value}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            items={items}
          />
        </div>
        <div className="mb-2">
          <Select
            value={value}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            items={items}
            disabled
          />
        </div>
      </div>
      <p>Change: {count}</p>
      <p>
        Focus: {focus} / {blur}
      </p>
    </ExampleStage>
  );
};

const RefTest: React.FC = () => {
  const ref = React.useRef<HTMLSelectElement>(null);

  React.useEffect(() => {
    action(`ref: ${ref.current}`)();

    if (ref.current) {
      ref.current.style.boxShadow = '0 0 10px #f00';
    }
  });

  return <Select ref={ref} items={items} />;
};

export const refProps = () => (
  <ExampleStage>
    <RefTest />
  </ExampleStage>
);
