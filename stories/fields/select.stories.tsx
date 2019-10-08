import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { Select, SelectItem } from '../../src';
import { Stage } from '../utils/Stage';
import { TableRow } from '../utils/TableRow';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { Table } from '../utils/Table';

export default {
  title: 'Fields / Select',
  decorators: [withKnobs],
};

const items: SelectItem[] = ['foo', 'bar', { text: 'Baz', value: 'baz' }];

export const variations = () => {
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', 'baz');

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
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xs"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="sm"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="lg"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xl"
              disabled={disabled}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>no bordered</TableHeaderCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xs"
              bordered={false}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="sm"
              bordered={false}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              bordered={false}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="lg"
              bordered={false}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xl"
              bordered={false}
              disabled={disabled}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>with empty item</TableHeaderCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xs"
              withEmptyItem
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="sm"
              withEmptyItem
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              withEmptyItem
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="lg"
              withEmptyItem
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Select
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xl"
              withEmptyItem
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
      <Select items={items} onChange={action('onChange')} />
    </Stage>
  );
};
