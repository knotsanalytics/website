import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import Mission, { MissionProps } from "../components/Mission/Mission";
import { gePageData } from "../lib/pages";
import styles from "./homepage.module.scss";
import Value, { ValueProps } from "../components/Value/Value";
import Link from "next/link";
import Hero, { HeroProps } from "../components/Hero/Hero";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";

type Props = {
  hero: HeroProps;
  mission: MissionProps;
  value: ValueProps;
};

export default function Index({ hero, mission, value }: Props) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <Layout navItems={hero.navigation_tags}>
      <BasicMeta url={"/"} />
      <Hero {...hero} />
      <Mission {...mission} />
      <Team />
      <Contact />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const hero = gePageData("hero")[locale];
  const mission = gePageData("mission")[locale];
  const value = gePageData("value")[locale];

  return {
    props: {
      hero,
      mission,
      value,
    },
  };
};
