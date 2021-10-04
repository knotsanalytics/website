import { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";
import cn from "classnames";
import React, { useContext } from "react";
import { Context } from "../StoreProvider/StoreProvider";
type Props = {};

const Cursor: React.FC<Props> = ({}) => {
  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  if (typeof navigator !== "undefined" && isMobile()) return null;

  const pos = useContext(Context);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [heroHovered, setHeroHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    // hero Section
    document.getElementById("hero")?.addEventListener("mouseover", () => {
      setHeroHovered(true);
    });
    document.getElementById("hero")?.addEventListener("mouseout", () => {
      setHeroHovered(false);
    });

    // Contact Section
    // document.getElementById("contact")?.addEventListener("mouseover", () => {
    //   setContactHover(true);
    // });
    // document.getElementById("contact")?.addEventListener("mouseout", () => {
    //   setContactHover(false);
    // });

    // Links / Buttons
    document.querySelectorAll("a").forEach((el, idx) => {
      el.addEventListener("mouseover", () => {
        setLinkHovered(true);
      });
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
    document.querySelectorAll("button").forEach((el, idx) => {
      el.addEventListener("mouseover", () => {
        setButtonHovered(true);
      });
      el.addEventListener("mouseout", () => setButtonHovered(false));
    });
    document.querySelectorAll("input").forEach((el, idx) => {
      el.addEventListener("mouseover", () => {
        setButtonHovered(true);
      });
      el.addEventListener("mouseout", () => setButtonHovered(false));
    });
    document.querySelectorAll("textarea").forEach((el, idx) => {
      el.addEventListener("mouseover", () => {
        setButtonHovered(true);
      });
      el.addEventListener("mouseout", () => setButtonHovered(false));
    });
  };

  const cursorClasses = cn(styles.cursor, {
    [styles.cursor_clicked]: clicked,
    [styles.cursor_hidden]: hidden,
    [styles.cursor_hero_hovered]: heroHovered,
    [styles.cursor_link_hovered]: linkHovered,
    [styles.cursor_button_hovered]: buttonHovered,
    [styles.cursor_contact_hovered]: contactHover,
  });

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
      {/* <span
        className={cn(styles.dotHighlight, cursorClasses)}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      ></span>
      <span
        className={cn(styles.dotHighlight, styles.second, cursorClasses)}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      ></span>
      <span
        className={cn(styles.dotHighlight, styles.third, cursorClasses)}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      ></span> */}
    </>
  );
};

export default Cursor;
