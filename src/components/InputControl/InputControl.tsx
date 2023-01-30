import React from "react";
import styles from "./InputControl.module.css";

interface InputControlProps {
  label: string;
  placeholder: any;
}

const InputControl = (props: InputControlProps) => {
  const { label, ...placeholder } = props;
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...placeholder} />
    </div>
  );
};

export default InputControl;
