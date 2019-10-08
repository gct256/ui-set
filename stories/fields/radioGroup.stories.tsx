import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { RadioGroup, SelectItem } from '../../src';
import { Stage } from '../utils/Stage';
import { TableRow } from '../utils/TableRow';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { Table } from '../utils/Table';

export default {
  title: 'Fields / RadioGroup',
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
            <RadioGroup
              name="radio_1"
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xs"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_2"
              value={value}
              onChange={setValue}
              items={items}
              uiSize="sm"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_3"
              value={value}
              onChange={setValue}
              items={items}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_4"
              value={value}
              onChange={setValue}
              items={items}
              uiSize="lg"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_5"
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xl"
              disabled={disabled}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>vertical</TableHeaderCell>
          <TableCell>
            <RadioGroup
              name="radio_6"
              vertical
              value={value}
              onChange={setValue}
              items={items}
              uiSize="xs"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_7"
              vertical
              value={value}
              onChange={setValue}
              items={items}
              uiSize="sm"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_8"
              vertical
              value={value}
              onChange={setValue}
              items={items}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_9"
              vertical
              value={value}
              onChange={setValue}
              items={items}
              uiSize="lg"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <RadioGroup
              name="radio_10"
              vertical
              value={value}
              onChange={setValue}
              items={items}
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
      <RadioGroup name="radio2" items={items} onChange={action('onChange')} />
    </Stage>
  );
};
