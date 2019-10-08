import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { InputNumber } from '../../src';
import { Stage } from '../utils/Stage';
import { TableRow } from '../utils/TableRow';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { Table } from '../utils/Table';

export default {
  title: 'Fields / InputNumber',
  decorators: [withKnobs],
};

export const variations = () => {
  const readOnly = boolean('read only', false);
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
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xs"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="sm"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="lg"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xl"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>no border</TableHeaderCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xs"
              bordered={false}
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="sm"
              bordered={false}
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              bordered={false}
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="lg"
              bordered={false}
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xl"
              bordered={false}
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>min, max and step</TableHeaderCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="xs"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="sm"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="lg"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputNumber
              value={value}
              onChange={setValue}
              min={-20}
              max={20}
              step={5}
              placeholder="Placeholder"
              uiSize="xl"
              disabled={disabled}
              readOnly={readOnly}
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
      <InputNumber
        onChange={action('onChange')}
        onEnterKey={action('onEnterKey')}
      />
    </Stage>
  );
};
