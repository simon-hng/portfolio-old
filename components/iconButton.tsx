import * as React from "react";

interface iconButtonProps {
  onClick: () => void;
  text: string;
  children: React.ReactElement;
  className?: string;
}
export const IconButton = ({
  onClick,
  text,
  children,
  className,
}: iconButtonProps) => (
  <button
    onClick={onClick}
    className={`btn flex justify-between w-full bg-white dark:bg-slate-900
    fill-slate-500 dark:fill-slate-400 ${className}`}
  >
    <p className="pr-1">{text}</p>
    {children}
  </button>
);
