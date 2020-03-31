import * as React from 'react';

import { ExampleStage } from '../../utils/ExampleStage';
import { Popover } from '../../../src';

const HoverTest: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [target, setTarget] = React.useState<HTMLDivElement | null>(null);

  const handleEnter = React.useCallback(
    (ev: React.MouseEvent<HTMLDivElement>) => {
      setTarget(ev.currentTarget);
      setVisible(true);
    },
    [],
  );

  const handleLeave = React.useCallback(() => {
    setVisible(false);
    setTarget(null);
  }, []);

  return (
    <>
      <div
        className="absolute w-1/2 h-64 p-2 border-8 border-blue-500 inset-0 m-auto"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
      <Popover
        target={target}
        visible={visible}
        className="border-2 border-black bg-white p-1"
      >
        Popover
      </Popover>
    </>
  );
};

export const onHover = () => {
  return (
    <ExampleStage>
      <HoverTest />
    </ExampleStage>
  );
};
