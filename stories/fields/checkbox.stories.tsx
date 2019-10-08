import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '../../src';
import { Stage } from '../utils/Stage';
import { TableRow } from '../utils/TableRow';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { Table } from '../utils/Table';

export default {
  title: 'Fields / Checkbox',
  decorators: [withKnobs],
};

export const variations = () => {
  const disabled = boolean('disabled', false);
  const [checked, setChecked] = useState('checked', false);

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
            <Checkbox
              checked={checked}
              onChange={setChecked}
              uiSize="xs"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Checkbox
              checked={checked}
              onChange={setChecked}
              uiSize="sm"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Checkbox
              checked={checked}
              onChange={setChecked}
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Checkbox
              checked={checked}
              onChange={setChecked}
              uiSize="lg"
              disabled={disabled}
            />
          </TableCell>
          <TableCell>
            <Checkbox
              checked={checked}
              onChange={setChecked}
              uiSize="xl"
              disabled={disabled}
            />
          </TableCell>
        </TableRow>
      </Table>
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <Checkbox onChange={action('onChange')} />
    </Stage>
  );
};
