import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Breadcrumb, Button } from "antd";
import { Image } from "antd";
import { Space, Table, Tag } from "antd";

import News from "../../components/card/News";

const ProgramBody = ({ props }) => {
  return (
    <>
      <Row gutter={[40, 40]} style={{ marginTop: "2%" }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <h2 className="page-title">Program Mission Statement:</h2>
          <p>{props && props.mission}</p>
          <h2 className="page-title">Program Learning Outcomes (PLO)</h2>
          <p>{props && props.outcomes}</p>
          <h2 className="page-title">Eligibility Criteria for Admission:</h2>
          <p>{props && props.eligibility}</p>
        </Col>
      </Row>
    </>
  );
};

export default ProgramBody;
