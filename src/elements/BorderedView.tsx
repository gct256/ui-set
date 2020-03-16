import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';

type BorderedViewProps = UiProps<HTMLDivElement>;

/** Bordered view element. */
export const BorderedView: React.FC<BorderedViewProps> = React.forwardRef(
  (
    {
      className,
      disabled,
      children,
    }: React.PropsWithChildren<BorderedViewProps>,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <div
      className={classnames(className, 'border', {
        [colors.standard.normal.bg]: !disabled,
        [colors.standard.normal.border]: !disabled,
        [colors.standard.disabled.bg]: disabled,
        [colors.standard.disabled.border]: disabled,
      })}
      ref={ref}
    >
      {children}
    </div>
  ),
);

BorderedView.displayName = 'BorderedView';
