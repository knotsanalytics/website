import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

export type ButtonProps = {
  label: string;
  onClicked?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClicked,
  type,
  disabled,
  className,
}) => {
  return (
    <button
      className={cn(styles.button, className)}
      type={type}
      onClick={onClicked ? onClicked : undefined}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
