import * as React from 'react';
import FocusTrap from 'focus-trap-react';

import { colors } from '../utils/colors';

import { DialogButtonBar } from './DialogButtonBar';

interface DialogProps {
  /** Dialog width. (%) */
  width?: number;
  /** If true, dialog appeared. */
  visible: boolean;
  /** Dialog title. */
  title?: string;
  /** Array of button labels. */
  buttons?: string[];
  /** Disabled state of buttons. */
  buttonsDisabled?: boolean[];
  /** Array of sub button labels. */
  subButtons?: string[];
  /** Disabled state of sub buttons. */
  subButtonsDisabled?: boolean[];
  /** Index of primary button. */
  primaryButton?: number;

  /**
   * Event handler on button clicked.
   *
   * @param index button index.
   */
  onClick?(index: number): void;

  /**
   * Event handler on sub button clicked.
   *
   * @param index sub button index.
   */
  onSubClick?(index: number): void;
}

/** Common dialog component. */
export const Dialog: React.FC<DialogProps> = ({
  width,
  visible,
  title,
  buttons,
  buttonsDisabled,
  subButtons,
  subButtonsDisabled,
  primaryButton,
  children,
  onClick,
  onSubClick,
}: React.PropsWithChildren<DialogProps>) => {
  if (!visible) return null;

  const ref = React.useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}%` : 'auto',
  };

  return (
    <>
      <div className="fixed inset-0 z-40 fade-in">
        <div className="absolute inset-0 bg-black opacity-75" />
      </div>
      <FocusTrap
        focusTrapOptions={{
          escapeDeactivates: false,
          initialFocus() {
            if (ref.current === null) return document.body;

            const fields = ref.current.querySelectorAll(
              [
                '.dialog-content input:not(:disabled)',
                '.dialog-content select:not(:disabled)',
                '.dialog-content textarea:not(:disabled)',
                '.dialog-content button:not(:disabled)',
              ].join(','),
            );

            if (fields.length > 0) return fields[0] as HTMLElement;

            const barButtons = Array.from(
              ref.current.querySelectorAll(
                '.dialog-button-bar:last-of-type button',
              ),
            );

            if (barButtons.length === 0) return document.body;

            if (
              typeof primaryButton === 'number' &&
              primaryButton >= 0 &&
              primaryButton < barButtons.length
            ) {
              barButtons.unshift(barButtons[primaryButton]);
            }

            for (let i = 0; i < barButtons.length; i += 1) {
              const button = barButtons[i] as HTMLButtonElement;

              if (!button.disabled) return button;
            }

            return barButtons[0] as HTMLElement;
          },
        }}
      >
        <div className="fixed inset-0 flex justify-center items-center z-40 fade-slide-in">
          <div
            ref={ref}
            style={style}
            className={`flex flex-col ${colors.bg.normal} ${
              colors.text.normal
            } min-w-1/4 max-w-3/4 max-h-3/4 shadow-lg`}
          >
            <div
              className={`select-none p-2 border-solid border-0 border-b ${
                colors.border.normal
              }`}
            >
              {title}
            </div>
            <div className="dialog-content flex-grow overflow-auto p-4">
              {children}
            </div>
            <div className="flex">
              <DialogButtonBar
                buttons={subButtons}
                buttonsDisabled={subButtonsDisabled}
                onClick={onSubClick}
              />
              <DialogButtonBar
                main
                buttons={buttons}
                buttonsDisabled={buttonsDisabled}
                primaryButton={primaryButton}
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </FocusTrap>
    </>
  );
};

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  title: 'Dialog',
  buttons: ['OK'],
  buttonsDisabled: [false],
  primaryButton: 0,
  onClick() {},
  onSubClick() {},
};
