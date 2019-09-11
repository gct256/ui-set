import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';

type BorderedViewProps = UiProps;

/** Bordered view element. */
export const BorderedView: React.FC<BorderedViewProps> = ({
  className,
  disabled,
  children,
}: React.PropsWithChildren<BorderedViewProps>) => (
  <div
    className={classnames(className, 'border', {
      [colors.standard.normal.bg]: !disabled,
      [colors.standard.normal.border]: !disabled,
      [colors.standard.disabled.bg]: disabled,
      [colors.standard.disabled.border]: disabled,
    })}
  >
    {children}
  </div>
);

BorderedView.displayName = 'BorderedView';
