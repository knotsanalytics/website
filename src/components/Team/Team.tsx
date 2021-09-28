import React, { useEffect, useRef } from "react";
import styles from "./Team.module.scss";
import ReactMarkdown from "react-markdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import cn from "classnames";

export type TeamProps = {
  title: string;
  subtitle: string;
  members: Array<{
    fullName: string;
    role: string;
    picture: string;
    bio: string;
  }>;
};

const Team: React.FC<TeamProps> = ({ title, subtitle, members }) => {
  return (
    <div className={styles.teamContainer}>
      <div className={cn(`grid`, styles.grid)}>
        <div className={`col-12 `}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        {members.map((member, idx) => (
          <div
            key={idx}
            className={`${styles.cardCol} col-12 col-md-6 col-start-lg-${
              idx * 4 + 3
            } col-end-lg-${idx * 4 + 6}`}
          >
            <section className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={member.picture} alt={member.fullName} />
              </div>
              <h3 className={styles.name}>{member.fullName}</h3>
              <h3 className={styles.role}>{member.role}</h3>
              <p className={styles.bio}>{member.bio}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
