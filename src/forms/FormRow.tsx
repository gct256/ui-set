import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

interface FormRowProps extends BasicProps {
  visible?: boolean;
}

/** Form's row element. */
export const FormRow: React.FC<FormRowProps> = ({
  className,
  visible,
  children,
}: React.PropsWithChildren<FormRowProps>) =>
  visible ? (
    <div
      className={classnames(className, 'my-1 flex justify-start items-start')}
    >
      {children}
    </div>
  ) : null;

FormRow.displayName = 'FormRow';

FormRow.defaultProps = {
  visible: true,
};
