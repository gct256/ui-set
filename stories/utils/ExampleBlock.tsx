import * as React from 'react';

const ExampleBlockWidth: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const { current } = ref;

    if (current !== null && current.parentNode instanceof HTMLElement) {
      current.textContent = `${current.parentNode.offsetWidth} x ${current.parentNode.offsetHeight}`;
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 right-0 text-xs m-1 bg-black text-white opacity-25"
    />
  );
};

export const ExampleBlock: React.FC<{}> = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <div className="bg-gray-200 shadow-inner w-full h-full p-2 pb-6 relative">
      {children}
      <ExampleBlockWidth />
    </div>
  );
};

ExampleBlock.displayName = 'ExampleBlock';
