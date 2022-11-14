import React, { useEffect } from "react";
import { Card } from "antd";
import { ProgramsSlider } from "../slider/ProgramsSlider";
import styles from "./Programs.module.css";

const Programs = () => {

  const styles = {
    padding: "13px",
  };


  return (
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{ marginTop: "5%" }}
      >
        <Card
          // styles={styles.tittle}
          className={styles.tittle}
          title="Offered Programs"
          bordered={true}
          style={{ width: "auto" }}
        >
          <ProgramsSlider />
        </Card>
      </div>
    </>
  );
};

export default Programs;
