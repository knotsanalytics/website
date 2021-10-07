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
      gsap.fromTo(
        item,
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "Power2.easeOut",
        }
      );
    });
    gsap.fromTo(
      ".heroItem",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Power2.easeOut",
        delay: 0.4,
        stagger: 0.1,
      }
    );
  };
  return (
    <StoreProvider>
      <Layout navItems={hero.navigation_tags}>
        <BasicMeta url={"/"} />
        <Hero {...hero} />
        <Mission {...mission} />
        <Team {...team} />
        <Contact {...contact} />
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
