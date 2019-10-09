import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
  faUserCheck,
  faEdit,
  faSmileWink,
} from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../src';
import { Stage } from '../utils/Stage';
import { Table } from '../utils/Table';
import { TableHeaderCell } from '../utils/TableHeaderCell';
import { TableCell } from '../utils/TableCell';
import { TableRow } from '../utils/TableRow';

export default {
  title: 'Elements / Icon',
  decorators: [withKnobs],
};

export const variations = () => {
  const frame = boolean('show frame', false);
  const style: React.CSSProperties = {
    boxShadow: frame ? '0 0 0 2px #888' : '',
  };

  return (
    <Stage>
      <Table>
        <TableRow>
          <TableHeaderCell>default</TableHeaderCell>
          <TableCell>
            <Icon style={style} className="m-2" icon={faUserCheck} />
            <Icon style={style} className="m-2" icon={faEdit} />
            <Icon style={style} className="m-2" icon={faSmileWink} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>fixed width</TableHeaderCell>
          <TableCell>
            <Icon style={style} className="m-2" icon={faUserCheck} fixedWidth />
            <Icon style={style} className="m-2" icon={faEdit} fixedWidth />
            <Icon style={style} className="m-2" icon={faSmileWink} fixedWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>omit (icon=undefined)</TableHeaderCell>
          <TableCell>
            <Icon style={style} className="m-2" icon={undefined} />
            <Icon style={style} className="m-2" icon={undefined} />
            <Icon style={style} className="m-2" icon={undefined} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>empty</TableHeaderCell>
          <TableCell>
            <Icon style={style} className="m-2" icon={faUserCheck} />
            <Icon style={style} className="m-2" icon={faEdit} empty />
            <Icon style={style} className="m-2" icon={faSmileWink} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>fixed width, empty</TableHeaderCell>
          <TableCell>
            <Icon style={style} className="m-2" icon={faUserCheck} fixedWidth />
            <Icon
              style={style}
              className="m-2"
              icon={faEdit}
              fixedWidth
              empty
            />
            <Icon style={style} className="m-2" icon={faSmileWink} fixedWidth />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>theme color</TableHeaderCell>
          <TableCell>
            <Icon
              style={style}
              className="m-2"
              icon={faUserCheck}
              disabled={false}
            />
            <Icon style={style} className="m-2" icon={faEdit} disabled />
            <Icon
              style={style}
              className="m-2"
              icon={faSmileWink}
              disabled={false}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>UI size</TableHeaderCell>
          <TableCell>
            <Icon icon={faEdit} uiSize="xs" />
            <Icon icon={faEdit} uiSize="sm" />
            <Icon icon={faEdit} />
            <Icon icon={faEdit} uiSize="lg" />
            <Icon icon={faEdit} uiSize="xl" />
          </TableCell>
        </TableRow>
      </Table>
    </Stage>
  );
};
