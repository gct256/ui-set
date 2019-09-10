import { isEnterKey } from './isEnterKey';

export const handleButtonKeyDown = (
  ev: React.KeyboardEvent<HTMLElement>,
  onClick?: () => void,
): void => {
  if (!isEnterKey(ev)) return;

  if (onClick) onClick();

  ev.preventDefault();
  ev.stopPropagation();
};
