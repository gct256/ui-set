import { keyName } from 'w3c-keyname';
import { Key } from 'ts-key-enum';

export function handleButtonKeyDown(
  ev: React.KeyboardEvent<HTMLElement>,
  onClick?: () => void,
) {
  switch (keyName(ev.nativeEvent)) {
    case Key.Enter:
      break;

    default:
      return;
  }

  if (onClick) onClick();

  ev.preventDefault();
  ev.stopPropagation();
}
