import { withKnobs } from '@storybook/addon-knobs';

import { align } from './popover/align';
import { fitToTarget } from './popover/fitToTarget';
import { margin } from './popover/margin';
import { onHover } from './popover/onHover';
import { position } from './popover/position';
import { refProps } from './popover/refProps';

export default {
  title: 'Components / Popover',
  decorators: [withKnobs],
};

export { align, fitToTarget, margin, onHover, position, refProps };
