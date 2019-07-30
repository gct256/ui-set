import { keyName } from 'w3c-keyname';
import { Key } from 'ts-key-enum';

export const isEnterKey = (ev: React.KeyboardEvent<HTMLElement>): boolean =>
  keyName(ev.nativeEvent) === Key.Enter;
