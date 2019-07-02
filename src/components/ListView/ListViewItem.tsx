import * as React from 'react';
import classnames from 'classnames';

import { getDatasetKey } from '../../utils/getDatasetKey';
import { BasicProps } from '../../utils/commonProps';

export const itemIndexKey = getDatasetKey('listViewItemIndex');

export const isCursorTargetKey = getDatasetKey('listViewIsCursorTarget');

interface ListViewItemProps extends BasicProps {
  index: number;
  isCursorTarget: boolean;
}

export const ListViewItem: React.FC<ListViewItemProps> = ({
  index,
  isCursorTarget,
  className,
  children,
}: React.PropsWithChildren<ListViewItemProps>) => {
  const attrs = {
    [itemIndexKey.attrName]: index,
    [isCursorTargetKey.attrName]: isCursorTarget ? '' : undefined,
  };

  return (
    <div
      className={classnames(
        'focus-parent:z-negative relative select-none',
        className,
      )}
      {...attrs}
    >
      {children}
    </div>
  );
};

ListViewItem.displayName = 'ListViewItem';
