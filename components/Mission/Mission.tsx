import React, { useEffect, useRef } from "react";
import styles from "./Mission.module.scss";
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
  useEffect(() => {}, []);

  return (
    <div className={styles.missionContainer}>
      <div className={"grid"}>
        <div className={`col-12 col-sm-2 col-md-3`}>
          <p className={"fadeInUp"}>{"What we do"}</p>
        </div>
        <div
          className={`col-12 col-sm-10 col-md-9 col-lg-7 ${styles.bodyLargeCol}`}
        >
          <h3 className={cn("fadeInUp large")}>
            {
              "Knots Analytics is a data science company providing solutions to address the needs of your business and to help you to reach your goals."
            }
          </h3>
        </div>
        {missionSections.map((section, idx) => (
          <div
            key={idx}
            className={cn(
              `col-12 col-sm-6 col-md-4 col-start-lg-${
                idx % 2 ? "8" : "4"
              } col-end-lg-${idx % 2 ? "10" : "6"}`,
              styles.sectionCol
            )}
          >
            <p className={cn(styles.index, "fadeInUp")}>0{idx + 1}</p>
            <h3 className="fadeInUp">{section.title}</h3>
            <p className="fadeInUp">{section.body}</p>
          </div>
        ))}

        <div
          className={cn(
            styles.divider,
            "col-12 col-start-sm-3 col-end-sm-10 col-start-md-3 col-end-md-10 col-start-lg-4 col-end-lg-9 fadeInUp"
          )}
        ></div>
      </div>
    </div>
  );
};

export default Mission;
