import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import useState from 'storybook-addon-state';

import { AlertDialog, Button } from '../../src';
import { Stage } from '../utils/Stage';
import { Lorem } from '../utils/Lorem';

export default {
  title: 'Dialogs / AlertDialog',
  decorators: [withKnobs],
};

export const standard = () => {
  const [visible, setVisible] = useState('visible', false);
  const handleOpen = useCallback(() => {
    setVisible(true);
  }, [visible]);
  const handleClose = useCallback(() => {
    setVisible(false);
  }, [visible]);

  return (
    <Stage>
      <Button onClick={handleOpen}>Show alert</Button>
      <AlertDialog visible={visible} onClick={handleClose}>
        <Lorem />
      </AlertDialog>
    </Stage>
  );
};
