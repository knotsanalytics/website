import Link from "next/link";
import { useState } from "react";
import styles from "./Navigation.module.scss";
import { useRouter } from "next/router";
import cn from "classnames";
import Burger from "../Burger";

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
  const locales = useRouter().locales;
  const locale = useRouter().locale;

  const handleElClicked = (idx: number) => {
    setActive(false);
    handleElClick(idx);
  };

  return (
    <div className={`${styles.Navigation}`}>
      <p className={cn(styles.logo)} onClick={() => handleHomeClick()}>
        KNOTS
      </p>
      {navItems.map((item, idx) => (
        <a
          className={cn(styles.navEl, "small", { [styles.active]: active })}
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
        <p className={`${styles.langLink} small ${DD ? styles.active : ""}`}>
          {String(locale)}
          <img src="/images/chevron-down.svg" alt="language" />
        </p>
        <div className={`${styles.dropdown} ${DD ? styles.show : ""}`}>
          {locales &&
            locales
              .filter((item) => item !== locale)
              .map((item) => (
                <Link href="/" locale={String(item)} key={item}>
                  <a className={"small"}>{String(item)}</a>
                </Link>
              ))}
        </div>
      </div>
      <Burger active={active} onClick={() => setActive(!active)} />{" "}
      <div className={cn(styles.mobileBg, { [styles.active]: active })}></div>
    </div>
  );
};
export default Navigation;
