import Head from "next/head";
import { useRef, useState } from "react";
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
  const onHomeClick = () => {
    if (myRef && myRef.current) {
      myRef.current.children[0].scrollIntoView();
    }
  };
  return (
    <div className={styles.root}>
      <Navigation
        handleElClick={onNavElClicked}
        handleHomeClick={onHomeClick}
        navItems={navItems}
      />

      <main ref={myRef}>{children}</main>
    </div>
  );
}
