import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { InputRange } from '../../src';
import { Stage } from '../utils/Stage';
import { TableRow } from '../utils/TableRow';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { Table } from '../utils/Table';

export default {
  title: 'Fields / InputRange',
  decorators: [withKnobs],
};

export const variations = () => {
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', 0);

  return (
    <Stage>
      <Table>
        <TableRow>
          <TableHeaderCell />
          <TableHeaderCell>X-small</TableHeaderCell>
          <TableHeaderCell>Small</TableHeaderCell>
          <TableHeaderCell>Base</TableHeaderCell>
          <TableHeaderCell>Large</TableHeaderCell>
          <TableHeaderCell>X-large</TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>default</TableHeaderCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xs"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="sm"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="lg"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xl"
              disabled={disabled}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>min, max and step</TableHeaderCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="xs"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="sm"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="lg"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <InputRange
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="xl"
              disabled={disabled}
            />
          </TableCell>
        </TableRow>
      </Table>
      <p>value: {value}</p>
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <InputRange onChange={action('onChange')} />
    </Stage>
  );
};
