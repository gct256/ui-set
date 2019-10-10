import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  faUserCheck,
  faEdit,
  faSmileWink,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';

import { Icon, Label } from '../../src';
import { Stage } from '../utils/Stage';

export default {
  title: 'Elements / Icon',
  decorators: [withKnobs],
};

export const standard = () => (
  <Stage>
    <div className="flex">
      <Icon className="m-2" icon={faUserCheck} />
      <Icon className="m-2" icon={faUserCheck} />
      <Icon className="m-2" icon={faUserCheck} />
    </div>
    <div className="flex">
      <Icon className="m-2" icon={faEdit} />
      <Icon className="m-2" icon={faEdit} />
      <Icon className="m-2" icon={faEdit} />
    </div>
    <div className="flex">
      <Icon className="m-2" icon={faSmileWink} />
      <Icon className="m-2" icon={faSmileWink} />
      <Icon className="m-2" icon={faSmileWink} />
    </div>
  </Stage>
);

export const fixedWidth = () => (
  <Stage>
    <div className="flex">
      <Icon className="m-2" fixedWidth icon={faUserCheck} />
      <Icon className="m-2" fixedWidth icon={faUserCheck} />
      <Icon className="m-2" fixedWidth icon={faUserCheck} />
    </div>
    <div className="flex">
      <Icon className="m-2" fixedWidth icon={faEdit} />
      <Icon className="m-2" fixedWidth icon={faEdit} />
      <Icon className="m-2" fixedWidth icon={faEdit} />
    </div>
    <div className="flex">
      <Icon className="m-2" fixedWidth icon={faSmileWink} />
      <Icon className="m-2" fixedWidth icon={faSmileWink} />
      <Icon className="m-2" fixedWidth icon={faSmileWink} />
    </div>
  </Stage>
);

export const colorByState = () => (
  <Stage>
    <div className="flex">
      <Icon className="m-2" disabled={false} icon={faUserCheck} />
      <Icon className="m-2" disabled={false} icon={faEdit} />
      <Icon className="m-2" disabled={false} icon={faSmileWink} />
      <Label>disabled=false</Label>
    </div>
    <div className="flex">
      <Icon className="m-2" disabled icon={faUserCheck} />
      <Icon className="m-2" disabled icon={faEdit} />
      <Icon className="m-2" disabled icon={faSmileWink} />
      <Label>disabled=true</Label>
    </div>
  </Stage>
);

export const noRenderWithUndefined = () => (
  <Stage>
    <div className="flex">
      <Icon className="m-2" icon={faUserCheck} />
      <Icon className="m-2" />
      <Icon className="m-2" icon={faUserCheck} />
    </div>
    <div className="flex">
      <Icon className="m-2" icon={faEdit} />
      <Icon className="m-2" />
      <Icon className="m-2" icon={faEdit} />
    </div>
    <div className="flex">
      <Icon className="m-2" icon={faSmileWink} />
      <Icon className="m-2" />
      <Icon className="m-2" icon={faSmileWink} />
    </div>
  </Stage>
);

export const replaceToEmptyWithUndefined = () => (
  <Stage>
    <div className="flex">
      <Icon className="m-2" fixedWidth empty icon={faUserCheck} />
      <Icon className="m-2" fixedWidth empty />
      <Icon className="m-2" fixedWidth empty icon={faUserCheck} />
    </div>
    <div className="flex">
      <Icon className="m-2" fixedWidth empty icon={faEdit} />
      <Icon className="m-2" fixedWidth empty />
      <Icon className="m-2" fixedWidth empty icon={faEdit} />
    </div>
    <div className="flex">
      <Icon className="m-2" fixedWidth empty icon={faSmileWink} />
      <Icon className="m-2" fixedWidth empty />
      <Icon className="m-2" fixedWidth empty icon={faSmileWink} />
    </div>
  </Stage>
);

export const sizes = () => (
  <Stage>
    <div className="flex">
      <Icon className="m-2" uiSize="xs" icon={faUserCheck} />
      <Icon className="m-2" uiSize="sm" icon={faUserCheck} />
      <Icon className="m-2" icon={faUserCheck} />
      <Icon className="m-2" uiSize="lg" icon={faUserCheck} />
      <Icon className="m-2" uiSize="xl" icon={faUserCheck} />
    </div>
    <div className="flex">
      <Icon className="m-2" uiSize="xs" icon={faEdit} />
      <Icon className="m-2" uiSize="sm" icon={faEdit} />
      <Icon className="m-2" icon={faEdit} />
      <Icon className="m-2" uiSize="lg" icon={faEdit} />
      <Icon className="m-2" uiSize="xl" icon={faEdit} />
    </div>
    <div className="flex">
      <Icon className="m-2" uiSize="xs" icon={faSmileWink} />
      <Icon className="m-2" uiSize="sm" icon={faSmileWink} />
      <Icon className="m-2" icon={faSmileWink} />
      <Icon className="m-2" uiSize="lg" icon={faSmileWink} />
      <Icon className="m-2" uiSize="xl" icon={faSmileWink} />
    </div>
  </Stage>
);

export const useFontAwesomeProps = () => (
  <Stage>
    <Icon
      className="m-2"
      icon={faUserCheck}
      mask={faSquare}
      transform="shrink-6"
    />
    <Icon className="m-2" icon={faUserCheck} spin />
    <Icon className="m-2" icon={faUserCheck} pulse />
    <Icon className="m-2" icon={faUserCheck} border />
    <Icon className="m-2 bg-black" icon={faUserCheck} inverse />
    <Icon className="m-2" icon={faUserCheck} flip="both" />
    <Icon className="m-2" icon={faUserCheck} size="10x" />
    <Icon className="m-2" icon={faUserCheck} rotation={90} />
    <Icon className="m-2" icon={faUserCheck} transform="grow-6" />
  </Stage>
);
