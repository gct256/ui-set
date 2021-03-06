import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { colors } from '../utils/colors';

const baseWrapperClassName = 'ui-set flex items-center';
const hWrapperClassName = `flex-row h-8 w-full ${baseWrapperClassName}`;
const vWrapperClassName = `flex-col w-8 h-full ${baseWrapperClassName}`;

const baseClassName = `flex-grow`;
const hClassName = `w-full border-b ${baseClassName}`;
const vClassName = `h-full border-r ${baseClassName}`;

type SeparatorProps = UiProps<HTMLDivElement> & {
  /** If true, render vertical separator. */
  vertical?: boolean;
};

/** Separator element. */
export const Separator: React.FC<SeparatorProps> = React.forwardRef(
  (
    { disabled, vertical, className }: SeparatorProps,
    ref: React.Ref<HTMLDivElement>,
  ) =>
    vertical ? (
      <div className={vWrapperClassName} ref={ref}>
        <div
          className={classnames(vClassName, className, {
            [colors.standard.normal.border]: !disabled,
            [colors.standard.disabled.border]: disabled,
          })}
        />
      </div>
    ) : (
      <div className={hWrapperClassName} ref={ref}>
        <div
          className={classnames(hClassName, className, {
            [colors.standard.normal.border]: !disabled,
            [colors.standard.disabled.border]: disabled,
          })}
        />
      </div>
    ),
);

Separator.displayName = 'Separator';
