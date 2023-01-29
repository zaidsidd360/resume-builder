import React from "react";
import styles from "./Body.module.css";
import Download from "../../assets/download.svg";

const Body = () => {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  return (
    <>
      <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((col) => (
              <span
                key={col}
                style={{ backgroundColor: col }}
                className={styles.color}
              ></span>
            ))}
          </div>
          <button>
            Download <img src={Download} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
