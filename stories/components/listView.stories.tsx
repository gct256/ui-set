import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { ListView } from '../../src/components/ListView/ListView';

const items = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuux'];

storiesOf('components / ListView', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add(
    'normal',
    withState({ cursor: -1 })(({ store }) => (
      <ListView
        bordered={boolean('bordered', false)}
        disabled={boolean('disabled', false)}
        cursor={store.state.cursor}
        classNames={{
          default: 'w-32 h-32',
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
    )),
  );
