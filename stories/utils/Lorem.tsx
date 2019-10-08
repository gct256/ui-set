import * as React from 'react';

type LoremProps = {
  count?: number;
};

export const Lorem: React.FC<LoremProps> = ({ count = 1 }: LoremProps) => {
  const contents = [];

  for (let i = 0; i < count; i += 1) {
    contents.push(
      <p className="mb-2 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        exercitationem aliquam. Consequatur voluptate explicabo repellendus
        accusantium, beatae ipsum facilis sint omnis dolor officia numquam
        aliquam amet, nesciunt libero quo voluptatibus!
      </p>,
    );
  }

  return <>{contents}</>;
};

Lorem.displayName = 'Lorem';
