import React, { useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";

interface editorPropTypes {
  sections: {
    basicInfo: string;
    workExp: string;
    project: string;
    education: string;
    achievement: string;
    summary: string;
    other: string;
  };
}
const Editor = (props: editorPropTypes): JSX.Element => {
  const { sections } = props;
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.values(sections)[0]
  );
  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          // value={values.companyName}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, companyName: event.target.value }))
          // }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          // value={values.certificationLink}
          // onChange={(event) =>
          //   setValues((prev) => ({
          //     ...prev,
          //     certificationLink: event.target.value,
          //   }))
          // }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          // value={values.location}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, location: event.target.value }))
          // }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          // type="date"
          placeholder="Enter start date of work"
          // value={values.startDate}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, startDate: event.target.value }))
          // }
        />
        <InputControl
          label="End Date"
          // type="date"
          placeholder="Enter end date of work"
          // value={values.endDate}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, endDate: event.target.value }))
          // }
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          label=""
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          label=""
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          label=""
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );
  // const {
  //   basicInfo,
  //   workExp,
  //   project,
  //   education,
  //   achievement,
  //   summary,
  //   other,
  // } = sections;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          {Object.values(sections)?.map((item, ind) => (
            <div
              className={`${styles.section} ${
                activeSectionKey === item ? styles.active : ""
              }`}
              key={item}
              onClick={() => setActiveSectionKey(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <InputControl label="Title" placeholder="Enter section title" />
        </div>
      </div>
    </>
  );
};

export default Editor;
