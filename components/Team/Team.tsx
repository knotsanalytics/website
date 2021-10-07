import React, { useState } from "react";
import styles from "./Team.module.scss";

import cn from "classnames";
import Icon from "../../lib/Icon/Icon";
import Dialog from "../../lib/Dialog/Dialog";
import ReactMarkdown from "react-markdown";

export type TeamProps = {
  title: string;
  subtitle: string;
  members: Array<{
    fullName: string;
    role: string;
    picture: string;
    bio: string;
    linkedin: string;
  }>;
};

const Team: React.FC<TeamProps> = ({ title, subtitle, members }) => {
  const [dialogs, setDialogs] = useState([false, false]);

  const handleCloseDialog = (idx: number) => {
    const newArray = dialogs;
    newArray[idx] = false;
    setDialogs((oldArray) => [...newArray]);
  };

  const handleOpenDialog = (idx: number) => {
    const newArray = dialogs;
    newArray[idx] = true;
    setDialogs((oldArray) =>
      oldArray.map((item, ix) => (ix === idx ? true : false))
    );
  };

  return (
    <div className={styles.teamContainer}>
      <div className={cn(`grid`, styles.grid)}>
        <div className={`col-12 col-sm-8 col-md-6 col-lg-6`}>
          <h2>
            <ReactMarkdown
              className={cn(`fadeInUp`, styles.title)}
              components={{ p: "span" }}
            >
              {title}
            </ReactMarkdown>
          </h2>
        </div>
        <div className={`col-12 col-sm-10 col-md-8 col-lg-9`}>
          <p className={cn(styles.subtitle, "fadeInUp", "responsive")}>
            {subtitle}
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
              <div
                className={styles.imgContainer}
                onClick={() => handleOpenDialog(idx)}
              >
                <div className={cn(styles.imgWrap, "fadeInUp")}>
                  <img src={member.picture} alt={member.fullName} />
                </div>
                <div className={cn(styles.arrowContainer, "fadeInUp")}>
                  <Icon icon="arrow" color="white" className={styles.arrow} />
                </div>
              </div>
              <div className={cn(styles.dividerTop, "fadeInUp")}></div>
              <h3 className={"fadeInUp"}>
                <ReactMarkdown components={{ p: "span" }}>
                  {member.fullName}
                </ReactMarkdown>
              </h3>

              <h5 className={"small fadeInUp"}>{member.role}</h5>
            </div>

            <Dialog
              active={dialogs[idx]}
              onClose={() => handleCloseDialog(idx)}
            >
              <div className={cn(styles.dialogContent)}>
                <h2>
                  <ReactMarkdown components={{ p: "span" }}>
                    {member.fullName}
                  </ReactMarkdown>
                </h2>
                <h3>{member.role}</h3>
                <div className={styles.content}>
                  <div className={styles.leftCol}>
                    <div className={styles.imageContainer}>
                      <img src={member.picture} alt={member.fullName} />
                    </div>
                    <a href={member.linkedin} rel="noopener" target="_blank">
                      <Icon
                        icon="linkedin"
                        color="black"
                        className={styles.linkedin}
                      />
                    </a>
                  </div>

                  <p className={cn(styles.bio, "small")}>
                    <ReactMarkdown components={{ p: "span" }}>
                      {member.bio}
                    </ReactMarkdown>
                  </p>
                </div>
              </div>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
