import React, { useEffect, useRef } from "react";
import styles from "./Mission.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import cn from "classnames";

export type MissionProps = {
  eyebrow: string;
  description: string;
  missionSections: Array<{
    title: string;
    body: any;
  }>;
};

const palette = ["#f5c359", "#c8d9e2", "#2c2e5c"];

const Mission: React.FC<MissionProps> = ({
  eyebrow,
  description,
  missionSections,
}) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.missionContainer}>
      <div className={"grid"}>
        <div className={`col-12 col-sm-2 col-md-3 col-lg-5`}>
          <h4 className={"fadeInUp"}>{eyebrow}</h4>
        </div>
        <div
          className={`col-12 col-sm-10 col-md-9 col-lg-7 ${styles.bodyLargeCol}`}
        >
          <p className={cn("fadeInUp large")}>{description}</p>
        </div>
        {missionSections.map((section, idx) => (
          <div
            key={idx}
            className={cn(
              `col-12 col-sm-6 col-md-4 col-start-lg-${
                2 + idx * 3 + idx
              } col-end-lg-${idx * 3 + 4 + idx}`,
              styles.sectionCol
            )}
          >
            <div
              className={cn(styles.dividerTop, "fadeInUp")}
              style={{ backgroundColor: palette[idx] }}
            ></div>
            <p
              className={cn(styles.index, "fadeInUp")}
              style={{ color: palette[idx] }}
            >
              0{idx + 1}
            </p>
            <h3 className="fadeInUp">{section.title}</h3>
            <p className="fadeInUp small">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
