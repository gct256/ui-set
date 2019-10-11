import * as React from 'react';

type ExampleLoremProps = {
  count?: number;
};

export const ExampleLorem: React.FC<ExampleLoremProps> = ({
  count = 1,
}: ExampleLoremProps) => {
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

ExampleLorem.displayName = 'ExampleLorem';
