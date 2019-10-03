import * as React from 'react';

import { BasicProps } from '../../utils/commonProps';

import { MenuData, STYLE_FOR_MENU } from './MenuData';
import { MenuBody } from './MenuBody';

type MenuProps = BasicProps & {
  /** If true, menu appeared. */
  visible?: boolean;

  /** Data of menu. */
  data: MenuData;

  /**
   * Event callback on menu select.
   *
   * @param id Id of menu item.
   */
  onSelect?(id: string): void;
};

/** Menu component. */
export const Menu: React.FC<MenuProps> = ({
  className,
  visible,
  data,
  onSelect = () => {},
}: MenuProps) => {
  const [openPath, setOpenPath] = React.useState([] as string[]);

  if (!visible) return null;

  return (
    <div style={STYLE_FOR_MENU} className={className}>
      <MenuBody
        data={data}
        depth={0}
        openPath={openPath}
        onSelect={onSelect}
        onSetOpenPath={setOpenPath}
      />
    </div>
  );
};

Menu.displayName = 'Menu';
