import * as React from 'react';
import classnames from 'classnames';
import { keyName } from 'w3c-keyname';
import { Key } from 'ts-key-enum';

import { setScrollPosition } from '../../utils/setScrollPosition';
import { colors } from '../../utils/colors';

import { ListViewItem, itemIndexKey, isCursorTargetKey } from './ListViewItem';

// find item index by dataset
function getItemIndex(root: HTMLElement, target: HTMLElement): number {
  if (root === target) return -1;

  const itemIndex = target.dataset[itemIndexKey.key];

  if (itemIndex !== undefined) {
    return Number.parseInt(itemIndex, 10);
  }

  if (target.parentNode instanceof HTMLElement) {
    return getItemIndex(root, target.parentNode);
  }

  return -1;
}

interface ListViewProps {
  /** If true, component disabled. */
  disabled?: boolean;
  /** Array of list items. */
  items: React.ReactElement[];
  /** Cursor position. */
  cursor: number;
  /** If true, component has 1px border. */
  bordered?: boolean;
  /** classNames. */
  classNames?: {
    /** className for list view. */
    default?: string;
    /** className for list view with disabled status. */
    disabled?: string;
    /** list view's item classNames. */
    item?: {
      /** className for list view's item. */
      default?: string;
      /** className for list view's item with cursor. */
      withCursor?: string;
      /** className for list view's item without cursor. */
      withoutCursor?: string;
      /** className for list view's item with disabled status and cursor. */
      disabled?: string;
    };
  };

  /**
   * Event callback on key down.
   *
   * @param ev Keyboard event.
   */
  onKeyDown?: (ev: React.KeyboardEvent<HTMLDivElement>) => void;

  /**
   * Event callback on cursor position updated.
   *
   * @param cursor New cursor position.
   */
  onUpdateCursor?: (cursor: number) => void;
}

/** Keyboard navigatable list view component. */
export const ListView: React.FC<ListViewProps> = ({
  items,
  cursor,
  bordered,
  classNames,
  onKeyDown,
  onUpdateCursor,
  disabled,
}: ListViewProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const itemDefaultClass =
    classNames && classNames.item ? classNames.item.default : '';
  const itemWithCursorClass =
    classNames && classNames.item ? classNames.item.withCursor : '';
  const itemWithoutCursorClass =
    classNames && classNames.item ? classNames.item.withoutCursor : '';
  const itemDisabledClass =
    classNames && classNames.item ? classNames.item.disabled : '';

  // build list items.
  const children = items.map((item, i) => (
    <ListViewItem
      key={item.key || undefined}
      index={i}
      isCursorTarget={i === cursor}
      className={classnames(
        itemDefaultClass,
        disabled && cursor === i ? itemDisabledClass : '',
        !disabled && cursor === i
          ? itemWithCursorClass
          : itemWithoutCursorClass,
      )}
    >
      {item}
    </ListViewItem>
  ));

  function updateCursor(newCursor: number) {
    if (!onUpdateCursor) return;

    const adjusted = Math.max(0, Math.min(items.length - 1, newCursor));

    if (cursor === adjusted) return;

    onUpdateCursor(adjusted);
  }

  React.useEffect(() => {
    const { current } = ref;

    if (current === null) return;

    const target = current.querySelector(`[${isCursorTargetKey.attrName}]`);

    if (target instanceof HTMLElement) {
      setScrollPosition(current, target);
    }
  });

  function handleClick(ev: React.MouseEvent<HTMLDivElement>) {
    if (ref.current === null) return;

    if (!(ev.target instanceof HTMLElement)) return;

    const index = getItemIndex(ref.current, ev.target);

    if (index >= 0) updateCursor(index);
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLDivElement>) {
    if (!onUpdateCursor) return;

    switch (keyName(ev.nativeEvent)) {
      case Key.ArrowUp:
      case Key.ArrowLeft:
        updateCursor(cursor < 0 ? 0 : cursor - 1);
        break;
      case Key.ArrowDown:
      case Key.ArrowRight:
        updateCursor(cursor < 0 ? 0 : cursor + 1);
        break;

      default:
        if (onKeyDown) onKeyDown(ev);

        return;
    }

    ev.preventDefault();
    ev.stopPropagation();
  }

  const className = classnames(
    classNames ? classNames.default : '',
    'w-full h-full overflow-x-hidden overflow-y-auto p-0',
    'focus:outline-none',
    {
      [colors.bg.normal]: !disabled,
      [colors.bg.disabled]: disabled,
      [colors.text.normal]: !disabled,
      [colors.text.disabled]: disabled,
      border: bordered,
      [colors.border.normal]: bordered && !disabled,
      [colors.border.disabled]: bordered && disabled,
    },
    classNames && disabled ? classNames.disabled : '',
  );

  if (disabled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full focus:outline-none"
      role="menu"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div ref={ref} className={className}>
        {children}
      </div>
      <div className="absolute inset-0 pointer-events-none focus-parent:focus-animation-border" />
    </div>
  );
};

ListView.displayName = 'ListView';
