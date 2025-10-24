import React from "react";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "danger" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${
        fullWidth ? "btn--fullWidth" : ""
      }`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
