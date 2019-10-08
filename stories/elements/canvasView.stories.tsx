import * as React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { CanvasView } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Elements / CanvasView',
  decorators: [withKnobs],
};

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

export const standard = () => (
  <Stage>
    <CanvasView
      width={number('width', 250, {
        min: 0,
        max: 500,
        step: 50,
        range: true,
      })}
      height={number('height', 250, {
        min: 0,
        max: 500,
        step: 50,
        range: true,
      })}
      serial={number('serial', 0)}
      renderMode={select(
        'render mode',
        {
          default: 'default',
          clearly: 'clearly',
          fine: 'fine',
        },
        'default',
      )}
      onRedraw={redraw}
    />
  </Stage>
);
