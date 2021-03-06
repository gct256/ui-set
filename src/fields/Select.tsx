import * as React from 'react';
import classnames from 'classnames';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../elements/Icon';
import { FieldProps, SizedUiProps } from '../utils/commonProps';
import { SelectItem, mapSelectItems } from '../utils/SelectItem';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';
import { colors } from '../utils/colors';
import {
  startAnimation,
  animations,
  removeAllAnimations,
} from '../utils/animations';

const EMPTY = '';

type SelectProps = SizedUiProps<HTMLSelectElement> &
  FieldProps<string> & {
    /** If true, field has 1px border. */
    bordered?: boolean;
    /** Array of choices. */
    items?: SelectItem[];
    /** If true, add an empty item to the first choice. */
    withEmptyItem?: boolean;
  };

const renderItems = (items?: SelectItem[]): React.ReactNode =>
  mapSelectItems(items).map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

/** Select list field. */
export const Select: React.FC<SelectProps> = React.forwardRef(
  (
    {
      value,
      bordered,
      uiSize,

      items,
      withEmptyItem,
      className,
      disabled,

      onChange,
      onFocus,
      onBlur,
    }: SelectProps,
    ref: React.Ref<HTMLSelectElement>,
  ) => {
    const handleOnFocus = React.useCallback(
      (ev: React.FocusEvent<HTMLSelectElement>) => {
        startAnimation(
          ev.currentTarget,
          bordered
            ? animations.focusAnimation
            : animations.focusAnimationBorder,
        );

        if (onFocus) onFocus();
      },
      [bordered, onFocus],
    );

    const handleOnBlur = React.useCallback(
      (ev: React.FocusEvent<HTMLSelectElement>) => {
        removeAllAnimations(ev.currentTarget);

        if (onBlur) onBlur();
      },
      [onBlur],
    );

    const handleOnChange = React.useCallback(
      ({ currentTarget }) => onChange && onChange(currentTarget.value),
      [onChange],
    );

    return (
      <span
        className={getFieldWrapClassName({
          userClassName: className,
          uiSize,
          bordered,
          disabled,
          fixedHeight: true,
          otherClassName: 'relative',
        })}
      >
        <select
          value={value}
          disabled={disabled}
          className={getFieldClassName({
            uiSize,
            fixedHeight: true,
            noYPadding: true,
            otherClassName:
              'pr-8 rounded-none appearance-none leading-none p-0',
          })}
          ref={ref}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        >
          {withEmptyItem ? <option value="">{EMPTY}</option> : null}
          {renderItems(items)}
        </select>
        <Icon
          icon={faAngleDown}
          size="sm"
          fixedWidth
          className={classnames(
            'absolute my-auto pr-1 inset-y-0 right-0 focus-after:mr-0 pointer-events-none',
            {
              'mr-px': bordered,
              [colors.inputArea.disabled.text]: disabled,
            },
          )}
        />
      </span>
    );
  },
);

Select.displayName = 'Select';

Select.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  bordered: true,
};
