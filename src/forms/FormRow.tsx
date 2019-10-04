import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

type FormRowProps = BasicProps & {
  visible?: boolean;
  valign?: 'top' | 'bottom' | 'middle';
};

/** Form's row element. */
export const FormRow: React.FC<FormRowProps> = ({
  className,
  visible,
  valign,
  children,
}: React.PropsWithChildren<FormRowProps>) =>
  visible ? (
    <div
      className={classnames(className, 'p-1 flex justify-start', {
        'items-start': valign !== 'middle' && valign !== 'bottom',
        'items-center': valign === 'middle',
        'items-end': valign === 'bottom',
      })}
    >
      {children}
    </div>
  ) : null;

FormRow.displayName = 'FormRow';

FormRow.defaultProps = {
  visible: true,
};
