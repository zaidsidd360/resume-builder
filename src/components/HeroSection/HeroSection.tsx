import React from "react";
import styles from "./HeroSection.module.css";
import ResumeSvg from "../../assets/resume2.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume.<span> It's free!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={ResumeSvg} alt="Illustration" />
      </div>
    </div>
  );
};

export default Header;
