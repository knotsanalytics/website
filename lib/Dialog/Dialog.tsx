import React, { useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Dialog.module.scss";
import Icon from "../Icon/Icon";
import { gsap } from "gsap";
export type DialogProps = {
  active: boolean;
  onClose: () => void;
};

const Dialog: React.FC<DialogProps> = ({ active, onClose, children }) => {
  const dlg = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";

    if (active) {
      gsap.to(backdrop.current, {
        autoAlpha: 1,
        opacity: 1,
        duration: 0.3,
      });

      gsap.fromTo(
        dlg.current,
        {
          top: "60%",
          opacity: 0,
          duration: 1,
          ease: "Power2.easeOut",
        },
        {
          top: "50%",
          opacity: 1,
          duration: 0.3,
          ease: "Power2.easeOut",
          autoAlpha: 1,
          display: "block",
          delay: 0.2,
        }
      );
    } else {
      gsap.to(dlg.current, {
        autoAlpha: 0,
        opacity: 0,
        duration: 1,
      });
    }
  }, [active]);

  return (
    <div className={cn(styles.dialogContainer, { [styles.active]: active })}>
      <div className={styles.backdrop} onClick={onClose} ref={backdrop}></div>
      <div className={cn(styles.dialog)} ref={dlg}>
        <Icon
          icon="cross"
          color="black"
          className={styles.closeIcon}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Dialog;
