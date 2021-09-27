import React from "react";
import styles from "./myhalfcircle.module.scss";
export type HalfCircleProps = {
  color: string;
};

const HalfCircle: React.FC<HalfCircleProps> = ({ color }) => {
  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill={color}
      >
        <path d="M0 100q50-200 100 0"></path>
      </svg>
    </div>
  );
};

export default HalfCircle;
