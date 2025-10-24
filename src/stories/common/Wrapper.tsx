import type { JSX } from "react";
import "./Wrapper.scss";

interface IProps {
  children: React.ReactNode;
  mode?: "dark" | "light";
}

export const Wrapper = ({ children, mode = "dark" }: IProps): JSX.Element => {
  return <div className={`wrapper wrapper--${mode}`}>{children}</div>;
};
