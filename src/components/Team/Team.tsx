import React, { useEffect, useRef } from "react";
import styles from "./Team.module.scss";
import ReactMarkdown from "react-markdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import cn from "classnames";

// export type MissionProps = {
//   title: string;
//   subtitle: string;
//   members: Array<{
//     fullName: string;
//     role: string;
//     picture: string;
//     bio: string;
//   }>;
// };

export type TeamProps = {};

const mockData = {
  title: "The Team",
  subtitle: "Something About the team",
  members: [
    {
      fullName: "Giorgio Sarno",
      role: "President",
      picture: "/images/photo-1550745165-9bc0b252726f.jpeg",
      bio: "I am a machine learning engineer that pursued a Ph.D. in computational linguistics. I started data analysis during my master in physics where I modeled spatial and neurological data. After I had the opportunity to manage, analyze big financial databases, working in the IT sector for one of the biggest banks in Italy.",
    },
    {
      fullName: "Simone Fuscone",
      role: "CTO",
      picture: "/images/photo-1550745165-9bc0b252726f.jpeg",
      bio: "I am a computer and data scientist with a Ph.D. in Theoretical Physics. During my years in research, I focused on Quantum Gravity and on a numerical approach to gravitational physics. Here I developed high-performance solutions as well as machine and deep-learning algorithms and I explored their possibilities in one of the toughest domains of physics.",
    },
  ],
};

const Team: React.FC<TeamProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.teamContainer}>
      <div className={cn(`grid`, styles.grid)}>
        <div className={`col-12 `}>
          <h2 className={styles.title}>{mockData.title}</h2>
          <h3 className={styles.subtitle}>{mockData.subtitle}</h3>
        </div>
        {mockData.members.map((member, idx) => (
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
              <p className={styles.bio}>{member.bio}</p>
              <h3 className={styles.role}>{member.role}</h3>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
