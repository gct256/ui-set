/* eslint-disable no-param-reassign */
import * as React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { CanvasView } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';

export default {
  title: 'Elements / CanvasView',
  decorators: [withKnobs],
};

const redraw = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  scale: number,
  serial: number | string,
) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  context.font = '24px serif';
  context.fillStyle = `rgb(${r},${g},${b})`;
  context.strokeStyle = '#000';

  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, height);
  context.stroke();

  context.beginPath();
  context.arc(125, 125, 50, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();

  context.fillStyle = '#000';
  context.fillText(`serial: ${serial}, scale: ${scale}`, 50, 50);
};

export const standard = () => (
  <ExampleStage>
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
  </ExampleStage>
);
