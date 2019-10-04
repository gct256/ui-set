import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { Separator } from '../../src/elements/Separator';

storiesOf('elements', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('Separator', () => {
    const vertical = boolean('vertical', false);

    return (
      <div className={vertical ? 'h-32' : 'w-32'}>
        <Separator disabled={boolean('disabled', false)} vertical={vertical} />
      </div>
    );
  });
