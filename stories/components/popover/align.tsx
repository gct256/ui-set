import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';

import { ExampleStage } from '../../utils/ExampleStage';
import { Popover } from '../../../src';

type AlignTestProps = Pick<
  React.ComponentProps<typeof Popover>,
  'xAlign' | 'yAlign'
>;

const AlignTest: React.FC<AlignTestProps> = ({
  xAlign,
  yAlign,
}: AlignTestProps) => {
  const [target, setTarget] = React.useState<HTMLDivElement | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setTarget(ref.current);
  });

  return (
    <>
      <div
        ref={ref}
        className="absolute w-1/2 h-64 p-2 border-8 border-blue-500 inset-0 m-auto"
      />
      <Popover
        target={target}
        visible
        position="left"
        yAlign={yAlign}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="right"
        yAlign={yAlign}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="top"
        xAlign={xAlign}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
      <Popover
        target={target}
        visible
        position="bottom"
        xAlign={xAlign}
        className="border-2 border-black p-1"
      >
        Popover
      </Popover>
    </>
  );
};

export const align = () => (
  <ExampleStage>
    <AlignTest
      xAlign={optionsKnob(
        'x align',
        {
          left: 'left',
          center: 'center',
          right: 'right',
        },
        'left',
        {
          display: 'inline-radio',
        },
      )}
      yAlign={optionsKnob(
        'y align',
        {
          top: 'top',
          center: 'center',
          bottom: 'bottom',
        },
        'top',
        {
          display: 'inline-radio',
        },
      )}
    />
  </ExampleStage>
);
