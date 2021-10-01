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
  const myRef = useRef<HTMLDivElement>(null);

  const onNavElClicked = (idx: number) => {
    if (myRef && myRef.current && myRef.current.children[idx + 1]) {
      myRef.current.children[idx + 1].scrollIntoView();
    }
  };
  return (
    <div className={styles.root}>
      <nav>
        <Navigation handleElClick={onNavElClicked} navItems={navItems} />
      </nav>
      <main ref={myRef}>{children}</main>
    </div>
  );
}
