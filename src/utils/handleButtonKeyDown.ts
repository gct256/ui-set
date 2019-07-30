import { isEnterKey } from './isEnterKey';

export function handleButtonKeyDown(
  ev: React.KeyboardEvent<HTMLElement>,
  onClick?: () => void,
) {
  if (!isEnterKey(ev)) return;

  if (onClick) onClick();

  ev.preventDefault();
  ev.stopPropagation();
}
