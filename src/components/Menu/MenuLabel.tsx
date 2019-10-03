import * as React from 'react';

type MenuLabelProps = {
  label?: string;
};

export const MenuLabel: React.FC<MenuLabelProps> = ({
  label,
}: MenuLabelProps) =>
  typeof label === 'string' && label.trim().length > 0 ? (
    <span className="flex-grow px-1">{label}</span>
  ) : (
    <span className="flex-grow" />
  );

MenuLabel.displayName = 'MenuLabel';
