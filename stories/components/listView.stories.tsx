import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { wrapExample } from '../utils/wrapExample';
import { ListView } from '../../src/components/ListView/ListView';

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
    const [cursor, setCursor] = useState('listViewCursor', -1);
    const items = data.map((x) => (
      <div key={x}>{x}</div>
    ));

    return (
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
          bordered={boolean('bordered', false)}
          disabled={boolean('disabled', false)}
          classNames={{
            item: {
              default: 'px-2 py-1',
              withCursor: 'bg-yellow-300',
              disabled: 'bg-gray-300',
            },
          }}
          items={items}
          cursor={cursor}
          onUpdateCursor={setCursor}
        />
      </div>
    );
  });
