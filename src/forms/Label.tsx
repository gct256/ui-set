import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';
import {
  UiSize,
  getHeightClassName,
  getTextSizeClassName,
} from '../utils/UiSize';

interface LabelProps extends BasicProps {
  /** Alignment of text. */
  align?: 'left' | 'center' | 'right';
  /** UI Element size. */
  uiSize?: UiSize;
}

export const Label: React.FC<LabelProps> = ({
  align,
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
