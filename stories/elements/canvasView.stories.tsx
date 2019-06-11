import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { CanvasView } from '../../src';

const redraw = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  _scale: number,
  serial: number | string,
) => {
  // eslint-disable-next-line no-param-reassign
  context.font = '24px serif';
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, height);
  context.stroke();
  context.beginPath();
  context.arc(125, 125, 50, 0, Math.PI * 2, true);
  context.stroke();
  context.fillText(`serial: ${serial}`, 50, 50);
};

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
        onRedraw={redraw}
      />
    </>
  ))
  .add('render mode', () => (
    <>
      <CanvasView
        width={250}
        height={250}
        renderMode={select(
          'render mode',
          {
            default: 'default',
            clearly: 'clearly',
            fine: 'fine',
          },
          'default',
        )}
        serial={0}
        onRedraw={redraw}
      />
    </>
  ));
