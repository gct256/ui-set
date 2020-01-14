import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { ListView, Row, Column, Button } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Components / ListView',
  decorators: [withKnobs],
};

const data = [
  'foo',
  'bar',
  'baz',
  'qux',
  'quux',
  'quuux',
  'FOO',
  'BAR',
  'BAZ',
  'QUX',
  'QUUX',
  'QUUUX',
];

const classNames = {
  item: {
    default: 'px-2 py-1',
    withCursor: 'bg-gray-300 focus-parent:bg-blue-300',
    disabled: 'bg-gray-300',
  },
};

export const standard = () => {
  const items = data.map((x) => <div key={x}>{x}</div>);

  return (
    <ExampleStage>
      <div className="flex">
        <div className="w-64 h-64 mr-2">
          <ListView items={items} classNames={classNames} />
        </div>
        <div className="w-64 h-64 mr-2">
          <ListView items={items} classNames={classNames} disabled />
        </div>
      </div>
    </ExampleStage>
  );
};

export const noBordered = () => {
  const items = data.map((x) => <div key={x}>{x}</div>);

  return (
    <ExampleStage>
      <div className="flex">
        <div className="w-64 h-64 mr-2">
          <ListView bordered={false} items={items} classNames={classNames} />
        </div>
        <div className="w-64 h-64 mr-2">
          <ListView
            bordered={false}
            items={items}
            classNames={classNames}
            disabled
          />
        </div>
      </div>
    </ExampleStage>
  );
};

export const event = () => {
  const [items, setItems] = useState('items', data);
  const [key, setKey] = useState('key', '');
  const [cursor, setCursor] = useState('cursor', 5);
  const handleOnUpdateCursor = React.useCallback((newCursor: number) => {
    setCursor(newCursor);
  }, []);
  const handleOnKeyDown = React.useCallback((ev) => {
    setKey(ev.key);
  }, []);
  const handleDeleteRow = (): void => {
    setItems(items.slice(0, -1));
  };
  const handleAddRow = (): void => {
    setItems([...items, `${Date.now()}`]);
  };
  const listItems = items.map((x) => <div key={x}>{x}</div>);

  return (
    <ExampleStage>
      <Row>
        <Column packed>
          <div className="w-64 h-64 mr-2">
            <ListView
              initialCursor={cursor}
              classNames={classNames}
              items={listItems}
              onUpdateCursor={handleOnUpdateCursor}
              onKeyDown={handleOnKeyDown}
            />
          </div>
        </Column>
        <Column packed>
          <div className="w-64 h-64 mr-2">
            <ListView
              initialCursor={cursor}
              classNames={classNames}
              items={listItems}
              onUpdateCursor={handleOnUpdateCursor}
              onKeyDown={handleOnKeyDown}
              disabled
            />
          </div>
        </Column>
        <Column packed>
          <Button onClick={handleAddRow}>row +</Button>
        </Column>
        <Column packed>
          <Button onClick={handleDeleteRow}>row -</Button>
        </Column>
      </Row>
      <p>Update cursor: {cursor}</p>
      <p>KeyDown: `{key}`</p>
    </ExampleStage>
  );
};
