import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { ListView, Separator, Button, FormRow, FormCell } from '../../src';

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

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('ListView', () => {
    const [items, setItems] = useState('items', data);
    const handleDeleteRow = (): void => {
      setItems(items.slice(0, -1));
    };
    const handleAddRow = (): void => {
      setItems([...items, `${Date.now()}`]);
    };
    const listItems = items.map((x) => <div key={x}>{x}</div>);

    return (
      <>
        <div
          style={{
            width: `${number('width', 150, {
              min: 100,
              max: 300,
              step: 10,
              range: true,
            })}px`,
            height: `${number('height', 150, {
              min: 100,
              max: 300,
              step: 10,
              range: true,
            })}px`,
          }}
        >
          <ListView
            initialCursor={5}
            bordered={boolean('bordered', false)}
            disabled={boolean('disabled', false)}
            classNames={{
              item: {
                default: 'px-2 py-1',
                withCursor: 'bg-yellow-300',
                disabled: 'bg-gray-300',
              },
            }}
            items={listItems}
            onUpdateCursor={action('ListView#onUpdateCursor')}
            onKeyDown={action('ListView#onKeyDown')}
          />
        </div>
        <Separator />
        <FormRow>
          <FormCell>
            <Button onClick={handleAddRow}>row +</Button>
          </FormCell>
          <FormCell>
            <Button onClick={handleDeleteRow}>row -</Button>
          </FormCell>
        </FormRow>
      </>
    );
  });
