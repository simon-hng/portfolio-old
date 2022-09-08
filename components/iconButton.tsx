import * as React from "react";

interface iconButtonProps {
  onClick: () => void;
  text: string;
  children: React.ReactElement;
  className?: string;
}

// eslint-disable-next-line react/display-name
export const IconButton = React.forwardRef((props: iconButtonProps, ref) => (
  <button
    ref={ref as React.RefObject<any>}
    onClick={props.onClick}
    className={`btn flex justify-between w-full bg-white dark:bg-gray-900
    fill-gray-500 dark:fill-gray-400 ${props.className}`}
  >
    <p className="pr-1">{props.text}</p>
    {props.children}
  </button>
));
