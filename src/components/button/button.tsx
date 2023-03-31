import clsx from "clsx";
import React, { type ButtonHTMLAttributes } from "react";

type CustomButtonProps = {
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonV1: React.FC<ButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => (
  <button
    {...buttonProps}
    className={clsx(
      "rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100",
      className
    )}
  >
    {children}
  </button>
);

export default ButtonV1;
