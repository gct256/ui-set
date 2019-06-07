import * as React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../elements/Icon';
import { UiProps } from '../utils/commonProps';
import { getCheckboxClassName } from '../utils/getClassName';
import { colors } from '../utils/colors';
import { handleButtonKeyDown } from '../utils/handleButtonKeyDown';

interface CheckboxProps extends UiProps {
  /** HTML's id attribute. */
  htmlId?: string;
  /** If true, checked. */
  checked?: boolean;

  /**
   * Event handler on checked state changed.
   *
   * @param checked checked state.
   */
  onChange?(checked: boolean): void;
}

/** Checkbox field. */
export const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  htmlId,
  checked,
  onChange,
  children,
}: React.PropsWithChildren<CheckboxProps>) => (
  <label htmlFor={htmlId} className={getCheckboxClassName('', disabled)}>
    <span
      className={`border-2 mr-1 w-4 h-4 flex justify-center items-center ${
        disabled ? colors.bg.disabled : colors.bg.normal
      } ${disabled ? colors.border.disabled : colors.border.normal}`}
    >
      <Icon
        icon={checked ? faCheck : undefined}
        transform="shrink-5"
        className={`${disabled ? colors.text.disabled : colors.text.normal}`}
      />
    </span>
    <input
      id={htmlId}
      className="appearance-none"
      type="checkbox"
      disabled={disabled}
      checked={!!checked}
      onChange={({ currentTarget }) =>
        onChange && onChange(currentTarget.checked)
      }
      onKeyDown={(ev) =>
        onChange && handleButtonKeyDown(ev, () => onChange(!checked))
      }
    />
    {children}
  </label>
);

Checkbox.displayName = 'Checkbox';
