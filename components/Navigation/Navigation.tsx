import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import { useRouter } from "next/router";
import cn from "classnames";
import { gsap } from "gsap";
import Burger from "../../lib/Burger/Burger";
import { sortedLastIndex } from "lodash";

export type NavigationProps = {
  handleElClick: (idx: number) => void;
  handleHomeClick: () => void;
  navItems: string[];
};

const Navigation: React.FC<NavigationProps> = ({
  navItems,
  handleElClick,
  handleHomeClick,
}) => {
  const [active, setActive] = useState(false);
  const [DD, setDD] = useState(false);
  const locale = useRouter().locale;

  const handleElClicked = (idx: number) => {
    setActive(false);
    handleElClick(idx);
  };

  useEffect(() => {
    if (active) {
      gsap.fromTo(
        ".navEl",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "Power2.easeOut",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "Power2.easeOut",
          autoAlpha: 1,
          display: "block",
          delay: 0.2,
          stagger: 0.02,
        }
      );
    } else {
      gsap.to(".navEl", {
        autoAlpha: 0,
        display: "none",
        duration: 0,
      });
    }
  }, [active]);

  return (
    <nav className={cn(styles.nav, { [styles.active]: active })}>
      <p className={cn(styles.logo)} onClick={() => handleHomeClick()}>
        KNOTS
      </p>
      {navItems.map((item, idx) => (
        <a
          className={cn(styles.navEl, "small", "navEl", {
            [styles.active]: active,
          })}
          key={idx}
          onClick={() => handleElClicked(idx)}
        >
          {item}
        </a>
      ))}
      <div
        className={cn(styles.lang, { [styles.active]: active })}
        onClick={() => setDD(!DD)}
      >
        <p
          className={`${styles.langLink} small navEl ${
            DD ? styles.active : ""
          }`}
        >
          {String(locale)}
          <img src="/images/chevron-down.svg" alt="language" />
        </p>
        <div className={`${styles.dropdown} ${DD ? styles.show : ""}`}>
          <Link href="/" locale={"en"}>
            <a
              className={cn("small", {
                [styles.disabled]: locale === "en",
              })}
              onClick={() => setActive(false)}
            >
              🇬🇧 English
            </a>
          </Link>
          <Link href="/" locale={"fr"}>
            <a
              className={cn("small", { [styles.disabled]: locale === "fr" })}
              onClick={() => setActive(false)}
            >
              🇫🇷 French
            </a>
          </Link>
        </div>
      </div>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={cn(styles.mobileBg, { [styles.active]: active })}></div>
    </nav>
  );
};
export default Navigation;
