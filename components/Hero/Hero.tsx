import React from "react";
import Button from "../../lib/Button/Button";
import styles from "./Hero.module.scss";
import cn from "classnames";

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
    <div className={cn(styles.container)}>
      <div className={cn("grid")}>
        <h5 className={styles.eyebrow}>{eyebrow}</h5>
        <div
          className={cn(
            "col-12 col-start-md-3 col-end-md-10 col-start-lg-4 col-end-lg-9"
          )}
        >
          <h1 className={"fadeInUp"}>
            We help <span>businesses</span> make the most out of their data
          </h1>
        </div>
        <div
          className={
            "col-12 col-start-md-3 col-end-md-10 col-start-lg-3 col-end-lg-10 "
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
