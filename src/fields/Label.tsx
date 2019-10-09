import * as React from 'react';
import classnames from 'classnames';

import { SizedUiProps } from '../utils/commonProps';
import { getClassNameForSize } from '../utils/UiSize';
import { colors } from '../utils/colors';

type LabelProps = SizedUiProps & {
  /** Alignment of text. */
  align?: 'left' | 'center' | 'right';
};

/** Label element. */
export const Label: React.FC<LabelProps> = ({
  align,
  disabled,
  uiSize,
  className,
  children,
}: React.PropsWithChildren<LabelProps>) => {
  const classNameForSize = getClassNameForSize(uiSize);

  return (
    <span
      className={classnames(
        className,
        'w-full px-2 inline-flex items-center',
        classNameForSize.button.height,
        classNameForSize.text,
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
};

Label.displayName = 'Label';
