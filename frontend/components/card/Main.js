import React, { useEffect } from "react";
import { Card } from "antd";

const Main = (props) => {
  // console.log(props);
  // useEffect(() => {
  //   console.log(props.content);
  // });

  return (
    <>
      <div
        className="site-card-border-less-wrapper"
        style={{ marginTop: "5%" }}
      >
        <Card
          title="About Sukkur IBA KKOT Campus"
          bordered={true}
          style={{ width: "auto" }}
        >
          <p>
            Sukkur IBA University – Kandhkot Campus has been established with a
            goal to offer access to quality education to the people of
            underprivileged areas of Pakistan. With its geographical importance
            in Kandhkot city, the campus provides easy access to the students
            hailing from south Punjab, northern Sindh, and south-east
            Balochistan. The campus offers admission in various programs
            including undergraduate, foundation semester, summer program, and
            short courses. Undergraduate programs offered in three important
            disciplines: Bachelor of Business Administration Bachelor of
            Computer Science Bachelor of Education
          </p>
        </Card>
      </div>
    </>
  );
};

export default Main;
