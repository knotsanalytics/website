import React from "react";
import Button from "../../lib/Button/Button";
import styles from "./Hero.module.scss";
import cn from "classnames";

import Canvas from "../canvas";

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

  return (
    <div className={cn(styles.container)} id={"hero"}>
      {/* <div className={styles.canvasContaner}>
        <Canvas />
      </div> */}

      <div className={cn("grid")}>
        <h5 className={cn(styles.eyebrow, "fadeInUp")}>{eyebrow}</h5>
        <div
          className={cn(
            "col-12 col-start-sm-4 col-end-sm-9 col-start-md-4 col-end-md-9 col-start-lg-4 col-end-lg-9"
          )}
        >
          <h1 className={"fadeInUp"}>
            We help <span>businesses</span> make the most out of their data
          </h1>
        </div>
        <div
          className={
            "col-12 col-start-sm-4 col-end-sm-9 col-start-md-4 col-end-md-9 col-start-lg-3 col-end-lg-10"
          }
        >
          <p className={"fadeInUp"}>{subtitle}</p>
        </div>
        <div className={cn(styles.buttonWrap, "fadeInUp")}>
          <Button label={ctaLabel} onClicked={handleGetInTouch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
