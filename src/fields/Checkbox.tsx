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
}: React.PropsWithChildren<CheckboxProps>) => {
  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.checked),
    [onChange],
  );
  const handleOnKeyDown = React.useCallback(
    (ev) => onChange && handleButtonKeyDown(ev, () => onChange(!checked)),
    [onChange],
  );

  return (
    <label htmlFor={htmlId} className={getCheckboxClassName('', disabled)}>
      <span
        className={`border-2 mr-1 w-4 h-4 flex justify-center items-center ${
          disabled ? colors.standard.disabled.bg : colors.standard.normal.bg
        } ${
          disabled
            ? colors.standard.disabled.border
            : colors.standard.normal.border
        }`}
      >
        <Icon
          icon={checked ? faCheck : undefined}
          transform="shrink-5"
          className={`${
            disabled
              ? colors.standard.disabled.text
              : colors.standard.normal.text
          }`}
        />
      </span>
      <input
        id={htmlId}
        className="appearance-none"
        type="checkbox"
        disabled={disabled}
        checked={!!checked}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      {children}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
