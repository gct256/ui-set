import * as React from 'react';
import classnames from 'classnames';

import { UiProps } from '../utils/commonProps';
import { getHeightClassName, getTextSizeClassName } from '../utils/UiSize';
import { colors } from '../utils/colors';

type LabelProps = UiProps & {
  /** Alignment of text. */
  align?: 'left' | 'center' | 'right';
};

export const Label: React.FC<LabelProps> = ({
  align,
  disabled,
  uiSize,
  className,
  children,
}: React.PropsWithChildren<LabelProps>) => (
  <span
    className={classnames(
      className,
      'w-full px-2 inline-flex items-center',
      getHeightClassName('h-8', uiSize),
      getTextSizeClassName('text-base', uiSize),
      {
        [colors.standard.normal.text]: !disabled,
        [colors.standard.disabled.text]: disabled,
        'justify-center': align === 'center',
        'justify-end': align === 'right',
        'justify-start': align !== 'center' && align !== 'right',
      },
    )}
  >
    {children}
  </span>
);

Label.displayName = 'Label';
