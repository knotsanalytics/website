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
        <div className={`col-12 col-sm-8 col-md-6 col-lg-6`}>
          <h2 className={cn(styles.title, "fadeInUp")}>
            Meet the <span>Founders</span>
          </h2>
          <p className={cn(styles.subtitle, "fadeInUp")}>
            KNOTS is a data science company providing solutions to address the
            needs of your business and to help you to reach your goals.
          </p>
        </div>
        {members.map((member, idx) => (
          <div
            key={member.fullName}
            className={cn(
              styles.memberWrap,
              {
                ["col-12 col-start-sm-2 col-end-sm-5 col-start-md-3 col-end-md-6 col-start-lg-3 col-end-lg-6"]:
                  idx === 0,
              },
              {
                ["col-12 col-start-sm-8 col-end-sm-11 col-start-md-7 col-end-md-10 col-start-lg-7 col-end-lg-10"]:
                  idx === 1,
              }
            )}
          >
            <div className={styles.meta}>
              <div className={styles.imgContainer}>
                <div className={cn(styles.imgWrap, "fadeInUp")}>
                  <img src={member.picture} alt={member.fullName} />
                </div>
                <div className={styles.arrowContainer}></div>
              </div>

              <h3 className={"fadeInUp"}>{member.fullName}</h3>
              <h5 className={"small fadeInUp"}>{member.role}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
