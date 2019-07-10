import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  radios,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';

import { wrapExample } from '../utils/wrapExample';
import { Label } from '../../src/forms/Label';
import { getUiSizeOptions } from '../utils/getOptions';
import { UiSize } from '../../src/utils/UiSize';

type Align = 'undefined' | 'left' | 'center' | 'right';

const alignValues: { [key: string]: Align } = {
  undef: 'undefined',
  left: 'left',
  center: 'center',
  right: 'right',
};

storiesOf('forms', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapExample)
  .add('Label', () => {
    const align = radios('align', alignValues, 'undefined');

    return (
      <>
        <div className="w-64">
          <Label
            className="w-64"
            align={align === 'undefined' ? undefined : align}
            disabled={boolean('disabled', false)}
            uiSize={select<UiSize>('ui size', getUiSizeOptions(), UiSize.none)}
          >
            {text('label', 'Label')}
          </Label>
        </div>
      </>
    );
  });
