import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../lib/Button/Button";
import HalfCircle from "../../lib/HalfCircle/HalfCircle";
import styles from "./Hero.module.scss";
export type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  navigation_tags: string[];
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  const handleGetInTouch = () => {
    document.getElementById("contact").scrollIntoView();
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>hi, we are knots, we specialize in</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.buttonWrap}>
          <Button label={"Get in touch"} onClicked={handleGetInTouch} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
