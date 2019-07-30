import { keyName } from 'w3c-keyname';
import { Key } from 'ts-key-enum';

export const isEnterKey = (
  ev: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
): boolean =>
  keyName(ev instanceof KeyboardEvent ? ev : ev.nativeEvent) === Key.Enter;
