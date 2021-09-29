import { GetStaticProps } from "next";
import { gePageData } from "../lib/pages";
import Hero, { HeroProps } from "../components/Hero/Hero";
import Mission, { MissionProps } from "../components/Mission/Mission";
import Team, { TeamProps } from "../components/Team/Team";
import Contact, { ContactProps } from "../components/Contact/Contact";
import React, { useEffect } from "react";
import BasicMeta from "../components/meta/BasicMeta";
import Layout from "../components/Layout/Layout";

type Props = {
  hero: HeroProps;
  mission: MissionProps;
  team: TeamProps;
  contact: ContactProps;
};

export default function Index({ hero, mission, team, contact }: Props) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <Layout navItems={hero.navigation_tags}>
      <BasicMeta url={"/"} />
      <Hero {...hero} />
      <Mission {...mission} />
      <Team {...team} />
      <Contact {...contact} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const hero = gePageData("hero")[locale ? locale : "en"];
  const mission = gePageData("mission")[locale ? locale : "en"];
  const team = gePageData("team")[locale ? locale : "en"];
  const contact = gePageData("contact")[locale ? locale : "en"];

  return {
    props: {
      hero,
      mission,
      team,
      contact,
    },
  };
};
