import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Stage } from '../utils/Stage';
import { ExampleBlock } from '../utils/ExampleBlock';
import { Row, Column } from '../../src';

export default {
  title: 'Layouts',
  decorators: [withKnobs],
};

export const standard = () => (
  <Stage>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>01/02</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>02/02</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>01/03</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>02/03</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>03/03</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>01/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>02/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>03/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>04/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>05/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>06/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>07/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>08/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>09/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>10/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>11/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>12/12</ExampleBlock>
      </Column>
    </Row>
  </Stage>
);

export const width = () => (
  <Stage>
    <Row className="w-full mb-2">
      <Column width={5 / 12}>
        <ExampleBlock>5/12</ExampleBlock>
      </Column>
      <Column width={7 / 12}>
        <ExampleBlock>7/12</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column width={5 / 12}>
        <ExampleBlock>5/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
      <Column width={7 / 12}>
        <ExampleBlock>7/12</ExampleBlock>
      </Column>
    </Row>

    <Row className="w-full mb-2">
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
    </Row>
    <Row className="w-full mb-2">
      <Column width={4 / 12}>
        <ExampleBlock>4/12</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>(not set width)</ExampleBlock>
      </Column>
    </Row>
  </Stage>
);

export const packedColumn = () => (
  <Stage>
    <Row className="mb-2">
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
      <Column>
        <ExampleBlock>not packed</ExampleBlock>
      </Column>
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
    </Row>
    <Row className="mb-2">
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
      <Column packed>
        <ExampleBlock>packed</ExampleBlock>
      </Column>
    </Row>
  </Stage>
);

export const nested = () => (
  <Stage>
    <Row>
      <Column>
        <Row className="mb-2">
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
        </Row>
        <Row>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
        </Row>
      </Column>
      <Column>
        <Row className="h-full">
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
          <Column>
            <ExampleBlock />
          </Column>
        </Row>
      </Column>
      <Column>
        <ExampleBlock />
      </Column>
    </Row>
  </Stage>
);
