import React, { useEffect, useState } from "react";
import Button from "../../lib/Button/Button";
import styles from "./Hero.module.scss";
import cn from "classnames";
import ReactMarkdown from "react-markdown";
import Three from "../../lib/Three/Three";

export type HeroProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  ctaLabel: string;
  navigation_tags: string[];
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, eyebrow, ctaLabel }) => {
  const handleGetInTouch = () => {
    document.getElementById("contact")?.scrollIntoView();
  };
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cn(styles.container)} id={"hero"}>
      {loaded && (
        <div className={styles.canvasContaner}>
          <Three />
        </div>
      )}

      <div className={cn("grid")}>
        <h5 className={cn(styles.eyebrow, "heroItem")}>{eyebrow}</h5>
        <div
          className={cn(
            "col-12 col-start-sm-1 col-end-sm-6 col-start-md-1 col-end-md-6 col-start-lg-1 col-end-lg-6"
          )}
        >
          <h1 className={"heroItem"}>
            <ReactMarkdown
              className={cn(styles.title)}
              components={{ p: "span" }}
            >
              {title}
            </ReactMarkdown>
          </h1>
        </div>
        <div
          className={
            "col-12 col-start-sm-1 col-end-sm-7 col-start-md-1 col-end-md-7 col-start-lg-1 col-end-lg-7"
          }
        >
          <p className={"heroItem"}>{subtitle}</p>
        </div>
        <div className={cn(styles.buttonWrap, "heroItem")}>
          <Button label={ctaLabel} onClicked={handleGetInTouch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
