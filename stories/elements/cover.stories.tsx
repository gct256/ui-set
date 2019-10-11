import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ExampleStage } from '../utils/ExampleStage';
import { Cover, Icon } from '../../src';
import { ExampleLorem } from '../utils/ExampleLorem';

export default {
  title: 'Elements / Cover',
  decorators: [withKnobs],
};

export const standard = () => (
  <ExampleStage>
    <ExampleLorem />
    <ExampleLorem />
    <ExampleLorem />
    <Cover visible>
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="mt-2" />
    </Cover>
  </ExampleStage>
);

export const setClassName = () => (
  <ExampleStage>
    <ExampleLorem />
    <ExampleLorem />
    <ExampleLorem />
    <Cover visible className="opacity-75 bg-green-500">
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="mt-2" />
    </Cover>
  </ExampleStage>
);

export const setContentClassName = () => (
  <ExampleStage>
    <ExampleLorem />
    <ExampleLorem />
    <ExampleLorem />
    <Cover
      visible
      contentClassName="p-2 m-2 right-0 bottom-0 rounded flex justify-center items-center opacity-75 bg-white text-black"
    >
      <p>Cover message</p>
      <Icon icon={faSpinner} spin className="ml-2" />
    </Cover>
  </ExampleStage>
);
