import * as React from 'react';
import classnames from 'classnames';

import { BasicProps } from '../utils/commonProps';

interface CoverProps extends BasicProps {
  contentClassName?: string;
  visible?: boolean;
}

export const Cover: React.FC<CoverProps> = ({
  className,
  contentClassName,
  visible,
  children,
}: React.PropsWithChildren<CoverProps>) =>
  visible ? (
    <>
      <div className={classnames('fixed inset-0 z-99999', className)} />
      <div
        className={classnames(
          'fixed inset-0 z-99999 flex flex-col justify-center items-center',
          contentClassName,
        )}
      >
        {children}
      </div>
    </>
  ) : null;

Cover.displayName = 'Cover';

Cover.defaultProps = {
  className: 'bg-black opacity-50',
  contentClassName: 'text-white',
  visible: false,
};
