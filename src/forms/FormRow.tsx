import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

interface FormRowProps extends BasicProps {}

/** Form's row element. */
export const FormRow: React.FC<FormRowProps> = ({
  className,
  children,
}: React.PropsWithChildren<FormRowProps>) => (
  <div className={classnames(className, 'my-1 flex justify-start items-start')}>
    {children}
  </div>
);

FormRow.displayName = 'FormRow';
