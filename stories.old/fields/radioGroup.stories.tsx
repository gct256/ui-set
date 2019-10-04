import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';

import { RadioGroup } from '../../src/fields/RadioGroup';
import { SelectItem } from '../../src/utils/SelectItem';
import { Example } from '../utils/Example';
import { ExampleItem } from '../utils/ExampleItem';

const items: SelectItem[] = ['foo', 'bar', 'baz', 'ZZZ'];

storiesOf('fields', module)
  .addDecorator(withKnobs)
  .add('RadioGroup', () => {
    const [value, setValue] = useState('radioGroup', '');

    return (
      <div className="example-wrapper">
        <Example className="example-white">
          <ExampleItem>
            <RadioGroup
              name="radio1"
              disabled={boolean('disabled', false)}
              vertical={boolean('vertical', false)}
              items={items}
              value={value}
              onChange={setValue}
            />
          </ExampleItem>
        </Example>
        <Example className="example-black">
          <ExampleItem>
            <RadioGroup
              name="radio2"
              disabled={boolean('disabled', false)}
              vertical={boolean('vertical', false)}
              items={items}
              value={value}
              onChange={setValue}
            />
          </ExampleItem>
        </Example>
        <Example className="example-checkerboard">
          <ExampleItem>
            <RadioGroup
              name="radio3"
              disabled={boolean('disabled', false)}
              vertical={boolean('vertical', false)}
              items={items}
              value={value}
              onChange={setValue}
            />
          </ExampleItem>
        </Example>
        <Example colored>
          <ExampleItem>
            <RadioGroup
              name="radio4"
              disabled={boolean('disabled', false)}
              vertical={boolean('vertical', false)}
              items={items}
              value={value}
              onChange={setValue}
            />
          </ExampleItem>
        </Example>
      </div>
    );
  });
