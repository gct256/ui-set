import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

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
  const handleOnChange = React.useCallback(
    (newValue: string) => {
      setCount(count + 1);
      setValue(newValue);
    },
    [count],
  );

  return (
    <ExampleStage>
      <div className="w-64">
        <div className="mb-2">
          <Select value={value} onChange={handleOnChange} items={items} />
        </div>
        <div className="mb-2">
          <Select
            value={value}
            onChange={handleOnChange}
            items={items}
            disabled
          />
        </div>
      </div>
      <p>Change: {count}</p>
    </ExampleStage>
  );
};
