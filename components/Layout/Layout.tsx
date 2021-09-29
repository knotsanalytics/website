import Head from "next/head";
import { useRef, useState } from "react";
import useDocumentScrollThrottled from "../../lib/scroll";
import Navigation from "../Navigation/Navigation";
import styles from "./mylayout.module.scss";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
  navItems: string[];
};
export default function Layout({ navItems, children }: Props) {
  const myRef = useRef(null);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const onNavElClicked = (idx: number) => {
    if (!!myRef.current.children[idx + 1]) {
      myRef.current.children[idx + 1].scrollIntoView();
    }
  };
  return (
    <div className={styles.root}>
      <nav
        className={cn(
          { [styles.shadow]: shouldShowShadow },
          { [styles.hidden]: shouldHideHeader }
        )}
      >
        <Navigation handleElClick={onNavElClicked} navItems={navItems} />
      </nav>
      <main ref={myRef}>{children}</main>
    </div>
  );
}
