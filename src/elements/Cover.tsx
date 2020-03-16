import * as React from 'react';
import classnames from 'classnames';
import FocusTrap from 'focus-trap-react';

import { BasicProps } from '../utils/commonProps';

type CoverProps = BasicProps<HTMLDivElement> & {
  /** ClassName for content. */
  contentClassName?: string;
  /** If true, cover appeared. */
  visible?: boolean;
  /** If true, trapping focus. */
  modal?: boolean;
};

const CoverBody: React.FC<CoverProps> = React.forwardRef(
  (
    {
      className,
      contentClassName,
      children,
    }: React.PropsWithChildren<CoverProps>,
    ref: React.Ref<HTMLDivElement>,
  ) => (
    <>
      <button type="button" className="absolute w-0 h-0 overflow-hidden">
        cover
      </button>
      <div
        className={classnames('fixed inset-0 z-99999 select-none', className)}
        ref={ref}
      />
      <div
        className={classnames('fixed z-99999 select-none', contentClassName)}
      >
        {children}
      </div>
    </>
  ),
);

export const Cover: React.FC<CoverProps> = React.forwardRef(
  (
    {
      className,
      contentClassName,
      visible,
      modal,
      children,
    }: React.PropsWithChildren<CoverProps>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    if (!visible) return null;

    return modal ? (
      <FocusTrap
        focusTrapOptions={{
          escapeDeactivates: false,
        }}
      >
        <div>
          <CoverBody
            ref={ref}
            className={className}
            contentClassName={contentClassName}
          >
            {children}
          </CoverBody>
        </div>
      </FocusTrap>
    ) : (
      <CoverBody
        ref={ref}
        className={className}
        contentClassName={contentClassName}
      >
        {children}
      </CoverBody>
    );
  },
);

Cover.displayName = 'Cover';

Cover.defaultProps = {
  className: 'bg-black opacity-50',
  contentClassName:
    'text-white inset-0 flex flex-col justify-center items-center',
  visible: false,
};
