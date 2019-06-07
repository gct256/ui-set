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
  items,
  withEmptyItem,
  className,
  disabled,
  onChange,
}: SelectProps) => (
  <span
    className={getFieldWrapClassName(
      className,
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
        true,
        'pr-8 rounded-none appearance-none leading-none',
      )}
      onChange={({ currentTarget }) => {
        console.debug('zzz', onChange);
        // eslint-disable-next-line no-unused-expressions
        onChange && onChange(currentTarget.value);
      }}
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
          [colors.text.normal]: !disabled,
          [colors.text.disabled]: disabled,
        },
      )}
    />
  </span>
);

Select.displayName = 'Select';

Select.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  bordered: true,
};
