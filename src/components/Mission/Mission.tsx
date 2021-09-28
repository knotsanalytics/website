import React, { useEffect, useRef } from "react";
import styles from "./Mission.module.scss";
import ReactMarkdown from "react-markdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import cn from "classnames";

export type MissionProps = {
  missionSections: Array<{
    title: string;
    eyebrow: string;
    body: any;
  }>;
};

const Mission: React.FC<MissionProps> = ({ missionSections }) => {
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    let sections: Array<HTMLDivElement> = gsap.utils.toArray(".section");

    sections.forEach((section: HTMLDivElement, idx) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "99% top",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(section, {
          opacity: idx === sections.length - 2 ? 1 : 0,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "0% top",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(section, {
          opacity: 1,
        });
    });
  }, []);

  return (
    <div className={styles.missionContainer} ref={missionRef}>
      <div className={styles.latLayout}></div>
      {missionSections.map((data, idx) => (
        <div
          className={cn(styles.sectionWrap, "section", {
            [styles.first]: idx === 0,
          })}
          key={idx}
        >
          <div className={cn(`grid  section-content`, styles.grid)}>
            <p className={styles.index}>
              0<span>{idx + 1}</span>
            </p>
            <div
              className={`col-12 col-start-md-2 col-end-md-7 col-start-lg-2 col-end-lg-6 ${styles.eyebrowRow}`}
            >
              <h3 className={styles.eyebrow}>{data.eyebrow}</h3>
              <div className={styles.separator}></div>
            </div>
            <div
              className={`col-12 col-start-md-2 col-end-md-7 col-start-lg-2 col-end-lg-6`}
            >
              <h2 className={styles.headline}>{data.title}</h2>
            </div>
            <div
              className={`col-12 col-start-md-3 col-end-md-7 col-start-lg-3 col-end-lg-5`}
            >
              <p className={`large ${styles.body}`}>{data.body}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={cn(styles.sectionWrap, "section")}></div>
    </div>
  );
};

export default Mission;
