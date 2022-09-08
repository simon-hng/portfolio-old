import * as React from "react";

interface iconButtonProps {
  onClick: () => void;
  text: string;
  children: React.ReactElement;
  className?: string;
}

export const IconButton = (props: iconButtonProps) => (
  <button
    onClick={props.onClick}
    className={`btn justify-between space-x-2 w-full bg-white dark:bg-gray-900
    fill-gray-500 dark:fill-gray-400 ${props.className}`}
  >
    <p className="pr-1">{props.text}</p>
    {props.children}
  </button>
);
