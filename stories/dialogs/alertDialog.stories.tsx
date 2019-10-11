import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import useState from 'storybook-addon-state';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { AlertDialog, Button } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';
import { ExampleLorem } from '../utils/ExampleLorem';

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
    <ExampleStage>
      <Button onClick={handleOpen}>Show alert</Button>
      <AlertDialog
        titleIcon={faExclamationTriangle}
        visible={visible}
        onClick={handleClose}
      >
        <ExampleLorem />
      </AlertDialog>
    </ExampleStage>
  );
};
