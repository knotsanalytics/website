import React from "react";
import Button from "../../lib/Button/Button";
import styles from "./Hero.module.scss";
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
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.buttonWrap}>
          <Button label={ctaLabel} onClicked={handleGetInTouch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
