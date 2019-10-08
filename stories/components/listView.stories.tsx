import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import useState from 'storybook-addon-state';

import { ListView, Separator, Row, Column, Button } from '../../src';
import { Stage } from '../utils/Stage';

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
    withCursor: 'bg-yellow-300',
    disabled: 'bg-gray-300',
  },
};

export const standard = () => {
  const [items, setItems] = useState('items', data);
  const handleDeleteRow = (): void => {
    setItems(items.slice(0, -1));
  };
  const handleAddRow = (): void => {
    setItems([...items, `${Date.now()}`]);
  };
  const listItems = items.map((x) => <div key={x}>{x}</div>);

  return (
    <Stage>
      <div className="w-64 h-64">
        <ListView
          initialCursor={5}
          bordered={boolean('bordered', false)}
          disabled={boolean('disabled', false)}
          classNames={classNames}
          items={listItems}
          onUpdateCursor={action('ListView#onUpdateCursor')}
          onKeyDown={action('ListView#onKeyDown')}
        />
      </div>
      <Separator />
      <Row>
        <Column packed>
          <Button onClick={handleAddRow}>row +</Button>
        </Column>
        <Column packed>
          <Button onClick={handleDeleteRow}>row -</Button>
        </Column>
      </Row>
    </Stage>
  );
};
