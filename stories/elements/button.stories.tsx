import * as React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src';
import { Table } from '../utils/Table';
import { TableRow } from '../utils/TableRow';
import { TableCell } from '../utils/TableCell';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { Stage } from '../utils/Stage';

export default {
  title: 'Elements / Button',
  decorators: [withKnobs],
};

export const events = () => {
  return (
    <Stage>
      <Button onClick={action('onClick')}>Button</Button>
    </Stage>
  );
};

export const variations = () => {
  const disabled = boolean('disabled', false);

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
          <TableHeaderCell>Text only</TableHeaderCell>
          <TableCell>
            <Button uiSize="xs" disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button uiSize="sm" disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button disabled={disabled}>Button</Button>
          </TableCell>
          <TableCell>
            <Button uiSize="lg" disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button uiSize="xl" disabled={disabled}>
              Button
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Text only, primary style</TableHeaderCell>
          <TableCell>
            <Button uiSize="xs" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button uiSize="sm" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button uiSize="lg" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button uiSize="xl" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Icon only</TableHeaderCell>
          <TableCell>
            <Button icon={faUser} uiSize="xs" disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="sm" disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="lg" disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="xl" disabled={disabled} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Icon only, primary style</TableHeaderCell>
          <TableCell>
            <Button icon={faUser} uiSize="xs" primary disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="sm" primary disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} primary disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="lg" primary disabled={disabled} />
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="xl" primary disabled={disabled} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Icon and text</TableHeaderCell>
          <TableCell>
            <Button icon={faUser} uiSize="xs" disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="sm" disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="lg" disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="xl" disabled={disabled}>
              Button
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Icon and text, primary style</TableHeaderCell>
          <TableCell>
            <Button icon={faUser} uiSize="xs" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="sm" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="lg" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
          <TableCell>
            <Button icon={faUser} uiSize="xl" primary disabled={disabled}>
              Button
            </Button>
          </TableCell>
        </TableRow>
      </Table>
    </Stage>
  );
};
