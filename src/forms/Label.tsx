import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

interface LabelProps extends BasicProps {
  /** Alignment of text. */
  align?: 'left' | 'center' | 'right';
}

export const Label: React.FC<LabelProps> = ({
  align,
  className,
  children,
}: React.PropsWithChildren<LabelProps>) => (
  <span
    className={classnames(
      className,
      'w-full h-8 px-2 inline-flex items-center',
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
