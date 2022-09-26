import React, { ReactNode, HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary";
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: props.border,
        borderRadius: props.borderRadius,
        padding: props.padding,
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
