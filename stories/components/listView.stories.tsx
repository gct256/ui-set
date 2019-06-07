import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { ListView } from '../../src/components/ListView/ListView';

const items = [
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

storiesOf('components / ListView', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ cursor: -1 })(({ store }) => (
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
          cursor={store.state.cursor}
          classNames={{
            item: {
              default: 'px-2 py-1',
              withCursor: 'bg-yellow-300',
            },
          }}
          items={items.map((x) => (
            <div key={x}>{x}</div>
          ))}
          onUpdateCursor={(cursor) => store.set({ cursor })}
        />
      </div>
    )),
  );
