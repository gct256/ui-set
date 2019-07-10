import * as React from 'react';
import classnames from 'classnames';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../elements/Icon';
import { FieldProps } from '../utils/commonProps';
import { SelectItem, mapSelectItems } from '../utils/SelectItem';
import {
  getFieldWrapClassName,
  getFieldClassName,
} from '../utils/getClassName';
import { colors } from '../utils/colors';

interface SelectProps extends FieldProps<string> {
  /** If true, field has 1px border. */
  bordered?: boolean;
  /** Array of choices. */
  items?: SelectItem[];
  /** If true, add an empty item to the first choice. */
  withEmptyItem?: boolean;
}

function renderItems(items?: SelectItem[]) {
  return mapSelectItems(items).map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));
}

/** Select list field. */
export const Select: React.FC<SelectProps> = ({
  value,
  bordered,
  uiSize,

  items,
  withEmptyItem,
  className,
  disabled,
  onChange,
}: SelectProps) => {
  const handleOnChange = React.useCallback(
    ({ currentTarget }) => onChange && onChange(currentTarget.value),
    [onChange],
  );

  return (
    <span
      className={getFieldWrapClassName(
        className,
        uiSize,
        bordered,
        disabled,
        true,
        'relative',
      )}
    >
      <select
        value={value}
        disabled={disabled}
        className={getFieldClassName(
          bordered,
          uiSize,
          true,
          true,
          'pr-8 rounded-none appearance-none leading-none p-0',
        )}
        onChange={handleOnChange}
      >
        {withEmptyItem ? <option value="" /> : null}
        {renderItems(items)}
      </select>
      <Icon
        icon={faAngleDown}
        size="sm"
        fixedWidth
        className={classnames(
          'absolute my-auto pr-1 inset-y-0 right-0 mr-px focus-after:mr-0 pointer-events-none',
          {
            [colors.standard.normal.text]: !disabled,
            [colors.standard.disabled.text]: disabled,
          },
        )}
      />
    </span>
  );
};

Select.displayName = 'Select';

Select.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  bordered: true,
};
