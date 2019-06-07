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

interface SeparatorProps extends UiProps {
  /** If true, render vertical separator. */
  vertical?: boolean;
}

/** Separator element. */
export const Separator: React.FC<SeparatorProps> = ({
  disabled,
  vertical,
  className,
}: SeparatorProps) =>
  vertical ? (
    <div className={vWrapperClassName}>
      <div
        className={classnames(vClassName, className, {
          [colors.border.normal]: !disabled,
          [colors.border.disabled]: disabled,
        })}
      />
    </div>
  ) : (
    <div className={hWrapperClassName}>
      <div
        className={classnames(hClassName, className, {
          [colors.border.normal]: !disabled,
          [colors.border.disabled]: disabled,
        })}
      />
    </div>
  );

Separator.displayName = 'Separator';
