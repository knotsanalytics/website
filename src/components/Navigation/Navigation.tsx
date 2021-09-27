import Link from "next/link";
import Burger from "../Burger";
import { useState } from "react";
import styles from "./Navigation.module.scss";
import { useRouter } from "next/router";

export type NavigationProps = {
  handleElClick?: (idx: number) => void;
  navItems: string[];
};

const Navigation: React.FC<NavigationProps> = ({ navItems, handleElClick }) => {
  const [active, setActive] = useState(false);
  const [DD, setDD] = useState(false);
  const locales = useRouter().locales;
  const locale = useRouter().locale;
  return (
    <div className={`${styles.Navigation}`}>
      {/* <Burger active={active} onClick={() => setActive(!active)} /> */}

      {navItems.map((item, idx) => (
        <a
          className={styles.navEl}
          key={idx}
          onClick={() => handleElClick(idx)}
        >
          {item}
        </a>
      ))}
      <div className={styles.lang} onClick={() => setDD(!DD)}>
        <p className={`${styles.langLink} ${DD ? styles.active : ""}`}>
          {String(locale).toUpperCase()}
          <img src="/images/chevron-down.svg" alt="language" />
        </p>
        <div className={`${styles.dropdown} ${DD ? styles.show : ""}`}>
          {locales
            .filter((item) => item !== locale)
            .map((item) => (
              <Link href="/" locale={String(item)} key={item}>
                <a>{String(item).toUpperCase()}</a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
