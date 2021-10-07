import React from "react";
import cn from "classnames";
import styles from "./Icon.module.scss";
import { ReactSVG } from "react-svg";

export type IconProps = {
  className?: string;
  icon: string;
  color?: string;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ className, icon, color, onClick }) => {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.classList.add(styles.icon);
        svg.classList.add(className ? className : "");
        svg.setAttribute("style", `color: ${color}`);
      }}
      className={cn(styles.wrapper)}
      evalScripts="always"
      onClick={
        onClick
          ? () => {
              onClick();
            }
          : undefined
      }
      src={`/icons/${icon}.svg`}
      useRequestCache={true}
      wrapper="span"
    />
  );
};

export default Icon;
