import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { CanvasView } from '../../src';

storiesOf('elements / CanvasView', module)
  .addDecorator(withKnobs)
  .add('normal', () => (
    <>
      <CanvasView
        width={number('width', 250, {
          min: 50,
          max: 500,
          step: 50,
          range: true,
        })}
        height={number('height', 250, {
          min: 50,
          max: 500,
          step: 50,
          range: true,
        })}
        serial={number('serial', 0)}
        onRedraw={(context, width, height, serial) => {
          context.clearRect(0, 0, width, height);
          context.beginPath();
          context.moveTo(0, 0);
          context.lineTo(width, height);
          context.stroke();
          context.fillText(`serial: ${serial}`, 20, 20);
        }}
      />
    </>
  ));
