import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import useState from 'storybook-addon-state';
import { faSkull, faQuestion } from '@fortawesome/free-solid-svg-icons';

import { ConfirmDialog, Button, Label } from '../../src';
import { Stage } from '../utils/Stage';
import { Lorem } from '../utils/Lorem';

export default {
  title: 'Dialogs / ConfirmDialog',
  decorators: [withKnobs],
};

export const standard = () => {
  const [result, setResult] = useState('result', '');
  const [visible, setVisible] = useState('visible', false);
  const handleOpen = useCallback(() => {
    setVisible(true);
  }, [visible]);
  const handleClose = useCallback(
    (ok: boolean) => {
      setVisible(false);
      setResult(ok ? 'OK' : 'Cancel');
    },
    [visible],
  );

  return (
    <Stage>
      <Button onClick={handleOpen}>Show confirm</Button>
      <Label>{result}</Label>
      <ConfirmDialog
        titleIcon={faQuestion}
        visible={visible}
        onClick={handleClose}
      >
        <Lorem />
      </ConfirmDialog>
    </Stage>
  );
};

export const danger = () => {
  const [result, setResult] = useState('result', '');
  const [visible, setVisible] = useState('visible', false);
  const handleOpen = useCallback(() => {
    setVisible(true);
  }, [visible]);
  const handleClose = useCallback(
    (ok: boolean) => {
      setVisible(false);
      setResult(ok ? 'OK' : 'Cancel');
    },
    [visible],
  );

  return (
    <Stage>
      <Button onClick={handleOpen}>Show confirm</Button>
      <Label>{result}</Label>
      <ConfirmDialog
        title="Danger !!!"
        titleIcon={faSkull}
        visible={visible}
        onClick={handleClose}
        danger
      >
        <Lorem />
      </ConfirmDialog>
    </Stage>
  );
};
