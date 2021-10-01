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
  secondary?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClicked,
  type,
  disabled,
  className,
  secondary,
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.secondary]: secondary,
      })}
      type={type}
      onClick={onClicked ? onClicked : undefined}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
