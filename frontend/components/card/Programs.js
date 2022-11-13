import React, { useEffect } from "react";
import { Card } from "antd";
import { ProgramsSlider } from "../slider/ProgramsSlider";

const Programs = () => {
  return (
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{ marginTop: "5%" }}
      >
        <Card
          title="Descriptive Content about Sukkur IBA KKOT Campus"
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
