import React from "react";
import { Card, Col, Row } from "antd";
import News  from "./News";
import Events from "./Events";
// import Query from "./Query";
import Announcements from "./Announcements";

const Group = () => {
  return (
    <>
      <div className="site-card-wrapper" style={{ marginTop: "5%" }}>
        <Row gutter={70}>
          <Col span={8}>
            <News />
          </Col>
          <Col span={8}>
            <Events />
          </Col>
          <Col span={8}>
            <Announcements />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Group;
