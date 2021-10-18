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
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClicked,
  type,
  disabled,
  className,
  secondary,
  loading,
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.secondary]: secondary,
        [styles.loading]: loading,
      })}
      type={type}
      onClick={onClicked ? onClicked : undefined}
      disabled={disabled}
    >
      {label}
      {loading && <span className={styles.spinner}></span>}
    </button>
  );
};

export default Button;
