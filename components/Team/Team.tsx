import React from "react";
import styles from "./Team.module.scss";

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
          <h2 className={cn(styles.title, "fadeInUp")}>{title}</h2>
        </div>
        {members.map((member, idx) => (
          <React.Fragment key={member.fullName}>
            <div
              className={cn(
                "col-12 col-start-md-2 col-end-md-4 col-start-lg-2 col-end-lg-4"
              )}
            >
              <div className={styles.meta}>
                <h3 className={"fadeInUp"}>{member.fullName}</h3>
                <p className={"small fadeInUp"}>{member.role}</p>
                <div className={cn(styles.imgWrap, "fadeInUp")}>
                  <img src={member.picture} alt={member.fullName} />
                </div>
              </div>
            </div>
            <div
              className={cn(
                styles.bioWrap,
                "col-12 col-md-8 col-start-md-5 col-end-md-11 col-start-lg-5 col-end-lg-11"
              )}
            >
              <p className={"fadeInUp"}>{member.bio}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Team;
