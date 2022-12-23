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
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <News />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Events />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Announcements />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Group;
