import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { useCallback } from '@storybook/addons';
import useState from 'storybook-addon-state';
import { faSkull, faQuestion } from '@fortawesome/free-solid-svg-icons';

import { ConfirmDialog, Button, Label } from '../../src';
import { ExampleStage } from '../utils/ExampleStage';
import { ExampleLorem } from '../utils/ExampleLorem';

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
    <ExampleStage>
      <Button onClick={handleOpen}>Show confirm</Button>
      <Label>{result}</Label>
      <ConfirmDialog
        titleIcon={faQuestion}
        visible={visible}
        onClick={handleClose}
      >
        <ExampleLorem />
      </ConfirmDialog>
    </ExampleStage>
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
    <ExampleStage>
      <Button onClick={handleOpen}>Show confirm</Button>
      <Label>{result}</Label>
      <ConfirmDialog
        title="Danger !!!"
        titleIcon={faSkull}
        visible={visible}
        onClick={handleClose}
        danger
      >
        <ExampleLorem />
      </ConfirmDialog>
    </ExampleStage>
  );
};
