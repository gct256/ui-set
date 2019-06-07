import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';

interface BorderedViewProps extends UiProps {}

/** Bordered view element. */
export const BorderedView: React.FC<BorderedViewProps> = ({
  className,
  disabled,
  children,
}: React.PropsWithChildren<BorderedViewProps>) => (
  <div
    className={classnames(className, 'border', {
      [colors.bg.normal]: !disabled,
      [colors.border.normal]: !disabled,
      [colors.bg.disabled]: disabled,
      [colors.border.disabled]: disabled,
    })}
  >
    {children}
  </div>
);

BorderedView.displayName = 'BorderedView';
