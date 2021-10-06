import { GetStaticProps } from "next";
import { gePageData } from "../lib/pages";
import Hero, { HeroProps } from "../components/Hero/Hero";
import Mission, { MissionProps } from "../components/Mission/Mission";
import Team, { TeamProps } from "../components/Team/Team";
import Contact, { ContactProps } from "../components/Contact/Contact";
import React, { useEffect } from "react";
import BasicMeta from "../components/meta/BasicMeta";
import Layout from "../components/Layout/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StoreProvider } from "../lib/StoreProvider/StoreProvider";
import Cursor from "../lib/Cursor/Cursor";
import Three from "../components/Three/Three";

type Props = {
  hero: HeroProps;
  mission: MissionProps;
  team: TeamProps;
  contact: ContactProps;
};

export default function Index({ hero, mission, team, contact }: Props) {
  useEffect(() => {
    initAnimations();
    window.history.scrollRestoration = "manual";
  }, []);

  const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    /////////////////////
    //// Fade in up /////
    /////////////////////
    const fadeInUpTween = document.querySelectorAll(".fadeInUp");
    fadeInUpTween.forEach((item, idx) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "Power2.easeOut",
      });
    });
  };
  return (
    <StoreProvider>
      <Layout navItems={hero.navigation_tags}>
        <BasicMeta url={"/"} />
        <Hero {...hero} />
        <Mission {...mission} />
        <Team {...team} />
        <Contact {...contact} />
        <Cursor />
      </Layout>
    </StoreProvider>
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
