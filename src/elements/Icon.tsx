import * as React from 'react';
import classnames from 'classnames';
import {
  Props as FontAwesomeIconProps,
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { colors } from '../utils/colors';
import { getClassNameForSize } from '../utils/UiSize';

import { UiSize } from '..';

const emptyIcon: IconDefinition = {
  prefix: 'fas',
  iconName: 'at',
  icon: [16, 16, [], '', ''],
};

type IconProps = Partial<FontAwesomeIconProps> & {
  /** If true, set disabled style. */
  disabled?: boolean;
  /** If true, use empty icon. Expected to use together with fixedWidth. */
  empty?: boolean;
  /** UI Element size. */
  uiSize?: UiSize;
};

/** Wrapper element of FontAwesome icon. */
export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { disabled, empty, icon, uiSize, className } = props;
  const propsCopy = { ...props };

  delete propsCopy.empty;

  if (empty)
    return (
      <FontAwesomeIcon
        {...{ ...propsCopy }}
        icon={emptyIcon}
        className={classnames(
          className,
          'ui-set select-none',
          uiSize !== undefined ? getClassNameForSize(uiSize).text : '',
        )}
      />
    );

  if (icon === undefined) return null;

  return (
    <FontAwesomeIcon
      {...{ ...propsCopy, icon }}
      className={classnames(
        className,
        'ui-set select-none',
        uiSize !== undefined ? getClassNameForSize(uiSize).text : '',

        {
          [colors.standard.normal.text]: disabled === false,
          [colors.standard.disabled.text]: disabled === true,
        },
      )}
    />
  );
};

Icon.displayName = 'Icon';
