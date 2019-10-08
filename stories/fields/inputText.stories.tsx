import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import useState from 'storybook-addon-state';
import { action } from '@storybook/addon-actions';

import { InputText } from '../../src';
import { Stage } from '../utils/Stage';
import { TableRow } from '../utils/TableRow';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { Table } from '../utils/Table';

export default {
  title: 'Fields / InputText',
  decorators: [withKnobs],
};

export const variations = () => {
  const readOnly = boolean('read only', false);
  const disabled = boolean('disabled', false);
  const [value, setValue] = useState('value', '');

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
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xs"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="sm"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="lg"
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
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
          <TableHeaderCell>password</TableHeaderCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xs"
              password
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="sm"
              password
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              password
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="lg"
              password
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              uiSize="xl"
              password
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>no border</TableHeaderCell>
          <TableCell>
            <InputText
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
            <InputText
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
            <InputText
              value={value}
              onChange={setValue}
              placeholder="Placeholder"
              bordered={false}
              disabled={disabled}
              readOnly={readOnly}
            />
          </TableCell>
          <TableCell>
            <InputText
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
            <InputText
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
      </Table>
    </Stage>
  );
};

export const event = () => {
  return (
    <Stage>
      <InputText
        onChange={action('onChange')}
        onEnterKey={action('onEnterKey')}
      />
    </Stage>
  );
};
